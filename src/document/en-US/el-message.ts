import { ElDocument } from 'typings/document'
import { DocumentMethod } from 'typings/method'

export const methods: DocumentMethod[] = [{ name: 'close', description: 'close the Message', parameter: '' }]

export const document: ElDocument = { methods }

export default document
