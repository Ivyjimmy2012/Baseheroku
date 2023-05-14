
from app import app, socketio
import os



if __name__ == '__main__':
	#app.run(host = "192.168.43.50", threaded = True, port=70,debug=True) 
    #socketio.run(app, host = "localhost",  port=70,debug=True)
    socketio.run(app, host = "localhost",  port=213 ,debug=True)


    