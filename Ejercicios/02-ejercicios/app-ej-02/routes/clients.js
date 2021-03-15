const express = require('express');
const router = express.Router();
const Cliente = require('../models/Cliente');


// Get /client/index
router.get('/index', (req, res) => {
  Cliente.find()
    .then(clientes => {
      res.render('pages/clients/clientIndex', {title: 'Clientes', clientes });
    })
    .catch(err => console.log(err));
});


// Get /client/new
router.get('/new', (req, res) => {
  res.render('pages/clients/clientNew', { title: 'Nuevo Cliente' });
});


// Get /client/editar/:ID
router.get('/editar/:idCliente',(req, res) => {
  Cliente.findById(req.params.idCliente)
    .then(cliente => {
      console.log(cliente);
      res.render('pages/clients/clientEdit', {title: 'Editar Cliente', cliente});
    })
    .catch(err => console.log(err));
});


// Get /clientes/delete/ID:cliente
router.get('/delete/:idCliente',(req, res) => {
  Cliente.findByIdAndDelete(req.params.idCliente)
    .then(clienteBorrado => {
      console.log(clienteBorrado);
      res.redirect('/client/index');
    })
    .catch(err => console.log(err));
})







// Post /client/create.
router.post('/create', cambiosForm, (req, res) => {
   Cliente.create(req.body)
    .then(nuevoCliente => {
      console.log(nuevoCliente);
      res.redirect('/client/index');
    })
    .catch(err => console.log(err)); 
});

// Post /client/update
router.post('/update/:idCliente', cambiosForm, (req, res) => {
  Cliente.findByIdAndUpdate(req.params.idCliente, req.body, { new: true})
    .then(clienteEditado => {
      console.log(clienteEditado)
      res.redirect('/client/index');
    } )
    .catch(err => console.log(err));
});



// Middleware
function cambiosForm(req, res, next) {
  req.body.newsletter = req.body.newsletter ? true : false;
  req.body.condiciones = req.body.condiciones ? true : false;
  req.body.telefono = parseInt( req.body.telefono )
  next();
}



module.exports = router;