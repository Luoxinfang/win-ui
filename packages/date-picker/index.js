import DatePicker from './src/picker/date-picker'

//sS+ ignore next */
DatePicker.install = function install(Vue) {
  Vue.component(DatePicker.name, DatePicker)
}

export default DatePicker
