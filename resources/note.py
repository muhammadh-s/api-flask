from flask_restful import Resource, reqparse
from models.note import NoteModel


class Note(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('details')


    def get(self, title):
        note = ItemModel.find_by_title(title)
        if note:
            return note.json()
        return {'message': 'Note not found'}, 404

    def post(self, title):
        if NoteModel.find_by_title(title):
            return {'message': "A note with title '{}' already exists.".format(title)}, 400

        data = Note.parser.parse_args()

        note = NoteModel(title, **data)

        try:
            note.save_to_db()
        except:
            return {"message": "An error occurred inserting the note."}, 500

        return note.json(), 201


class NotesList(Resource):
    def get(self):
        return {'notes': list(map(lambda x: x.json(), NoteModel.query.all()))}
