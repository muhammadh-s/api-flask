# REST API

## Installation

```
pip install -r requirements.txt
python app.py

```

## Description

This API have POST and GET methods to emulate a note taking app.

The POST method adds a "title" and "details" to the memory and GET method 
retrieve a list of notes. 
 
To use POST on your local enivronment,
```
http://127.0.0.1:5000/task/replace-yours

To use GET,
```
http://127.0.0.1:5000/tasks 
```

Note: Use POST method with an application like POSTMAN, in order to add body in 
the request.

## Implimentation

This API is built using Flask framework, hence uses Python. 
