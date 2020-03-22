'use strict'

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ 
  path: path.resolve(__dirname, '.env') 
});

// Configurações do Express:
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(cors({}));
app.use(morgan('dev'));
app.use(express.static(__dirname + '/assets'));
app.set('views', './views');
app.set('view engine', 'ejs');

// Banco de dados:
mongoose.connect(
  process.env.DB_CONNECTION_STRING, 
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on('connected', () => {
  console.log('Mongoose default connection is on.')
})

// Rotas:
require('./models/Url');
let urlRouter = require('./routes/index');
app.use('/', urlRouter);

app.get('/*', (req, res) => {
  res.status(404).send({ Erro: `Página ${req.originalUrl} não encotrada!` });
});

// Porta e inicialização do servidor:
const port = process.env.POT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}.`)
});