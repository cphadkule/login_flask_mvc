from project import *
from flask import Flask
import os


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8095))
    host = '0.0.0.0'
    app.run(debug=True, host=host, port=port)
