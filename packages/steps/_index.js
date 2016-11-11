import Steps from './src/steps'
import Step from './src/step'

//sS+ ignore next */
export default function(Vue) {
  Vue.component(Steps.name, Steps)
  Vue.component(Step.name, Step)
}

export { Step, Steps }
