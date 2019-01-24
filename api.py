from flask import Flask, jsonify, abort
from flask import request
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
cors = CORS(app)

text = list('''Lorem ipsum dolor sit amet,
    consectetur adipisicing elit,
    sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum
    dolore eu fugiat nulla pariatur. Excepteur sint
    occaecat cupidatat non proident, sunt in culpa qui
    officia deserunt mollit anim id est laborum.''')

TODOS = [
    {
        'id' : 1,
        'task': text[0:200],
        'color': 'yellow'
    },
    {
        'id': 2,
        'task': text[100:400],
        'color': 'light-red'
    },
    {
        'id': 3,
        'task': text[20:400],
        'color': 'yellow'
    },
    {
        'id': 4,
        'task': text[200:400],
        'color': 'green'
    },

]

class Todos(Resource):

    def get(self):
        return {'todos' : TODOS}, 200
    def post(self):
        if not request.json:
            return {'message': "Content-Type must be -> application/json"}, 400
        if not 'task' in request.json:
            return {'message': "The correct format is {'task': 'your todo here'}"}, 400
        if next(filter(lambda x: x['task'] == request.json['task'], TODOS), None) is not None:
            return {'message': "The same todo already exists."}, 400
        id = int(max([d['id'] for d in TODOS], default=0)) + 1
        newTodo = {
                'id': id,
                'task': request.json['task'],
                'color': request.json['color'],
                }
        TODOS.append(newTodo)
        return newTodo, 201

    def delete(self):
        global TODOS
        TODOS = list(filter(lambda x: x['id'] != request.json['id'], TODOS))
        return {'message': "todo deleted"}, 200

api.add_resource(Todos, '/todos')

if __name__ == '__main__':
    app.run()
