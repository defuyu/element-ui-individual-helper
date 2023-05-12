## SearchItem Attributes 

| 参数     | 说明                                                         | 类型          | 可选值 | 默认值 |
| -------- | ------------------------------------------------------------ | ------------- | ------ | ------ |
| label    | 标签名                                                       | Number,String |        |        |
| prop     | 对应item的字段名                                             | string        |        |        |
| type     | 搜索的类型，见下表的类型列表, 注意备注，来源于统一枚举值的Key | string        |        |        |
| enuKey   | 适用于type=select                                            | string        |        |        |
| options  | 适用于type=select，格式：[{label:'',value:''}]               | Array         |        |        |
| isAcc    | 仅仅适用于账务系统：适用于type=select                        | Boolean       |        | false  |
| required | 有的需求是需要有一个必填的搜索条件时使用                     | Boolean       |        | false  |
| disabled | 有的需求是需要有默认值且不可以更改，在点击重置按钮的时候，值不会被重置 | Boolean       |        | false  |

#### Type list，如果类型不够用，请联系 Troye.Wang 维护增加

| type类型      | 说明                                                         | 类型 | 可选值 | 默认值 |
| ------------- | ------------------------------------------------------------ | ---- | ------ | ------ |
| input         | 文本输入框类型                                               |      |        |        |
| select        | 下拉框类型，如果需要多选，增加multiple属性，返回的值为jion(',')后返回的值 |      |        |        |
| number        | 输入数字类型                                                 |      |        |        |
| cascader      | cascader类型，options需要传入                                |      |        |        |
| date          | 日期选择类型                                                 |      |        |        |
| daterange     | 日期区间选择类型，需要增加rangeKey 属性 ['start','end']      |      |        |        |
| datetimerange | 时间区间选择类型，需要增加rangeKey 属性 ['start','end']      |      |        |        |
| numberRange   | 数字区间选择类型，需要增加rangeKey 属性 ['start','end']      |      |        |        |

