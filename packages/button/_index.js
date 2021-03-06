import ElButton from './src/button'
import ElButtonGroup from './src/button-group'

//sS+ ignore next */
export default function(Vue) {
  Vue.component(ElButton.name, ElButton)
  Vue.component(ElButtonGroup.name, ElButtonGroup)
}

export {
  ElButton,
  ElButtonGroup
}
