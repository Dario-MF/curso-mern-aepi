const mongoose = require('mongoose');


const mongoUrl = 'mongodb://127.0.0.1/DMF_ejercicio';

mongoose.connect(mongoUrl, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Conectado a DB')
});