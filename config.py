import os
from datetime import timedelta

basedir = os.path.abspath(os.path.dirname(__file__))

class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'B4-CgY7XOhr_VvKH3CB4CA'
    SQLALCHEMY_TRACK_MODIFICATIONS = True

    DEBUG = True

    MAX_CONTENT_LENGTH = 2 * 1024 * 1024

    SQLALCHEMY_DATABASE_URI = os.environ.get('SQLALCHEMY_DATABASE_URI') or 'postgresql://postgres:linkinparker99@localhost/job_db'

    SECURITY_REGISTERABLE = True
    SECURITY_RECOVERABLE = True
    SECURITY_PASSWORD_HASH = os.environ.get('SECURITY_PASSWORD_HASH') or 'bcrypt'
    SECURITY_PASSWORD_SALT = os.environ.get('SECURITY_PASSWORD_SALT') or b'$2b$12$P7Qv0YAzXD5kiAdgQ0Z/3.'
    SECURITY_POST_LOGIN_VIEW = os.environ.get('SECURITY_POST_LOGIN_VIEW') or '/general'
    SECURITY_POST_REGISTER_VIEW = os.environ.get('SECURITY_POST_REGISTER_VIEW') or '/confirm'
    SECURITY_POST_LOGOUT_VIEW = os.environ.get('SECURITY_POST_LOGOUT_VIEW') or '/'
    SECURITY_TRACKABLE = True
    SECURITY_SEND_REGISTER_EMAIL = True
    PERMANENT_SESSION_LIFETIME = os.environ.get('PERMANENT_SESSION_LIFETIME') or timedelta(hours = 8)
    SECURITY_CONFIRMABLE = True
    SECURITY_CONFIRM_ERROR_VIEW = '/confirm'
    SECURITY_CHANGEABLE = True
    SECURITY_RETYPABLE = False
    WHOOSH_BASE = 'whoosh'

    # email
    SECURITY_EMAIL_SUBJECT_REGISTER = 'Welcome to Investment Monetization©'
    SECURITY_EMAIL_SUBJECT_PASSWORD_NOTICE = 'Your password has been reset sucessfully'
    SECURITY_EMAIL_SUBJECT_PASSWORD_CHANGE_NOTICE = 'Your password has been changed sucessfully'   
    SECURITY_EMAIL_PLAINTEXT = False
    SECURITY_EMAIL_HTML = True
    SECURITY_EMAIL_SUBJECT_CONFIRM = 'Your confirmation email resent from IM©'
    # SECURITY_CONFIRM_ERROR_VIEW = '/confirm'
    # SECURITY_CONFIRM_ERROR_VIEW = '/confirm'
    # SECURITY_CONFIRM_ERROR_VIEW = '/confirm'
