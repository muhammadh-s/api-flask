const server = require('http').createServer();

const io = require('socket.io')(server);


TODOS = [
    {
        'id': 1,
        'task': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in repr',
        'color': 'yellow'
    },
]

io.on('connect', (socket) => {
    socket.send(TODOS);

    socket.on('delete', (id) => {
        TODOS = TODOS.filter((task) => task.id !== id);
        socket.send(TODOS);     
    });

    socket.on('message', (task,color) => {
        const max = Math.max(...TODOS.map(o => o.id), 0);
        newID = max + 1;
        let nd = {
            'id': newID,
            'task': task,
            'color': color,
        };
        TODOS.push(nd);
        socket.send(TODOS);
    });

});


server.listen(process.env.PORT || 5000)