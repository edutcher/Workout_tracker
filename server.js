const path = require('path');
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require('./routes');

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(MONGOD_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.use(routes);

app.listen(process.env.PORT || 3000, () => console.log('Now listening'));