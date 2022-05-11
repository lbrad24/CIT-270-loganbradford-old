const express = require('express');//import the library
const bodyParser = require('body-parser');//body parser is called middleware
const req = require('express/lib/request');
const port = 3000;
const app = express();//use the library

app.use(bodyParser.json());//use the middleware (call it before anything else happens on each request)

app.listen(port, ()=>{
    console.log("listening on port: " +port);}//the app.listen and app.get are in a different format than brother murdocks
    );

    app.get('/',(request,response)=>{//every time something calls your API that is a request
        response.send("Hello")// a response is when the API gives the information requested

});//listen

app.post('/login', (request,response)=> { //a post request is used by a client to send data to the server, the post here, and the POST in the APIclient.bat are connected
    const loginRequest = request.body; 
    console.log("request.body", request.body);
    if (loginRequest.userName === "lbradford2400@gmail.com" && loginRequest.password === "Th1s1S@pa66w0r9") {
        response.status(200);//200 means ok
        response.send("Welcome");

    } else {
        response.status(401);//means unathorized
        response.send("Unauthorized");
        
    }

});

//app.listen starts on line 8 on bro murdocks, and app.get is on line 25 in bro murdocks
//app.listen(port, ()=>{
//    console.log("listening on port: " +port);
//})
//
//app.get('/',(request,response)=>{//every time something calls your API that is a request
//    response.send("Hello");// a response is when the API gives the information requested
//});//listen