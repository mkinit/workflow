import sys
import subprocess
import webview

isdev = sys.flags.dev_mode

if isdev:
    url = "http://localhost:5173"
else:
    url = "dist/index.html"


# 测试暴露给前端的函数
def test():
    return "这是通过webview启动时传入func参数暴露给前端的函数"


# 测试暴露给前端的函数
def test2():
    return "这是通过直接调用window.expose暴露给前端的函数2"


# 抛出错误，在前端是reject状态
def reject():
    raise Exception("这是python抛出错误的演示")


def cmd():
    result = subprocess.run(['dir'], capture_output=True, text=True)
    if result.returncode is 0:
        return result.stdout
    else:
        raise Exception(result.stderr)

# 统一暴露函数
def expose(window):
    window.expose(test, test2)  # window.expose是暴露函数给前端的核心


if __name__ == "__main__":
    window = webview.create_window(title="Python + pywebview", url=url)
    # 1、使用window.expose方式暴露函数给前端
    window.expose(reject, cmd)
    # 2、使用func传参方式暴露函数给前端
    webview.start(func=expose, args=window, debug=isdev)
