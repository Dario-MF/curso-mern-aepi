const mongoose = require('mongoose');


const mongoUrl = process.env.MONGO_URI;

mongoose.connect(mongoUrl, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true 
})
.then(console.log('DB conectada'))
.catch(error => console.log(error));
