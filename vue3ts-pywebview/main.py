import sys
import webview

print(webview)

isdev = sys.flags.dev_mode

if isdev:
	url = 'http://localhost:5173'
else:
	url = 'dist/index.html'

window = webview.create_window(title = 'Python + pywebview', url = url)

webview.start(debug = isdev)