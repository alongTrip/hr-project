<template>
    <a-locale-provider :locale="locale">
        <div id="app">
          <router-view/>
        </div>
    </a-locale-provider>
</template>
<script>
import enquireScreen from './utils/device'
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
import ALocaleProvider from 'ant-design-vue/es/locale-provider'
import axios from 'axios';
// import {authorityAction} from '@/servers/pageAuthority.js'
export default {
  name: 'App',
  components: {
     ALocaleProvider,
  },
  data() {
    return {
      locale: zhCN,
    }
  },
  // 兼容IE浏览器的渲染和跳转的切换
   mounted(){
    // authorityAction()
    function checkIE(){
      return '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style
    }
      if (checkIE()) {
        window.addEventListener('hashchange', () => {
          var currentPath = window.location.hash.slice(1);
          if (this.$route.path !== currentPath) {
          this.$router.push(currentPath)
        }
      }, false)
    }
  }
}
</script>

<style lang="less">
:global{
    //拖拽控件全局样式
    .dragable-ghost{
      border: 1px dashed #aaaaaa;
      opacity: 0.65;
    }
    .dragable-chose{
      border: 1px dashed #aaaaaa;
      opacity: 0.65;
    }
    .dragable-drag{
      border: 1px dashed #aaaaaa;
      opacity: 0.65;
    }
    //页面切换动画
    .page-toggle-enter-active{
      transition: all 0.2s ease-in 0.25s;
    }
    .page-toggle-leave-active{
      transition: all 0.2s ease-out 0s;
    }
    .page-toggle-enter, .page-toggle-leave-to{
      opacity: 0;
      padding: 0px;
    }
  }
</style>
