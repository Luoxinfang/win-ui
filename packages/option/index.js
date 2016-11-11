import ElOption from '../select/src/option'

//sS+ ignore next */
ElOption.install = function(Vue) {
  Vue.component(ElOption.name, ElOption)
}

export default ElOption
