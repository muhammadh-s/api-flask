# To-Do
> A web app for task management


![](screenshot.png?raw=true)

 #### Demo : https://todo-react-app-v1.netlify.com/

#### Built with (but not limited to):
- [Create React App](https://github.com/facebook/create-react-app)
- [react-toastify](https://github.com/fkhadra/react-toastify)
- [tachyons](https://github.com/tachyons-css/tachyons/)
- [todo-api](https://github.com/muhammadh-s/todo-api)

## Setup

1. `git clone git@github.com:muhammadh-s/todo-app.git`
2. `cd todo-api`
3. `yarn install`
4. `yarn start`

## License
MIT
# todo-api
> A RESTful API for task management.

![](screenshot.PNG?raw=true)

Built with (but not limited to) :
  * [flask](https://github.com/pallets/flask)
  * [flask_restful](https://github.com/flask-restful/flask-restful)
  * [flask_cors](https://github.com/corydolphin/flask-cors)
  * [ReDoc](https://github.com/Rebilly/ReDoc)

Documentation: <https://todo-api-doc.netlify.com/>

## Setup

1. `git clone git@github.com:muhammadh-s/todo-api.git`
2. `cd todo-api`
3. `pip install -r requirements.txt` _or place virtual environment and then install_
4. `python api.py`

or visit : <https://todo-flask-restful-api.herokuapp.com>

_WARNING: Data for tasks resides in memory not database, hence the newly saved tasks gets removed when the Heroku Dyno sleeps. Feel free to use endpoints for practice or experimentation._

### Endpoint:

* GET : `/todos`

Response:
```JSON
200 OK
  "todos": [
         {
           "id": 1,
           "task": "Lorem ipsum dolor sit amet,\n    
           consectetur adipisicing elit,\n    
           sed do eiusmod tempor incididunt\n    
           ut labore et dolore magna aliqua.\n   
            Ut enim ad minim veniam, quis nostrud\n    
            exercitation ulla",
           "color": "yellow"
         },
       ]
```
_Note: color is an additional field to mark grouping/priority of tasks_

* POST : `/todos`

Body:
```JSON
  {
    "task": "<fill in the task>",
    "color": "<fill in the color>"
  }
  ```  

Response: (newly created task returned)
```JSON
201 CREATED
  {
    "id": "<id:int>",
    "task": "<newTask>",
    "color": "<newColor>"
  }
```
* DELETE : `/todos`

Body:
```JSON
  {
    "id": "<fill in the id>"
  }
```

Response:
```JSON
200 OK
  {
    "message": "todo deleted"
  }
```

## License
MIT
