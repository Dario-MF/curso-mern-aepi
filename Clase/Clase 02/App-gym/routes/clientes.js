const router = require('express').Router();
const { response } = require('express');
const Cliente = require('../models/Cliente');

/* GET /clientes. */
router.get('/', (req, res) => {
  Cliente.find()
    .then(clientes => {
      res.render('clientes/indexClientes', { clientes });
    })
    .catch(err => console.log(err));
  
});

// Get /clientes/nuevo
router.get('/nuevo', (req, res) => {
 res.render('clientes/newCliente')
  
});

// Get /clientes/delete/ID:cliente

router.get('/delete/:idCliente',(req, res) => {
  Cliente.findByIdAndDelete(req.params.idCliente)
    .then(clienteBorrado => {
      console.log(clienteBorrado);
      res.redirect('/clientes');
    })
    .catch(err => console.log(err));
})

// Get /clientes/editar/:ID

router.get('/editar/:idCliente',(req, res) => {
  Cliente.findById(req.params.idCliente)
    .then(cliente => {
      console.log(cliente);
      res.render('clientes/editCliente', {cliente});
    })
    .catch(err => console.log(err));
});
// Get /clientes/activos
router.get('/activos', (req, res) => {
  Cliente.activos()
    .then( clientes => {
      res.render('clientes/indexClientes', { clientes });
    })
    .catch(err => console.log(err))
  
});




// Post /clientes/update
router.post('/update/', cambiosForm, (req, res) => {
  Cliente.findByIdAndUpdate(req.body.id, req.body, { new: true})
    .then(clienteEditado => {
      res.redirect('/clientes');
    } )
    .catch(err => console.log(err));
})


// Post /clientes/create.
router.post('/create', cambiosForm, (req, res) => {
  Cliente.create(req.body)
    .then(nuevoCliente => {
      console.log(nuevoCliente);
      res.redirect('/clientes');
    })
    .catch(err => console.log(err));
})


// Middleware

function cambiosForm(req, res, next) {
  req.body.cuota = parseFloat(req.body.cuota);
  req.body.activo = req.body.activo ? true : false;

  next();
}


module.exports = router;