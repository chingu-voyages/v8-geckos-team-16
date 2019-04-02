

const express = require('express');
const bodyparser = require('body-parser');
const groupsRouter = require('./routes/api/groups');


const app = express();

// middleware for parsing and simplifying incoming http requests
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


app.use('/api/groups', groupsRouter);


// server listens on port 5000
const port = 5000;
app.listen(port, () => console.log('Server is listening on port 5000'));
