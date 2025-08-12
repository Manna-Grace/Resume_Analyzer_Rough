from flask import Flask

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'yoursecret'
    # Register blueprints, database, etc.
    return app
