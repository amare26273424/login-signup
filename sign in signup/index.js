const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const {login,signup } = require('./configiration/tasks')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/signup',signup);
app.post('/login',login)

app.use(express.static('./public'));

app.listen(5000, () => console.log("server is running on 5000 port"));
