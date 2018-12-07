import os

from flask import Flask
from flask_restful import Api
from flask_cors import CORS, cross_origin

from resources.note import Note, NotesList

app = Flask(__name__)
cors = CORS(app)

app.config['DEBUG'] = True
app.config['CORS_HEADERS'] = 'Content-Type'

app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 'sqlite:///data.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
api = Api(app)


api.add_resource(Note, '/note/<string:title>')
api.add_resource(NotesList, '/notes')

if __name__ == '__main__':
    from db import db
    db.init_app(app)

    if app.config['DEBUG']:
        @app.before_first_request
        def create_tables():
            db.create_all()

    app.run(port=5000)





@cross_origin()
def helloWorld():
  return "Hello, cross-origin-world!"
