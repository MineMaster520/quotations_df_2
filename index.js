// dependencies
'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const http = require('https');
const axios = require('axios')
var unirest = require("unirest");


let errorResposne = {
    results: []
};
var port = process.env.PORT || 8080;
// create serve and configure it.
const server = express();
server.use(bodyParser.json());
server.post('/getMovies',function (req,res)  {

    /*if(request.body.queryResult.parameters['vehicle']) {
        return response.json({
              fulfillmentText: 'Prova'
        });
    }*/

    if(req.body.queryResult.allRequiredParamsPresent) {

        var respUrl = "Prov";

        axios.get('http://quote.moveolux.com:88/home/testquote?from=milano&to=roma&day=13/12/2018&time=10:00')
          .then(response => {
            //console.log(response.data.url);
            //console.log(response.data.explanation);

            respUrl = response.data.url;

            return res.json( {
            fulfillmentText: respUrl
        });
          })
          .catch(error => {
            console.log(error);
            return res.json( {
                fulfillmentText: error
            });
        });
        
    }


  
});


server.get('/getName',function (req,res){
    res.send('Swarup Bam PRO 3');
    console.log("GETNAME LOG");
});
server.listen(port, function () {
    console.log("Server is up and running...");
});