import Upload from './src'

//sS+ ignore next */
Upload.install = function(Vue) {
  Vue.component(Upload.name, Upload)
}

export default Upload
