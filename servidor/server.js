const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const routes = require('./routes');
const controllers = require('./controllers');

const app = express();
app.use(bodyParser.json());
app.use('/', routes);
app.use(controllers.auth);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});