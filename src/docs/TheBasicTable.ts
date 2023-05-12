import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'havePagination', description: '是否展示分页组件', type: 'Boolean', value: '', default: '' },
  {
    name: 'pagination',
    description: '展示分页组件时必传，total为列表当前页总个数。当页面改变时，会动态改变page和size的值，因此需要以:pagination.async的方式使用',
    type: 'Object',
    value: '',
    default: '{page:1,size:10, total: 0}'
  },
  { name: 'paginationAttrs', description: 'e l-pagination组件的拓展属性', type: '', value: '', default: '' },
  { name: 'emptyStr', description: '给table-column的provider，空字符串占位', type: 'String', value: '', default: '""' },
  { name: 'isLoading', description: '表格局部更新的控制属性', type: 'Boolean', value: '', default: 'false' },
  { name: 'haveIndex', description: '是否有序号列', type: 'Boolean', value: '', default: 'true' },
  { name: 'indexColProps', description: '序号列el-table-column的拓展属性', type: 'Object', value: '', default: '' },
  { name: '...el-table的属性', description: '', type: '', value: '', default: '' }
]

export const events: DocumentEvent[] = [
  { name: 'pageChange', description: '当el-pagination的size-change、current-change事件触发时的回调', parameter: '变化后的pagination属性，{page, size, total}' },
  { name: '...el-table的事件', description: '', parameter: '' }
]

export const document: ElDocument = { attributes, events }

export default document
