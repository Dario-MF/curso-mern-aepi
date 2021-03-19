const { Router } = require('express');
const { renderMainIndex, renderMainAbout } = require('../controllers/mainControllers');
const { serverErrors } = require('../middlewares/gestionErrores');

const router = Router();



// route main/index GET:
router.get('/index', renderMainIndex);

// route main/about GET:
router.get('/about', renderMainAbout);

//errors
router.use(serverErrors);




module.exports = router;