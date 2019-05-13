const request = require('request')

request.post('https://jsonplaceholder.typicode.com/posts', {
  json: {
      title: 'foo',
      body: 'bar',
      userId: 1
    },

}, (error, res, body) => {
  if (error) {
    console.error(error)
 
    return
  }
  console.log(`statusCode: ${res.statusCode}`)
  console.log(body);
  //console.log(JSON.stringify(body));
})
