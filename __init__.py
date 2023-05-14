from flask import Flask,render_template,  session, copy_current_request_context
from flask_sqlalchemy import SQLAlchemy
from werkzeug.middleware.proxy_fix import ProxyFix
from app.config import Config
from flask_migrate import Migrate

from threading import Lock
from flask_socketio import SocketIO, emit, join_room, leave_room, \
    close_room, rooms, disconnect

# from celery import Celery
# import flask_whooshalchemy as wa


# from app import models





####################
#### extensions ####
####################

# Set this variable to "threading", "eventlet" or "gevent" to test the
# different async modes, or leave it set to None for the application to choose
# the best option based on installed packages.
async_mode = None


app=Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)
socketio = SocketIO(app, async_mode=async_mode,  logger=True, engineio_logger=True )
thread = None
thread_lock = Lock()



# Proxy Configuration for login tracking
app.wsgi_app = ProxyFix(app.wsgi_app)


####################
#### blueprints ####
####################

from app.blueprints.home.views import index_blueprint


app.register_blueprint(index_blueprint,url_prefix='/')





########################
#### error handlers ####
########################



@app.errorhandler(401)
def unauthorized_page(error):
    return render_template("errors/errors.html", error = 401, msg = 'unauthorized page'), 401


@app.errorhandler(413)
def file_too_large(error):
    return render_template("errors/errors.html", error = 413, msg = 'file is too large'), 413




@app.errorhandler(403)
def forbidden_page(error):
    return render_template("errors/errors.html", error = 403, msg = 'forbidden page'), 403


@app.errorhandler(404)
def page_not_found(error):
    return  render_template("errors/errors.html", error = 404, msg = 'invalid page'), 404


@app.errorhandler(500)
def server_error_page(error):
    return render_template("errors/errors.html", error = 500, msg = 'server error'), 500




from app import views, models








