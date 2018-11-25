from flask import Flask, request
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

tasks = []

class Task(Resource):
    def get(self, title):
        task = next(filter(lambda x: x['title'] == title, tasks), None)
        return {'task': task}, 200 if task else 404

    def post(self, title):
        if next(filter(lambda x: x['title'] == title, tasks), None):
            return {'Message': "The task '{}' already exists.".format(title)}, 400

        data = request.get_json()
        task = {'title': title, 'details': data['details']}
        tasks.append(task)
        return task, 201


class TasksList(Resource):
    def get(self):
        return {'tasks': tasks}


api.add_resource(Task, '/api/task/<string:title>')
api.add_resource(TasksList, '/api/tasks')

if __name__ = '__main__':
    app.run(port=5000)
