import subprocess


class Api:

    # cmd命令
    def _cmd(self, command):
        startupinfo = subprocess.STARTUPINFO()
        startupinfo.dwFlags = (
            subprocess.CREATE_NEW_CONSOLE | subprocess.STARTF_USESHOWWINDOW
        )
        startupinfo.wShowWindow = subprocess.SW_HIDE
        process = subprocess.Popen(
            command,
            stdin=subprocess.PIPE,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            startupinfo=startupinfo,
        )
        stdout, stderr = process.communicate()
        returncode = process.returncode
        print("---------------------------stdout---------------------------")
        print(stdout)
        print("---------------------------stderr---------------------------")
        print(stderr)
        print("---------------------------returncode---------------------------")
        print(returncode)
        return {"returncode": returncode, "stdout": stdout, "stderr": stderr}

    # 统一响应
    def _response(self, error=0, data={}, message="执行成功"):
        return {
            "error": error,
            "data": data,
            "message": message,
        }
