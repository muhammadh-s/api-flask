from flask import Flask
from flask_socketio import SocketIO, emit, send

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

text = '''Lorem ipsum dolor sit amet,
    consectetur adipisicing elit,
    sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat. Duis aute irure dolor
    in repr'''

TODOS = [
    {
        'id' : 1,
        'task': text,
        'color': 'yellow'
    },
]

@socketio.on('delete')
def handle_message(id):
    TODOS[:] = [d for d in TODOS if d.get('id') != id]
    send(TODOS)

@socketio.on('connect')
def test_connect():
    emit('initial', TODOS)

@socketio.on('message')
def handle_task(task, color):
    max_id = max([task['id'] for task in TODOS], default=0)
    id = max_id + 1
    this = {
        'id': id,
        'task': task,
        'color': color
    }
    TODOS.append(dict(this))
    send(TODOS)

if __name__ == '__main__':
    socketio.run(app)
