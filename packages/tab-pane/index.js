import TabPane from '../tabs/src/tab-pane.vue'

//sS+ ignore next */
TabPane.install = function(Vue) {
  Vue.component(TabPane.name, TabPane)
}

export default TabPane
