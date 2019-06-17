var staticServer = require('static-server');


var server = new staticServer({
    rootPath: './',
    port: 3000,
})

server.start(() => {
    console.log('😂 Server listening to',server.port)
});