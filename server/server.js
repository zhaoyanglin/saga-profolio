const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const projectRouter = require('./routes/project.router');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/api/project', projectRouter);


/** ---------- START SERVER ---------- **/
const port = process.env.PORT || 5000;

app.listen(port, function () {
    console.log('Listening on port: ', port);
});