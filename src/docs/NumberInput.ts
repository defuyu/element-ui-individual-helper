import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'precision', description: '默认值为2， 为 0 时表示只能输入整数，为 1-5 时表示只能有几位小数点 不足的时候会自动补齐后面的 0', type: 'Number', value: '', default: '2' },
  { name: 'negative', description: '默认值为false 为true时支持负数，为false时不支持负数', type: 'Boolean', value: '', default: 'false' },
  { name: 'isNormalNum', description: '默认值为false 为true时是没有千分位格式化。为false时有', type: 'Number', value: '', default: 'false' },
  { name: 'tofixed', description: '默认值为false 为true时是进行四舍五入, 为true时,直接截断，可以搭配precision使用', type: 'Boolean', value: '', default: 'false' },
  { name: 'max', description: '默认值为99999999999  ，当输入的值超过max时，将值重置为设置的max的值', type: 'Number,String', value: '', default: '99999999999' }
]

export const document: ElDocument = { attributes }

export default document
