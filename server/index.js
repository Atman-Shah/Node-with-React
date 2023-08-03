const express = require('express');
const app = express();

// The express server has some number of route handlers associated with it, By calling 
// app.get by calling that function get, we are creating a brand new route handler.
// So this entire segment of code right here, we would refer to as a route handler.

// get is associated with getting information about some particular record.
// this forward slash right here as the route portion of the handler, This 
// specifically instructs, express if anyone visits the route, localhost:5000/ then
// run the function that we have defined here.

// req (Request) - It's JS object that represents the incoming request.
// So it has a bunch of data that says a little bit about who is making the request 
// and some associated data with it.

// res (Response) - it represents the response or the data that is about to be sent 
// back to whoever made the incoming request.

// The body of the arrow function is, res.sent & then we provided a plain JS object 
// that tells Express that we want to immediately close the request and send back a 
// response containing the JSON data.

app.get('/', (req, res) => {
    res.send({hello: 'there'});
});

const PORT = process.env.PORT || 5000; 
app.listen(PORT);