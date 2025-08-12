from flask import Blueprint, render_template_string
from flask_login import login_required, current_user

admin = Blueprint('admin', __name__)

@admin.route('/admin')
@login_required
def dashboard():
    if not current_user.is_admin:
        return "Access denied!"
    return render_template_string(open("frontend/admin.html").read())
