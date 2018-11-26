from db import db


class NoteModel(db.Model):
    __tablename__ = 'notes'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80))
    details = db.Column(db.String(300))

    def __init__(self, title, details):
        self.title = title
        self.details = details

    def json(self):
        return {'title': self.title, 'details': self.details}

    @classmethod
    def find_by_title(cls, title):
        return cls.query.filter_by(title=title).first()

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()
