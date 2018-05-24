const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home.hbs', {
    nombre: 'Yair montes'
  })
});

app.get('/about', (req, res) => {
  res.render('about.hbs');
});

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});