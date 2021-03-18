const { Router } = require('express');
const { renderMainIndex, renderMainAbout } = require('../controllers/mainControllers');

const router = Router();



// route main/index GET:
router.get('/index', renderMainIndex);

// route main/about GET:
router.get('/about', renderMainAbout);




module.exports = router;