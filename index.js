// dependencies
'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const http = require('https');
var unirest = require("unirest");

let errorResposne = {
    results: []
};
var port = process.env.PORT || 8080;
// create serve and configure it.
const server = express();
server.use(bodyParser.json());
server.post('/getMovies',function (request,response)  {
    console.log("CIAO");

    //response.send("{'speech' : 'Prova SPEECH', "displayText" : 'PROVA DISPLAYTEXT!' }");

    return response.json({
              speech: 'Ciao speech!',
              displayText: 'Ciao displayText',
              source: 'vehicle'
    });

    /*if(request.body.result.parameters['vehicle']) {
        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
            "speech" : "Prova output webHook speech",
            "displayText" : "Prova output webHook displayText"
        }));
    }*/

    /*if(request.body.result.action == 'input.welcome') {
        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
            "speech" : "Prova output webHook speech",
            "displayText" : "Prova output webHook displayText"
        }));

        
    }*/
    



    /*if(request.body.result.parameters['geo-city']) {
        var req = unirest("GET", "https://api.themoviedb.org/3/movie/top_rated");
            req.query({
                "page": "1",
                "language": "en-US",
                "api_key": "4ec958c224fa09982bec1074bdf66707"
            });
            req.send("{}");
            req.end(function(res) {
                if(res.error) {
                    response.setHeader('Content-Type', 'application/json');
                    response.send(JSON.stringify({
                        "speech" : "Error. Can you try it again ? ",
                        "displayText" : "Error. Can you try it again ? "
                    }));
                } else if(res.body.results.length > 0) {
                    let result = res.body.results;
                    let output = '';
                    for(let i = 0; i<result.length;i++) {
                        output += result[i].title;
                        output+="\n"
                    }
                    response.setHeader('Content-Type', 'application/json');
                    response.send(JSON.stringify({
                        "speech" : output,
                        "displayText" : output
                    })); 
                }
            });
    } else if(request.body.result.parameters['movie-name']) {
     //   console.log('popular-movies param found');
        let movie = request.body.result.parameters['movie-name'];
        var req = unirest("GET", "https://api.themoviedb.org/3/search/movie");
            req.query({
                "include_adult": "false",
                "page": "1",
                "query":movie,
                "language": "en-US",
                "api_key": "4ec958c224fa09982bec1074bdf66707"
            });
            req.send("{}");
            req.end(function(res) {
                if(res.error) {
                    response.setHeader('Content-Type', 'application/json');
                    response.send(JSON.stringify({
                        "speech" : "Error. Can you try it again ? ",
                        "displayText" : "Error. Can you try it again ? "
                    }));
                } else if(res.body.results.length > 0) {
                let result = res.body.results[0];
                let output = "Average Rating : " + result.vote_average + 
                "\n Plot : " + result.overview + "url" + result.poster_path
                    response.setHeader('Content-Type', 'application/json');
                    response.send(JSON.stringify({
                        "speech" : output,
                        "displayText" : output
                    }));
                } else {
                    response.setHeader('Content-Type', 'application/json');
                    response.send(JSON.stringify({
                        "speech" : "Couldn't find any deatails. :(  ",
                        "displayText" : "Couldn't find any deatails. :(  "
                    }));
                }
            });

    } else if(request.body.result.parameters['popular-movies']) {    
        var req = unirest("GET", "https://api.themoviedb.org/3/movie/popular");
            req.query({
                "page": "1",
                "language": "en-US",
                "api_key": "4ec958c224fa09982bec1074bdf66707"
            });
            req.send("{}");
            req.end(function(res){
                if(res.error) {
                    response.setHeader('Content-Type', 'application/json');
                    response.send(JSON.stringify({
                        "speech" : "Error. Can you try it again ? ",
                        "displayText" : "Error. Can you try it again ? "
                    }));
                } else {
                    let result = res.body.results;
                    let output = '';
                    for(let i = 0; i < result.length;i++) {
                        output += result[i].title;
                        output+="\n"
                    }
                    response.setHeader('Content-Type', 'application/json');
                    response.send(JSON.stringify({
                        "speech" : output,
                        "displayText" : output
                    })); 
                }
            });
    }*/
});



server.post('/getWord', function(request, response) {
    /*if(request.body.result.parameters['top-rated']) {
        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
            "speech" : "Prova output webHook speech",
            "displayText" : "Prova output webHook displayText"
        }));
    }*/

    if(request.body.result.parameters['geo-city']) {
        var req = unirest("GET", "https://api.themoviedb.org/3/movie/top_rated");
            req.query({
                "page": "1",
                "language": "en-US",
                "api_key": "4ec958c224fa09982bec1074bdf66707"
            });
            req.send("{}");
            req.end(function(res) {
                if(res.error) {
                    response.setHeader('Content-Type', 'application/json');
                    response.send(JSON.stringify({
                        "speech" : "Error. Can you try it again ? ",
                        "displayText" : "Error. Can you try it again ? "
                    }));
                } else if(res.body.results.length > 0) {
                    let result = res.body.results;
                    let output = '';
                    for(let i = 0; i<result.length;i++) {
                        output += result[i].title;
                        output+="\n"
                    }
                    response.setHeader('Content-Type', 'application/json');
                    response.send(JSON.stringify({
                        "speech" : output,
                        "displayText" : output
                    })); 
                }
            });
    }

})

server.get('/getName',function (req,res){
    res.send('Swarup Bam PRO 3');
    console.log("GETNAME LOG");
});
server.listen(port, function () {
    console.log("Server is up and running...");
});