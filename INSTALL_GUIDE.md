# PPChat 用户安装指南

欢迎使用 PPChat Codex！本指南将帮助你快速安装和配置 Codex 开发环境。

## 🚀 快速开始（推荐）

### 步骤 1: 下载安装包

从以下方式获取安装包：

```bash
# 方式 A: 克隆 Git 仓库
git clone https://github.com/your-username/ppchat.git
cd ppchat

# 方式 B: 通过 npm 直接安装
npm install -g git+https://github.com/your-username/ppchat.git
```

### 步骤 2: 运行安装脚本

**如果你克隆了仓库：**
```bash
node index.js
```

**如果你通过 npm 全局安装：**
```bash
ppchat-setup
```

### 步骤 3: 输入 API Key

按照提示输入你的 OpenAI API Key（以 `sk-` 开头）。

### 步骤 4: 完成！

安装完成后，你就可以使用 Codex 了。

---

## 📋 详细安装步骤

### 1. 系统要求

- Node.js 版本 >= 14.x
- npm 版本 >= 6.x
- 网络连接

检查版本：
```bash
node --version
npm --version
```

### 2. 安装方式选择

#### 方式 A：克隆仓库（推荐新手）

```bash
# 1. 克隆仓库
git clone https://github.com/your-username/ppchat.git

# 2. 进入目录
cd ppchat

# 3. 运行安装脚本
node index.js
```

#### 方式 B：npm 全局安装（推荐开发者）

```bash
# 1. 全局安装
npm install -g git+https://github.com/your-username/ppchat.git

# 2. 运行命令
ppchat-setup
```

---

## 🔑 如何获取 API Key

1. 访问 PPChat 官网：https://ppchat.vip
2. 注册/登录账号
3. 进入控制台获取 API Key
4. 复制密钥（格式：sk-xxxxxxxxxx）

---

## ❗ 常见问题与解决方案

### 问题 1: 权限不足

**Mac/Linux:**
```bash
sudo node index.js
```

**Windows:**
以管理员身份运行命令提示符

### 问题 2: API Key 格式错误

确保 API Key 以 `sk-` 开头，没有多余空格

### 问题 3: 网络连接问题

脚本已使用国内镜像源，如仍有问题，请检查网络连接

---

## 📞 获取帮助

- 提交 Issue: https://github.com/your-username/ppchat/issues
- PPChat 官网: https://ppchat.vip

**祝你编码愉快！** 🚀
