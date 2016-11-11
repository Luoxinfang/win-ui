import Alert from './src/main'

//sS+ ignore next */
Alert.install = function(Vue) {
  Vue.component(Alert.name, Alert)
}

export default Alert
