# NumberInput

## Basic

::: warning tips
 处理数字输入
:::


 ```js
//  在项目的main.js 全局注册

import { NumInput } from '@components'
Vue.component(NumInput.name, NumInput)


// 或者
 import numInput from 'sy-base-ui'
 Vue.use(numInput)
 ```



```html
<!--  2位小数的输入，且有千分位 -->
<num-input v-model="aaaa"><num-input>

<!--  2位小数的输入，没有千分位 -->
<num-input v-model="aaaa" is-normal-num><num-input>

<!--  限制只能是整数的输入，没有千分位 -->
<num-input v-model="aaaa" is-normal-num :precision="0"><num-input>

<!--  2位小数的输入，且有千分位  最大输入限制为100-->
<num-input v-model="aaaa" max="100"><num-input>

<!-- 。。。。等等 -->
```

## NumInput Attributes 

| 参数        | 说明                                                         | 类型          | 可选值 | 默认值      |
| ----------- | ------------------------------------------------------------ | ------------- | ------ | ----------- |
| precision   | 默认值为2， 为 0 时表示只能输入整数，为 1-5 时表示只能有几位小数点 不足的时候会自动补齐后面的 0 | Number        |        | 2           |
| negative    | 默认值为false 为true时支持负数，为false时不支持负数          | Boolean       |        | false       |
| isNormalNum | 默认值为false 为true时是没有千分位格式化。为false时有        | Number        |        | false       |
| tofixed     | 默认值为false 为true时是进行四舍五入, 为true时,直接截断，可以搭配precision使用 | Boolean       |        | false       |
| max         | 默认值为99999999999  ，当输入的值超过max时，将值重置为设置的max的值 | Number,String |        | 99999999999 |

