const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
// const morgan = require('morgan');

const app = express();

const PORT = process.env.PORT || 3001

// app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});