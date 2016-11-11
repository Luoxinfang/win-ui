import ElTableColumn from '../table/src/table-column'

//sS+ ignore next */
ElTableColumn.install = function(Vue) {
  Vue.component(ElTableColumn.name, ElTableColumn)
}

export default ElTableColumn
