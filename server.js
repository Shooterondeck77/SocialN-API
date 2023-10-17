const express = require('express');
const routes = require('./controllers');
const db = require("./config/connection")

const PORT = process.env.PORT || 3003;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use your existing routes
app.use("/api" , routes);

db.once('open', () => {
    app.listen(PORT, () => console.log('Now listening'));
})


