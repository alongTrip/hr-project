<template>
  <a-layout>
    <drawer v-if="isMobile" :openDrawer="collapsed" @change="onDrawerChange">
      <sider-menu :theme="theme" :menuData="menuData" :collapsed="false" :collapsible="false" @menuSelect="onMenuSelect"/>
    </drawer>
    <sider-menu :theme="theme" v-else-if="layout === 'side'" :menuData="menuData" :collapsed="collapsed" :collapsible="true" />
      <!--伸缩右侧css/id-->
    <a-layout :style="{marginLeft}">
      <global-header :menuData="menuData" :collapsed="collapsed" @toggleCollapse="toggleCollapse"/>
      <a-layout-content :style="{minHeight: minHeight, margin: '24px 24px 0'}">
        <slot></slot>
      </a-layout-content>
      <a-layout-footer style="padding: 0px">
        <global-footer :link-list="linkList" :copyright="copyright" />
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import ALayout from 'ant-design-vue/es/layout'
import AIcon from 'ant-design-vue/es/icon/icon'
import GlobalHeader from './GlobalHeader'
import GlobalFooter from './GlobalFooter'
import Drawer from '../components/tool/Drawer'
import IMenu from '../components/menu/menu'
import SiderMenu from '../components/menu/SiderMenu'
import Setting from '../components/setting/Setting'


const ALayoutSider = ALayout.Sider
const ALayoutHeader = ALayout.Header
const ALayoutContent = ALayout.Content
const ALayoutFooter = ALayout.Footer
const minHeight = window.innerHeight - 64 - 24 - 122

let menuData = []

export default {
  name: 'GlobalLayout',
  components: {
    SiderMenu,
    GlobalFooter,
    AIcon,
    GlobalHeader,
    ALayout,
    ALayoutSider,
    ALayoutHeader,
    ALayoutContent,
    ALayoutFooter,
    IMenu,
    Drawer},
  data () {
    return {
      minHeight: minHeight + 'px',
      collapsed: false,
      menuData: menuData,
      showSetting: false,
      marginLeft:'256px'
    }
  },
  mounted(){

  },
  computed: {
    isMobile () {
      return this.$store.state.setting.isMobile
    },
    theme () {
      return this.$store.state.setting.theme
    },
    layout () {
      return this.$store.state.setting.layout
    },
    linkList () {
      return this.$store.state.setting.footerLinks
    },
    copyright () {
      return this.$store.state.setting.copyright
    }
  },
  methods: {
    toggleCollapse () {

      this.collapsed = !this.collapsed
      //切换时操作伸缩右侧
      this.marginLeft = this.collapsed ? '80px':'256px'

    },
    onDrawerChange (show) {
      this.collapsed = show
    },
    onMenuSelect () {
      this.toggleCollapse()
    },
    onSettingDrawerChange (val) {
      this.showSetting = val
    }
  },
  beforeCreate () {
    menuData = this.$router.options.routes.find((item) => item.path === '/').children
  }
}
</script>

<style lang="less" scoped>

  .setting{
    background-color: #1890ff;
    color: #fff;
    border-radius: 5px 0 0 5px;
    line-height: 40px;
    font-size: 22px;
    width: 40px;
    height: 40px;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);
  }
</style>