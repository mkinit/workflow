import tkinter
import sys, subprocess, webview

isdev = sys.flags.dev_mode

if isdev:
    # 开发环境
    url = "http://localhost:5173"
else:
    # 正式环境
    url = "dist/index.html"

root = tkinter.Tk()
window = None
width = 1024
height = 580
min_size = (640, 480)
screen_width = root.winfo_screenwidth()
screen_height = root.winfo_screenheight()
x = (screen_width / 2) - (width / 2)
y = (screen_height / 2) - (height / 2)

# 测试暴露给前端的函数
def test():
    return "这是通过webview启动时传入func参数暴露给前端的函数"


# 测试暴露给前端的函数
def test2():
    return "这是通过直接调用window.expose暴露给前端的函数2"


# 抛出错误，在前端是reject状态
def reject():
    raise Exception("这是python抛出错误的演示")


# 测试调用cmd命令
def cmd():
    result = subprocess.run(["dir"], capture_output=True, text=True)
    if result.returncode == 0:
        return result.stdout
    else:
        raise Exception(result.stderr)


# 整个类的所有函数也可以暴露给前端
class Api:
    def test3(self):
        return "这是通过直接调用js_api暴露给前端的函数3"


# 统一暴露函数
def expose(window):
    window.expose(test, test2)  # window.expose是暴露函数给前端的核心


# python 执行javascript
def runjs():
    window.evaluate_js('alert("前端界面加载完毕")')


## 前端加载完毕事件，测试执行javascript
def onLoaded():
    runjs()


if __name__ == "__main__":
    api = Api()
    # 1、使用js_api传参方式暴露函数给前端
    window = webview.create_window(title="Python + pywebview", url=url, js_api=api, width=width, height=height, x=x, y=y, min_size=min_size)
    window.events.loaded += onLoaded
    # 2、使用window.expose方式暴露函数给前端
    window.expose(reject, cmd)
    # 3、使用func传参方式暴露函数给前端
    webview.start(func=expose, args=window, debug=isdev)
