# Card
卡片组件

### 示例
<cc-card imgSrc="/logo.png" summary="Vue" />

### 代码
```vue
<cc-card imgSrc="/logo.png" summary="Vue" />
```

### 属性
| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| --- | --- | --- | --- | --- | ---|
| width  | 卡片宽度 | Number | false | 270px |
| imgSrc | 图片资源地址 | String | true | - |
| imgHeight | 图片高度 | Number | false | 152px |
| summary | 卡片概要 | String/Slot | false | - |
| footer | 卡片底部 | Slot | false | - |