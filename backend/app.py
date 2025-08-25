from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import sqlite3
import hashlib
import secrets
from datetime import datetime
import os

app = Flask(__name__)
CORS(app)

# Database setup
DATABASE = 'users.db'

def init_db():
    """Initialize the database with users table"""
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            full_name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            salt TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            is_active BOOLEAN DEFAULT TRUE
        )
    ''')
    
    conn.commit()
    conn.close()

def hash_password(password, salt):
    """Hash password with salt"""
    return hashlib.pbkdf2_hmac('sha256', password.encode('utf-8'), salt, 100000)

def verify_password(password, salt, password_hash):
    """Verify password against hash"""
    return hashlib.pbkdf2_hmac('sha256', password.encode('utf-8'), salt, 100000) == password_hash

@app.route('/')
def index():
    """Serve the main HTML file"""
    return render_template('index.html')

@app.route('/api/signup', methods=['POST'])
def signup():
    """Handle user registration"""
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['full_name', 'email', 'password']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'error': f'{field} is required'}), 400
        
        full_name = data['full_name'].strip()
        email = data['email'].strip().lower()
        password = data['password']
        
        # Basic validation
        if len(password) < 6:
            return jsonify({'error': 'Password must be at least 6 characters long'}), 400
        
        if '@' not in email or '.' not in email:
            return jsonify({'error': 'Invalid email format'}), 400
        
        # Generate salt and hash password
        salt = secrets.token_bytes(32)
        password_hash = hash_password(password, salt)
        
        # Insert user into database
        conn = sqlite3.connect(DATABASE)
        cursor = conn.cursor()
        
        try:
            cursor.execute('''
                INSERT INTO users (full_name, email, password_hash, salt)
                VALUES (?, ?, ?, ?)
            ''', (full_name, email, password_hash, salt))
            
            conn.commit()
            user_id = cursor.lastrowid
            
            return jsonify({
                'message': 'User created successfully',
                'user_id': user_id
            }), 201
            
        except sqlite3.IntegrityError:
            return jsonify({'error': 'Email already exists'}), 409
        
        finally:
            conn.close()
            
    except Exception as e:
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/api/login', methods=['POST'])
def login():
    """Handle user login"""
    try:
        data = request.get_json()
        
        email = data.get('email', '').strip().lower()
        password = data.get('password', '')
        
        if not email or not password:
            return jsonify({'error': 'Email and password are required'}), 400
        
        # Get user from database
        conn = sqlite3.connect(DATABASE)
        cursor = conn.cursor()
        
        cursor.execute('''
            SELECT id, full_name, email, password_hash, salt, is_active
            FROM users WHERE email = ?
        ''', (email,))
        
        user = cursor.fetchone()
        conn.close()
        
        if not user:
            return jsonify({'error': 'Invalid email or password'}), 401
        
        user_id, full_name, user_email, stored_hash, salt, is_active = user
        
        if not is_active:
            return jsonify({'error': 'Account is deactivated'}), 401
        
        # Verify password
        if verify_password(password, salt, stored_hash):
            return jsonify({
                'message': 'Login successful',
                'user': {
                    'id': user_id,
                    'full_name': full_name,
                    'email': user_email
                }
            }), 200
        else:
            return jsonify({'error': 'Invalid email or password'}), 401
            
    except Exception as e:
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/api/users', methods=['GET'])
def get_users():
    """Get all users (for admin purposes)"""
    try:
        conn = sqlite3.connect(DATABASE)
        cursor = conn.cursor()
        
        cursor.execute('''
            SELECT id, full_name, email, created_at, is_active
            FROM users ORDER BY created_at DESC
        ''')
        
        users = cursor.fetchall()
        conn.close()
        
        users_list = []
        for user in users:
            users_list.append({
                'id': user[0],
                'full_name': user[1],
                'email': user[2],
                'created_at': user[3],
                'is_active': user[4]
            })
        
        return jsonify({'users': users_list}), 200
        
    except Exception as e:
        return jsonify({'error': 'Internal server error'}), 500

if __name__ == '__main__':
    # Initialize database
    init_db()
    
    # Run the app
    app.run(debug=True, host='0.0.0.0', port=5000)
