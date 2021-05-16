
const express = require("express");
const adminRoutes = require('./routes/admin')

const app = express();

console.log('hello');

   console.log('app');

app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/view'));
app.use(express.json());

app.set('view engine', 'ejs');
app.use(adminRoutes);

app.listen(3000, function() {
    console.log("Server started on port 3000");
});
  