
import http.server
import socketserver
import socket
import os

PORT = 8000

def get_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        # doesn't even have to be reachable
        s.connect(('10.255.255.255', 1))
        IP = s.getsockname()[0]
    except Exception:
        IP = '127.0.0.1'
    finally:
        s.close()
    return IP

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        super().end_headers()

# Change to the directory where this script is located (if needed)
# os.chdir(os.path.dirname(os.path.abspath(__file__)))

print(f"Starting server on port {PORT}...")

try:
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Serving at port {PORT}")
        print(f"Local access:   http://localhost:{PORT}")
        print(f"Network access: http://{get_ip()}:{PORT}")
        print("Press Ctrl+C to stop.")
        httpd.serve_forever()
except OSError as e:
    print(f"Error: {e}")
    print(f"Port {PORT} might be in use. Try a different port.")
except KeyboardInterrupt:
    print("\nServer stopped.")
