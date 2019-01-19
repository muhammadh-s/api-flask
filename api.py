from flask import Flask, jsonify, abort
from flask import request
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

TODOS = [
    {
        'id' : 1,
        'task': 'build an API',
    },
    {
        'id': 2,
        'task': 'build frontend through react',
    },
]


@app.route('/', methods=['POST'])
def create_task():
    match = None
    for d in TODOS:
        if d['task'] == request.json.values():
            match = True

    if not request.json or not 'task' in request.json or '' in request.json.values() or match == True:
        abort(400)
    newTodo = {
        'id': TODOS[-1]['id'] + 1,
        'task': request.json.get('task', ""),
    }
    TODOS.append(newTodo)
    return jsonify({'newTodo': newTodo}), 201


@app.route('/', methods=['GET'])
def get_tasks():
    return jsonify({'TODOS': TODOS})

if __name__ == '__main__':
    app.run(debug=True)
