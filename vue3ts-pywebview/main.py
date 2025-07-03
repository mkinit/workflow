import sys

import webview

isdev = sys.flags.dev_mode

if isdev:
	url = 'http://localhost:5173'
else:
	url = 'dist/index.html'

def reload_module(module_name):
	module = importlib.import_module(module_name)
	importlib.reload(module)
	return module

# 测试暴露给前端的函数
def test():
	return '这是通过func参数暴露给前端的函数'

# 测试暴露给前端的函数
def test2():
	return '这是通过func参数暴露给前端的函数'

# 测试暴露给前端的函数
def test3():
	return '这是通过window.expose暴露给前端的函数'

# 测试暴露给前端的函数
def test4():
	return '这是通过window.expose暴露给前端的函数'

# 抛出错误，在前端是reject状态
def reject():
	raise Exception('这是reject的演示')

# 统一暴露函数
def expose(window):
	window.expose(test, test2) #window.expose是暴露函数给前端的核心
	pass

if __name__ == '__main__':
	window = webview.create_window(title = 'Python + pywebview', url = url)
	# 1、使用window.expose方式暴露函数给前端
	window.expose(test3, test4, reject)
	# 2、使用func传参方式暴露函数给前端
	webview.start(func = expose, args = window, debug = isdev)