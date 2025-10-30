# My Private Package

一个私有的 npm 包示例，包含常用的工具函数。

## 安装

### 通过 Git 仓库安装

```bash
# 从 GitHub 安装
npm install git+https://github.com/your-username/my-private-package.git

# 从 GitLab 安装
npm install git+https://gitlab.com/your-username/my-private-package.git

# 指定版本/分支/标签
npm install git+https://github.com/your-username/my-private-package.git#v1.0.0
npm install git+https://github.com/your-username/my-private-package.git#main
```

### 在 package.json 中使用

```json
{
  "dependencies": {
    "@your-username/my-private-package": "git+https://github.com/your-username/my-private-package.git#v1.0.0"
  }
}
```

## 使用方法

```javascript
// 导入整个包
const utils = require('@your-username/my-private-package');

// 或者解构导入
const { formatDate, deepClone, debounce } = require('@your-username/my-private-package');

// 使用示例
console.log(utils.formatDate()); // 2023-10-30
console.log(utils.formatDate(new Date(), 'YYYY/MM/DD HH:mm:ss')); // 2023/10/30 14:30:25

const original = { a: 1, b: { c: 2 } };
const cloned = utils.deepClone(original);

const debouncedFunc = utils.debounce(() => console.log('执行了！'), 500);
```

## API 文档

### formatDate(date, format)
格式化日期

- `date` (Date): 日期对象，默认为当前时间
- `format` (string): 格式化字符串，默认为 'YYYY-MM-DD'
- 返回: (string) 格式化后的日期字符串

### deepClone(obj)
深拷贝对象

- `obj` (any): 要拷贝的对象
- 返回: (any) 拷贝后的对象

### debounce(func, wait)
防抖函数

- `func` (Function): 要执行的函数
- `wait` (number): 等待时间（毫秒），默认 300
- 返回: (Function) 防抖后的函数

### throttle(func, limit)
节流函数

- `func` (Function): 要执行的函数
- `limit` (number): 时间限制（毫秒），默认 300
- 返回: (Function) 节流后的函数

### randomString(length)
生成随机字符串

- `length` (number): 字符串长度，默认 10
- 返回: (string) 随机字符串

## 版本更新

### 更新包的步骤

1. 修改代码
2. 更新 package.json 中的版本号
3. 提交并推送到 Git 仓库
4. 创建新的 Git 标签（可选但推荐）

```bash
git add .
git commit -m "v1.1.0: 添加新功能"
git tag v1.1.0
git push origin main --tags
```

### 在项目中更新包

```bash
# 更新到最新版本
npm update @your-username/my-private-package

# 或者重新安装指定版本
npm install git+https://github.com/your-username/my-private-package.git#v1.1.0
```

## 开发

```bash
# 克隆仓库
git clone https://github.com/your-username/my-private-package.git
cd my-private-package

# 安装依赖（如果有）
npm install

# 测试
npm test
```

## 许可证

MIT