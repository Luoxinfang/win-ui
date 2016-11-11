import ElFormItem from './src/form-item'
import ElForm from './src/form'

//sS+ ignore next */
export default function(Vue) {
  Vue.component(ElForm.name, ElForm)
  Vue.component(ElFormItem.name, ElFormItem)
}

export { ElForm, ElFormItem }
