# todo-api
> An API to create and delete tasks.

## Try now

GET:
```
https://rest-api-flask-mhs.herokuapp.com/notes
```

## Description

This API have POST and GET methods to emulate a note taking app.

The POST method adds a "title" and "details" to the database and GET method
retrieve a list of notes.

To use POST on your local environment:
```
http://127.0.0.1:5000/note/replace-yours
```
To use GET:
```
http://127.0.0.1:5000/notes
```

Note: Use POST method with an application like POSTMAN, in order to add body
(JSON) in the request.
```
{
  "details": "replace-yours"
}
```
## Implementation

This API is built using Flask, FlaskRESTful, SQLAlchemy, hence uses Python-3.7.1
