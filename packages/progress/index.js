import ElProgress from './src/progress'

//sS+ ignore next */
ElProgress.install = function(Vue) {
  Vue.component(ElProgress.name, ElProgress)
}

export default ElProgress
