#!/usr/bin/env python3
"""
Database setup script for the Shader Showcase application
Creates the SQLite database and initializes tables
"""

import sqlite3
import os
from datetime import datetime

DATABASE_PATH = '../backend/users.db'

def create_database():
    """Create the SQLite database and tables"""
    
    # Create backend directory if it doesn't exist
    backend_dir = os.path.dirname(DATABASE_PATH)
    if not os.path.exists(backend_dir):
        os.makedirs(backend_dir)
    
    # Connect to database (creates file if it doesn't exist)
    conn = sqlite3.connect(DATABASE_PATH)
    cursor = conn.cursor()
    
    # Create users table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            full_name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password_hash BLOB NOT NULL,
            salt BLOB NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            is_active BOOLEAN DEFAULT TRUE,
            last_login TIMESTAMP NULL
        )
    ''')
    
    # Create index on email for faster lookups
    cursor.execute('''
        CREATE INDEX IF NOT EXISTS idx_users_email ON users(email)
    ''')
    
    # Create sessions table for future session management
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS user_sessions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            session_token TEXT UNIQUE NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            expires_at TIMESTAMP NOT NULL,
            is_active BOOLEAN DEFAULT TRUE,
            FOREIGN KEY (user_id) REFERENCES users (id)
        )
    ''')
    
    # Create index on session token
    cursor.execute('''
        CREATE INDEX IF NOT EXISTS idx_sessions_token ON user_sessions(session_token)
    ''')
    
    conn.commit()
    conn.close()
    
    print(f"✅ Database created successfully at: {DATABASE_PATH}")
    print("📊 Tables created:")
    print("   - users (with email index)")
    print("   - user_sessions (with token index)")

def verify_database():
    """Verify the database was created correctly"""
    try:
        conn = sqlite3.connect(DATABASE_PATH)
        cursor = conn.cursor()
        
        # Check if tables exist
        cursor.execute("""
            SELECT name FROM sqlite_master 
            WHERE type='table' AND name IN ('users', 'user_sessions')
        """)
        
        tables = cursor.fetchall()
        table_names = [table[0] for table in tables]
        
        print(f"\n📋 Database verification:")
        print(f"   - Database file exists: ✅")
        print(f"   - Users table: {'✅' if 'users' in table_names else '❌'}")
        print(f"   - Sessions table: {'✅' if 'user_sessions' in table_names else '❌'}")
        
        # Check table structure
        cursor.execute("PRAGMA table_info(users)")
        columns = cursor.fetchall()
        print(f"   - Users table columns: {len(columns)}")
        
        conn.close()
        return True
        
    except Exception as e:
        print(f"❌ Database verification failed: {e}")
        return False

if __name__ == "__main__":
    print("🚀 Setting up Shader Showcase database...")
    print("=" * 50)
    
    create_database()
    verify_database()
    
    print("\n🎉 Database setup complete!")
    print("\nNext steps:")
    print("1. Navigate to the backend directory: cd backend")
    print("2. Install Python dependencies: pip install -r requirements.txt")
    print("3. Run the Flask server: python app.py")
    print("4. Open index.html in your browser or serve it with a local server")
