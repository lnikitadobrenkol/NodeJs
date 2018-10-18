// http://127.0.0.1/echo?message=Hello -> Hello

let http = require('http');
let url = require('url');

let server = new http.Server(function(req, res) {
    console.log( req.method, req.url );

    let urlRarsed = url.parse(req.url, true);
    console.log(urlRarsed);

    if (urlRarsed.pathname === '/getMessage') {
        res.end("Server requested at " + new Date().getTime() );
    } else {
        res.statusCode = 404;
        res.end("Page not found");
    }
});

server.listen(3002, '127.0.0.1');
