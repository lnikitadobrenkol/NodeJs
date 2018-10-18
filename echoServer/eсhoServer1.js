// http://127.0.0.1/echo?message=Hello -> Hello

let http = require('http');
let url = require('url');

let server = new http.Server(function(req, res) {
    // console.log( req.method, req.url );

    let urlRarsed = url.parse(req.url, true);
    // console.log(urlRarsed);

    if (urlRarsed.pathname === '/sendMessage' && urlRarsed.query.message) {
        console.log('Get messsage ' + urlRarsed.query.message);
        http.get({
            host: '127.0.0.1',
            port: 3002,
            path: '/getMessage'
        }, function (resp) {
            console.log('get resp from 3002 ');
            let body = '';
            resp.on('data', function(chunk) {
                body += chunk;
            });
            resp.on('end', function() {
                console.log(body);
                res.end( body );
            });
        })
    } else {
        res.statusCode = 404;
        res.end("Page not found");
    }
});

server.listen(3001, '127.0.0.1');
