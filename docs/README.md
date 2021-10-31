# 快速开始

### 安装组件库
```bash
npm i cc-ui-test
```

### 使用组件库
> 在main.js中引用组件库
```javascript
// 全部引入
import 'cc-ui/dist/css/index.css'
import CCUI from 'cc-ui'
Vue.use(CCUI)

// 按需引入
import 'cc-ui/dist/css/demo.css'
import { Demo } from 'cc-ui'
Vue.use(Demo)
```
