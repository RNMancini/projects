const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({exended: false}));
app.use(bodyParser.json())

app.get('/', (req, res) => res.send("Rebecca Mancini"));

app.get('/:route', function(req, res) {
     res.send('The route you specified is ' + req.params.id);
 })
 
 var letterNumber 
 
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App listening on port ${port}`))