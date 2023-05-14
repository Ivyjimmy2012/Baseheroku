from flask import render_template, request, abort, session, copy_current_request_context, jsonify
from app import app, db , socketio , thread_lock, thread 
from app.forms import CustomLoginForm, ExtendedRegisterForm
import sqlite3
import time
import random
from flask_mail import Mail
from datetime import datetime,timedelta
from flask_security import Security, SQLAlchemyUserDatastore, UserMixin, RoleMixin, login_required, current_user
from flask_security.utils import hash_password
from app.models import User, Role, Post, Roomie
import random

from flask_socketio import SocketIO, emit, join_room, leave_room, \
    close_room, rooms, disconnect




app.debug = True
app.jinja_env.trim_blocks = True
app.jinja_env.lstrip_blocks = True



# Mail Configuration

app.config['SECURITY_EMAIL_SENDER'] = 'imonitization@gmail.com'
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_SSL'] = True
# app.config['MAIL_USE_TLS'] = 1
app.config['MAIL_USERNAME'] = 'imonitization@gmail.com'
app.config['MAIL_PASSWORD'] =  'gqcxrbuuxnrdjmyh' #''
app.config['MAIL_DEFAULT_SENDER'] = app.config['SECURITY_EMAIL_SENDER']



mail = Mail(app)



#setup Flask-security
user_datastore = SQLAlchemyUserDatastore(db, User, Role)
security = Security(app, user_datastore, login_form = CustomLoginForm,  register_form=ExtendedRegisterForm, confirm_register_form=ExtendedRegisterForm)


# create a user to test with(first time only and for USER model only) 

# @app.before_first_request
# def create_user():
#     db.create_all()
#     user_datastore.create_user(email='', 
#         password = hash_password('zzzzzz'), \
#         phone = '', 
#         first_name = 'user', 
#         last_name = '1',
#         paid = False,
#         more_about = ' ',
#        # birth_day = '',
#        # likes = '',
#        # dislikes = '',
#         age = '',
#		  is_admin = True
#         )
#     db.session.commit()

# db.init_app(app)




@app.route('/test2') 
def test2():

    print(request.remote_addr, 'pinged us!' )
    
    return jsonify(response = 'done')






thread = None
thread1 = None


def background_thread():
    """Example of how to send server generated events to clients."""
    count = 0
    while True:
        socketio.sleep(10)
        count += 1
        socketio.emit('my_response',
                      {'data': '', 'count': count})




def check_users_background_thread():
    """Example of how to send server generated events to clients."""
    users_count = 0
    while True:
        socketio.sleep(60)
        users_count = len(User.query.all())
        print('users_count--->',users_count,'\n')
        socketio.emit('my_users_count_response',
                      {'data': '', 'users_count': users_count})




@app.route('/admin')
def admin():

	if current_user.email != "simonushie99@gmail.com":
		abort(403)

	users = User.query.all()


	return render_template("admin_index.html")





@socketio.event
def my_event(message):
    session['receive_count'] = session.get('receive_count', 0) + 1
    emit('my_response',
         {'data': message['data'], 'count': session['receive_count']})


@socketio.event
def my_broadcast_event(message):
    session['receive_count'] = session.get('receive_count', 0) + 1
    emit('my_response',
         {'data': message['data'], 'count': session['receive_count']},
         broadcast=True)


@socketio.event
def join(message):
    join_room(message['room'])
    session['receive_count'] = session.get('receive_count', 0) + 1
    emit('my_response',
         {'data': 'In rooms: ' + ', '.join(rooms()),
          'count': session['receive_count']})


@socketio.event
def leave(message):
    leave_room(message['room'])
    session['receive_count'] = session.get('receive_count', 0) + 1
    emit('my_response',
         {'data': 'In rooms: ' + ', '.join(rooms()),
          'count': session['receive_count']})


@socketio.on('close_room')
def on_close_room(message):
    session['receive_count'] = session.get('receive_count', 0) + 1
    emit('my_response', {'data': 'Room ' + message['room'] + ' is closing.',
                         'count': session['receive_count']},
         to=message['room'])
    close_room(message['room'])


@socketio.event
def my_room_event(message):
    session['receive_count'] = session.get('receive_count', 0) + 1
    emit('my_response',
         {'data': message['data'], 'count': session['receive_count']},
         to=message['room'])






@socketio.event
def disconnect_request():
    @copy_current_request_context
    def can_disconnect():
        disconnect()

        print( current_user.first_name,  '-----disconnected using the button ---->')
        current_user.online_status = 'offline'
        db.session.commit() 


    session['receive_count'] = session.get('receive_count', 0) + 1
    # for this emit we use a callback function
    # when the callback function is invoked we know that the message has been
    # received and it is safe to disconnect
    emit('my_response',
         {'data': 'Disconnected!', 'count': session['receive_count']},
         callback=can_disconnect)

    # emit('user_gone_private',{'data': current_user.id }, callback=can_disconnect_private, broadcast=True)






@socketio.event
def connect():

    # current_user.chat_session_id = request.sid
    # db.session.commit()

    # global thread
    # with thread_lock:
    #     if thread is None:
    #         thread = socketio.start_background_task(background_thread)
    # emit('my_response', {'data': 'Connected', 'count': 0})



    global thread1
    with thread_lock:
        if thread1 is None:
            thread1 = socketio.start_background_task(check_users_background_thread)
    emit('my_users_count_response', {'data': 'Connected', 'users_count': 0  })






@socketio.on('connect')
def _connect():

    print( current_user.first_name,  '-----connected with sid ---->', request.sid,'\n')
    current_user.chat_session_id = request.sid
    current_user.online_status = 'online'
    db.session.commit()

    emit('new_session_data_generated', {'data': current_user.id }, broadcast=True)




@socketio.on('disconnect')
def _disconnect():

    print( current_user.first_name,  '-----disconnected with sid ---->', request.sid,'\n')
    current_user.online_status = 'offline'
    db.session.commit() 

    emit('user_gone', {'data': current_user.id} , broadcast=True)













