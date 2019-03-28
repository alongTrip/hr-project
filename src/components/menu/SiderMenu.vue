<template>
  <a-layout-sider :class="[theme, 'sider', isMobile ? null : 'shadow']" width="256px" :collapsible="collapsible" v-model="collapsed"
  :trigger="null" style="position:fixed; height: 3000px;" >
    <div :class="['logo', theme]" >
      <router-link to="/pandectPage/cockpit">
          <img src="static/img/cczq.svg">
      </router-link>
    </div>
    <i-menu :theme="theme" :collapsed="collapsed" :menuData="menuData" @select="onSelect" class="leftSider"/>
  </a-layout-sider>
</template>

<script>
import ALayoutSider from 'ant-design-vue/es/layout/Sider'
import IMenu from './menu'
export default {
  name: 'SiderMenu',
  components: {IMenu, ALayoutSider},
  props: {
    collapsible: {
      type: Boolean,
      required: false,
      default: false
    },
    collapsed: {
      type: Boolean,
      required: false,
      default: false
    },
    menuData: {
      type: Array,
      required: true
    },
    theme: {
      type: String,
      required: false,
      default: 'dark'
    }
  },
  data(){
     return {
        aa:window.location.hash,
     }
  },
  mounted(){
     var userAgent = navigator.userAgent;
     var isEdge = userAgent.indexOf("Edge")
     if(isEdge > 0){
       var menuHeight = document.querySelector('.leftSider')
       menuHeight.style.height = 3000 + 'px'
       menuHeight.style.position = 'absolute'
       menuHeight.style.boxShadow = '2px 0px 6px rgba(0,21,41,0.35)'
       menuHeight.style.background = '#001529'
     }
     var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1
     if(isIE){
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if(fIEVersion == 9){
            var antLayoutSider = document.querySelector('.ant-layout-sider')
            antLayoutSider.style.float = 'left'
            var menuHeight = document.querySelector('.leftSider')
            menuHeight.style.height = 3000 + 'px'
            menuHeight.style.position = 'absolute'
            menuHeight.style.boxShadow = '2px 0px 6px rgba(0,21,41,0.35)'
            menuHeight.style.background = '#001529'
            this.$store.commit('setting/setIsShow', true)
            // var ulDom = document.querySelector('.ant-table-pagination')
            // ulDom.style.marginLeft = '40%'
        } 
     }
  },
  computed: {
    isMobile () {
      return this.$store.state.setting.isMobile
    },
    systemName () {
      return this.$store.state.setting.systemName
    }
  },
  methods: {
    onSelect (obj) {
      this.$emit('menuSelect', obj)
    }
  }
}

</script>
<style lang="less" scoped>
  .shadow{
    box-shadow: 2px 0 6px rgba(0,21,41,.35);
  }
  .sider{
    z-index: 10;
    &.light{
      background-color: #fff;
    }
    &.dark{
      background-color: #001529;
    }
    .logo{
      height: 64px;
      position: relative;
      line-height: 64px;
      padding-left: 0px;
      -webkit-transition: all .3s;
      transition: all .3s;
      overflow: hidden;
      &.light{
        background-color: #fff;
        h1{
          color: #1890ff;
        }
      }
      &.dark{
        background-color: #002140;
        h1{
          color: #fff;
        }
      }
      h1{
        color: #fff;
        font-size: 20px;
        margin: 0 0 0 12px;
        font-family: "Myriad Pro","Helvetica Neue",Arial,Helvetica,sans-serif;
        font-weight: 600;
        display: inline-block;
        height: 32px;
        line-height: 32px;
        vertical-align: middle;
      }
      img{
        width:64px;
        height:100%;
        display:inline-block;
        transform: scale(3.8);
        margin-left:90px;
       /* position:absolute;
        top:0;
        right:-20px;*/
      }
    }
  }
</style>
