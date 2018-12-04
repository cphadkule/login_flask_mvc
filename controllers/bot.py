# Route for handling the login page logic
from flask import Flask, render_template, redirect, url_for, request
from flask import Flask, jsonify, abort, make_response, request, url_for
from project import app
import json


@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    error = None
    if request.method == 'POST':
        print('yes')
        if request.form['uname'] != 'admin' and request.form['psw'] != 'admin':
            print('Invalid Credentials. Please try again.')
            return json.dumps({'status': 'false', 'message': 'Invalid credentials'})
        else:
            # return render_template('home.html', error=error)
            return json.dumps({'status': 'true', 'message': 'Successfully logged in'})

    return render_template('index.html', error=error)
