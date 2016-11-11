import ElAutocomplete from './src/autocomplete'

//sS+ ignore next */
ElAutocomplete.install = function(Vue) {
  Vue.component(ElAutocomplete.name, ElAutocomplete)
}

export default ElAutocomplete
