## FormItem Attributes 

| 参数          | 说明                                                         | 类型           | 可选值 | 默认值                             |
| ------------- | ------------------------------------------------------------ | -------------- | ------ | ---------------------------------- |
| label         | 标签名                                                       | Number,String  |        |                                    |
| prop          | 对应item的字段名                                             | string         |        |                                    |
| use           | 搜索的类型，见下表的类型列表, 注意备注。来源于统一枚举值的Key | string         |        |                                    |
| enuKey        | 适用于type=select                                            | string         |        |                                    |
| options       | 适用于type=select，格式：[{label:'',value:''}]               | Array          |        | []                                 |
| isAcc         | 仅仅适用于账务系统：适用于type=select                        | Boolean        |        | false                              |
| required      | 有的需求是需要有一个必填的搜索条件时使用                     | Boolean        |        | false                              |
| disabled      | 是否需要禁用                                                 | Boolean        |        | false                              |
| readOnly      | 是否是只读                                                   | Boolean        |        | false                              |
| readItem      | 是否在整个表单禁用的情况下显示表单/插槽的内容                | Boolean        |        | false                              |
| cover         | item占用几列 ，如果 FormModule的 row为2，需要占用整行，则cover=2 | Number         |        | false                              |
| isHidden      | 是否隐藏表单元素，但是位置存在                               | Boolean        |        | false                              |
| tips          | 提示语                                                       | String，Number |        |                                    |
| isAccount     | 用于只读页面的账号的格式化                                   | Boolean        |        | false                              |
| isMoeny       | 用于只读页面的金额格式化使用                                 | Boolean        |        | false                              |
| moneyPrefix   | 金额前缀                                                     | String         |        |                                    |
| valueFormat   | 当use为date/datetime/daterange/datetimerange时生效，use=datetimerange/datetime时返回yyyy-MM-dd HH:MM:SS，否则返回yyyy-MM-dd | String         |        | "yyyy-MM-dd HH:MM:SS"/"yyyy-MM-dd" |
| formItemAttrs | e l-form-item的属性v-bind                                    | Object         |        |                                    |


#### use list，如果类型不够用，请联系 Troye.Wang/Carl.Yu 维护增加

| use类型       | 说明                                                         | 类型 | 可选值 | 默认值 |
| ------------- | ------------------------------------------------------------ | ---- | ------ | ------ |
| input         | 文本输入框类型                                               |      |        |        |
| textarea      | 文本域输入框                                                 |      |        |        |
| radio         | 单选框                                                       |      |        |        |
| select        | 下拉框类型，如果需要多选，增加multiple属性，返回的值为jion(',')后返回的值 |      |        |        |
| number        | 输入数字类型                                                 |      |        |        |
| money         | 输入金额类型                                                 |      |        |        |
| cascader      | cascader类型，options需要传入                                |      |        |        |
| date          | 日期选择类型                                                 |      |        |        |
| daterange     | 日期区间选择类型，需要增加rangeKey 属性 ['start','end']      |      |        |        |
| datetimerange | 时间区间选择类型，需要增加rangeKey 属性 ['start','end']      |      |        |        |
| numberRange   | 数字区间选择类型，需要增加rangeKey 属性 ['start','end']      |      |        |        |

## FormItem Scoped Slot

| 参数   | 说明                                 |
| ------ | ------------------------------------ |
| button | 用来在输入框后面增加一个按钮的插槽， |
