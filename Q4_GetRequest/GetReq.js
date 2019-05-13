const request = require('request');

const options = {  
    url: 'https://jsonplaceholder.typicode.com/posts/1',
    method: 'GET'
    
};

request(options, function(err, res, body) { 
    var status= res.statusCode;
    let json = JSON.parse(body);
    console.log('StatusCode  :- '+status);
    console.log('UserID :- '+json.userId);
    //console.log(json);
});