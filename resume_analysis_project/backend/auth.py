from flask import Blueprint, request, redirect, url_for, render_template_string
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user, logout_user, login_required, current_user
from .models import User
from . import db

auth = Blueprint('auth', __name__)

# Login route
@auth.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        user = User.query.filter_by(username=username).first()
        if user and check_password_hash(user.password, password):
            login_user(user)
            if user.is_admin:
                return redirect(url_for('admin.dashboard'))
            return "Logged in successfully!"
        return "Invalid credentials"
    return render_template_string(open("frontend/index.html").read())

# Register route
@auth.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = generate_password_hash(request.form['password'], method='sha256')
        new_user = User(username=username, password=password)
        db.session.add(new_user)
        db.session.commit()
        return "User registered!"
    return render_template_string(open("frontend/register.html").read())

# Logout route
@auth.route('/logout')
@login_required
def logout():
    logout_user()
    return "Logged out!"
