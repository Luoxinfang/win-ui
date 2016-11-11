import Tooltip from './src/main'

//sS+ ignore next */
Tooltip.install = function(Vue) {
  Vue.component(Tooltip.name, Tooltip)
}

export default Tooltip
