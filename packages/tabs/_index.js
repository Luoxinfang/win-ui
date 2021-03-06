import ElTabs from './src/tabs'
import ElTabPane from './src/tab-pane'

//sS+ ignore next */
export default function(Vue) {
  Vue.component(ElTabs.name, ElTabs)
  Vue.component(ElTabPane.name, ElTabPane)
}

export { ElTabs, ElTabPane }
