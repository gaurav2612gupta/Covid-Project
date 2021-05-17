
const express = require("express");
const mongoose = require("mongoose");
const adminRoutes = require('./routes/admin')

const app = express();

console.log('hello');

   console.log('app');

mongoose.connect("mongodb://localhost:27017/covid", {useNewUrlParser: true, useUnifiedTopology: true });




app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/view'));
app.use(express.json());

app.set('view engine', 'ejs');
app.use(adminRoutes);

app.listen(3000, function() {
    console.log("Server started on port 3000");
});
  