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

## 注意事项

### TS
- pywebview在前端调用时，TS是无法检测到的，所以打包的时候需要在JS代码第一行写个注释：// @ts-nocheck

### nuitka
- nuitka打包时，手动引用第三方程序的文件夹，使用“--include-data-dir=文件夹=文件夹”打包参数是无效的，python和exe相关代码文件会被忽略（不复制），需要使用“--include-data-files=文件夹/*=文件夹/”
	- 具体文件后缀文档说明：https://nuitka.net/user-documentation/user-manual.html#code-is-not-data-files