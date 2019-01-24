# todo-api
> A RESTful API for task management.

Built with:
  * flask
  * flask_restful
  * flask_cors

## Setup

1. `git clone git@github.com:muhammadh-s/todo-api.git`
2. `cd todo-api`
3. `pip install -r requirements.txt` _or place virtual environment and then install_
4. `python api.py`

or visit `https://todo-flask-restful-api.herokuapp.com`
WARNING: Data in the API for tasks resides in memory not database, hence the newly saved tasks gets removed when the Heroku Dyno sleeps. Feel free to use endpoints for practice/experimentation.

### Endpoint:

* GET `/todos`
```JSON
  "todos": [
         {
           "id": 1,
           "task": "Lorem ipsum dolor sit amet,\n    consectetur adipisicing elit,\n    sed do eiusmod tempor incididunt\n    ut labore et dolore magna aliqua.\n    Ut enim ad minim veniam, quis nostrud\n    exercitation ulla",
           "color": "yellow"
         },
       ]
```

* POST `/todos`
  ```JSON
{
  "task": "<fill in the task>",
  "color": "<fill in the color>"
}
  ```
_Note: color is an additional field to mark grouping/priority of tasks_   

* DELETE `/todos`
  ```
  'id': '<fill in the id>'
  ```
