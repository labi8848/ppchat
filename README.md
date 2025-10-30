# PPChat Codex 一键安装配置工具

一个自动化安装和配置 @openai/codex 的 npm 包，帮助你快速设置 PPChat Codex 开发环境。

## ✨ 功能特点

- 🚀 自动安装 @openai/codex（全局）
- 📁 自动创建 ~/.codex 配置目录
- ⚙️ 自动生成 config.toml 配置文件
- 🔑 交互式配置 API Key
- 🖥️ 跨平台支持（Windows/Mac/Linux）
- 🎨 彩色命令行输出，友好的用户体验

## 📦 安装方式

### 方式一：直接从 Git 仓库安装并运行

```bash
# 克隆仓库
git clone https://github.com/your-username/ppchat.git
cd ppchat

# 运行安装脚本
node index.js
```

### 方式二：通过 npm 从 Git 仓库安装

```bash
# 安装到全局
npm install -g git+https://github.com/your-username/ppchat.git

# 运行安装命令
ppchat-setup
```

### 方式三：在项目中使用

```bash
# 添加到项目依赖
npm install git+https://github.com/your-username/ppchat.git

# 在项目中运行
npx ppchat-setup
```

## 🚀 使用方法

运行安装脚本后，按照提示操作：

```bash
node index.js
```

安装过程中会：

1. 检测你的操作系统（Windows/Mac/Linux）
2. 自动安装 @openai/codex（使用国内镜像源加速）
3. 在用户目录创建 `.codex` 文件夹
4. 生成 `config.toml` 配置文件
5. 提示你输入 OpenAI API Key
6. 生成 `auth.json` 认证文件

### 示例输出

```
🎯 PPChat Codex 一键安装配置工具
==================================================

🚀 开始安装 @openai/codex...
执行命令: npm install -g @openai/codex --registry https://registry.npmmirror.com
✅ @openai/codex 安装成功！

📁 创建配置目录...
✅ 创建目录: C:\Users\YourName\.codex

📝 创建 config.toml 文件...
✅ 创建文件: C:\Users\YourName\.codex\config.toml

🔑 配置 API Key...
请输入你的 OpenAI API Key (sk-xxx): sk-your-api-key-here
✅ 创建文件: C:\Users\YourName\.codex\auth.json

🎉 安装配置完成！
```

## 📝 配置文件说明

### config.toml

位置：`~/.codex/config.toml`

```toml
model_provider = "codex"
model = "gpt-5" #可更改为model = "gpt-5-codex"
model_reasoning_effort = "high"
disable_response_storage = true

[model_providers.codex]
name = "codex"
base_url = "https://code.ppchat.vip/v1"
wire_api = "responses"
requires_openai_auth = true
```

### auth.json

位置：`~/.codex/auth.json`

```json
{
    "OPENAI_API_KEY": "sk-your-api-key-here"
}
```

## 🔧 手动配置

如果需要手动修改配置：

### 更改模型

编辑 `~/.codex/config.toml`，将：
```toml
model = "gpt-5"
```
改为：
```toml
model = "gpt-5-codex"
```

### 更换 API Key

编辑 `~/.codex/auth.json`，替换你的新 API Key：
```json
{
    "OPENAI_API_KEY": "sk-new-api-key"
}
```

## 🌍 平台差异

### Windows
```bash
npm install -g @openai/codex --registry https://registry.npmmirror.com
```

### Mac/Linux
```bash
sudo npm install -g @openai/codex --registry https://registry.npmmirror.com
```

脚本会自动检测你的操作系统并使用正确的命令。

## ❓ 常见问题

### Q: 安装失败怎么办？

**权限问题（Mac/Linux）：**
```bash
# 使用 sudo 运行
sudo node index.js
```

**Windows 权限问题：**
- 以管理员身份运行命令提示符或 PowerShell

### Q: API Key 格式错误？

确保你的 API Key：
- 以 `sk-` 开头
- 从 PPChat 或 OpenAI 平台获取
- 没有多余的空格

### Q: 如何获取 API Key？

访问 PPChat 平台获取你的 API Key。

### Q: 配置文件在哪里？

- Windows: `C:\Users\你的用户名\.codex\`
- Mac/Linux: `~/.codex/` 或 `/home/你的用户名/.codex/`

### Q: 如何卸载？

```bash
# 卸载 @openai/codex
npm uninstall -g @openai/codex

# 删除配置文件（可选）
# Windows
rmdir /s /q %USERPROFILE%\.codex

# Mac/Linux
rm -rf ~/.codex
```

## 🛠️ 开发

### 项目结构

```
ppchat/
├── index.js           # 主安装脚本
├── package.json       # npm 配置文件
├── README.md          # 项目文档
├── INSTALL_GUIDE.md   # 安装指南
└── templates/         # 配置文件模板
    ├── config.toml    # 配置文件模板
    └── auth.json      # 认证文件模板
```

### 本地测试

```bash
# 克隆仓库
git clone https://github.com/your-username/ppchat.git
cd ppchat

# 直接运行测试
node index.js

# 或者本地安装测试
npm link
ppchat-setup
```

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📮 联系方式

如有问题或建议，请通过以下方式联系：
- 提交 Issue: https://github.com/your-username/ppchat/issues
- PPChat 官网: https://ppchat.vip

---

**享受编码的乐趣！** 🎉
