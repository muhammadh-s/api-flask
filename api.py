from flask import Flask, jsonify, abort
from flask import request
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
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


class TodosList(Resource):
    def get(self):
        return {'todos' : TODOS}, 200


class Todos(Resource):
    def post(self):

        if not request.json:
            return {'message': "Content-Type must be -> application/json"}, 400

        if not 'task' in request.json:
            return {'message': "The correct format is {'task': 'your todo here'}"}, 400

        if next(filter(lambda x: x['task'] == request.json['task'], TODOS), None) is not None:
            return {'message': "The same todo already exists."}, 400

        newTodo = {
                'id': TODOS[-1]['id'] + 1,
                'task': request.json['task'],
                }

        TODOS.append(newTodo)
        return newTodo, 201


api.add_resource(TodosList, '/todos')
api.add_resource(Todos, '/todo')


if __name__ == '__main__':
    app.run(debug=True)
