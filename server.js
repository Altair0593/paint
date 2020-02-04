const http = require("http");

const server = http.createServer(function (request, response) {
    if (request.url === "/") {
        response.write("abrval");
    }
});

