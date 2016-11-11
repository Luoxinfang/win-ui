import Badge from './src/main'

//sS+ ignore next */
Badge.install = function(Vue) {
  Vue.component(Badge.name, Badge)
}

export default Badge
