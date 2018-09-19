// dependencies
'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const http = require('https');
var unirest = require("unirest");
var request = require("request")

let errorResposne = {
    results: []
};
var port = process.env.PORT || 8080;
// create serve and configure it.
const server = express();
server.use(bodyParser.json());
server.post('/getMovies',function (request,response)  {

    /*if(request.body.queryResult.parameters['vehicle']) {
        return response.json({
              fulfillmentText: 'Prova'
        });
    }*/

    if(request.body.queryResult.allRequiredParamsPresent) {
        var url = "http://quote.moveolux.com:88/home/testquote?from=milano&to=roma&day=13/12/2018&time=10:00"

        request({
            url: url,
            json: true
        }, function (error, response_2, body_2) {

            if (!error && response_2.statusCode === 200) {
                console.log(body_2) // Print the json response
                return response.json( {
                    fulfillmentText: body_2
                });
            }
        })

    }

  
});


server.get('/getName',function (req,res){
    res.send('Swarup Bam PRO 3');
    console.log("GETNAME LOG");
});
server.listen(port, function () {
    console.log("Server is up and running...");
});