const express = require('express');//import the library
const bodyParser = require('body-parser');
const req = require('express/lib/request');
const port = 3000;
const app = express();//use the library

app.use(bodyParser.json());

app.listen(port, ()=>{
    console.log("listening on port: " +port);}
    );

    app.get('/',(request,response)=>{
        response.send("Hello")

});//listen

app.post('/login', (request,response)=> { //a post request is used by a client to send data to the server
    const loginRequest = request.body; 
    console.log("request.body", request.body);
    if (loginRequest.userName === "lbradford2400@gmail.com" && loginRequest.password === "Th1s1S@pa66w0r9") {
        response.status(200);
        response.send("Welcome");

    } else {
        response.status(401);
        response.send("Unauthorized");
        
    }

});