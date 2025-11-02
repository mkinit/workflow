# Vue3 + pywebview

## python环境（本示例版本：3.12.10）
- 创建虚拟环境： python -m venv venv
- 安装依赖：venv\scripts\pip install -r requirements.txt

## 前端环境
- 安装依赖：npm install

## 前端和python环境一键安装
- npm run init

## package.json命令说明
- init：安装前端依赖、创建虚拟环境、安装python依赖
- dev：echo 启动前端工程
- dev-app：启动python工程
- start：同步启动前端和python工程
- build：打包前端工程
- build-pyinstaller：打包python工程（pyinstaller）
- build-pyinstaller-all：同步打包前端和python工程（pyinstaller）
- build-nuitka：打包python工程（nuitka）
- build-nuitka-all：同步打包前端和python工程（nuitka）