from flask import Flask, jsonify
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


@app.route('/', methods=['GET'])
def get_tasks():
    return jsonify({'TODOS': TODOS})

if __name__ == '__main__':
    app.run(debug=True)
