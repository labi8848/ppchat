#!/usr/bin/env node

/**
 * PPChat Codex 一键安装配置工具
 * 自动安装 @openai/codex 并配置相关文件
 */

const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');
const readline = require('readline');

// 颜色输出
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  reset: '\x1b[0m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// 检测操作系统
function getOS() {
  const platform = os.platform();
  if (platform === 'win32') return 'windows';
  if (platform === 'darwin') return 'mac';
  return 'linux';
}

// 获取用户输入
function getUserInput(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

// 安装 @openai/codex
function installCodex() {
  const osType = getOS();
  let command;

  log('\n🚀 开始安装 @openai/codex...', 'cyan');

  if (osType === 'windows') {
    command = 'npm install -g @openai/codex --registry https://registry.npmmirror.com';
  } else {
    command = 'sudo npm install -g @openai/codex --registry https://registry.npmmirror.com';
  }

  log(`执行命令: ${command}`, 'yellow');

  try {
    execSync(command, { stdio: 'inherit' });
    log('✅ @openai/codex 安装成功！', 'green');
    return true;
  } catch (error) {
    log('❌ @openai/codex 安装失败！', 'red');
    log(`错误信息: ${error.message}`, 'red');
    return false;
  }
}

// 创建 .codex 目录
function createCodexDir() {
  const homeDir = os.homedir();
  const codexDir = path.join(homeDir, '.codex');

  log('\n📁 创建配置目录...', 'cyan');

  if (!fs.existsSync(codexDir)) {
    fs.mkdirSync(codexDir, { recursive: true });
    log(`✅ 创建目录: ${codexDir}`, 'green');
  } else {
    log(`📂 目录已存在: ${codexDir}`, 'yellow');
  }

  return codexDir;
}

// 创建 config.toml 文件
function createConfigToml(codexDir) {
  const configPath = path.join(codexDir, 'config.toml');

  const configContent = `model_provider = "codex"
model = "gpt-5" #可更改为model = "gpt-5-codex"
model_reasoning_effort = "high"
disable_response_storage = true


[model_providers.codex]
name = "codex"
base_url = "https://code.ppchat.vip/v1"
wire_api = "responses"
requires_openai_auth = true`;

  log('\n📝 创建 config.toml 文件...', 'cyan');

  try {
    fs.writeFileSync(configPath, configContent, 'utf8');
    log(`✅ 创建文件: ${configPath}`, 'green');
    return true;
  } catch (error) {
    log(`❌ 创建 config.toml 失败: ${error.message}`, 'red');
    return false;
  }
}

// 创建 auth.json 文件
async function createAuthJson(codexDir) {
  const authPath = path.join(codexDir, 'auth.json');

  log('\n🔑 配置 API Key...', 'cyan');

  // 获取用户的 API Key
  const apiKey = await getUserInput('请输入你的 OpenAI API Key (sk-xxx): ');

  if (!apiKey || !apiKey.startsWith('sk-')) {
    log('❌ API Key 格式不正确，应该以 sk- 开头', 'red');
    return false;
  }

  const authContent = {
    "OPENAI_API_KEY": apiKey
  };

  try {
    fs.writeFileSync(authPath, JSON.stringify(authContent, null, 4), 'utf8');
    log(`✅ 创建文件: ${authPath}`, 'green');
    return true;
  } catch (error) {
    log(`❌ 创建 auth.json 失败: ${error.message}`, 'red');
    return false;
  }
}

// 显示完成信息
function showCompletionInfo() {
  log('\n🎉 安装配置完成！', 'green');
  log('\n📋 已完成以下操作:', 'cyan');
  log('  ✅ 安装 @openai/codex', 'green');
  log('  ✅ 创建 ~/.codex 目录', 'green');
  log('  ✅ 创建 config.toml 配置文件', 'green');
  log('  ✅ 创建 auth.json 认证文件', 'green');

  log('\n🚀 现在你可以使用 Codex 了！', 'magenta');
  log('\n💡 提示:', 'yellow');
  log('  • 如需修改模型，可编辑 ~/.codex/config.toml', 'yellow');
  log('  • 如需更换 API Key，可编辑 ~/.codex/auth.json', 'yellow');
}

// 主函数
async function main() {
  console.clear();
  log('🎯 PPChat Codex 一键安装配置工具', 'magenta');
  log('=' .repeat(50), 'cyan');

  try {
    // 1. 安装 @openai/codex
    const installSuccess = installCodex();
    if (!installSuccess) {
      process.exit(1);
    }

    // 2. 创建 .codex 目录
    const codexDir = createCodexDir();

    // 3. 创建 config.toml
    const configSuccess = createConfigToml(codexDir);
    if (!configSuccess) {
      process.exit(1);
    }

    // 4. 创建 auth.json
    const authSuccess = await createAuthJson(codexDir);
    if (!authSuccess) {
      process.exit(1);
    }

    // 5. 显示完成信息
    showCompletionInfo();

  } catch (error) {
    log(`\n❌ 安装过程中出现错误: ${error.message}`, 'red');
    process.exit(1);
  }
}

// 如果直接运行此脚本
if (require.main === module) {
  main();
}

// 导出函数供其他模块使用
module.exports = {
  main,
  installCodex,
  createCodexDir,
  createConfigToml,
  createAuthJson
};
