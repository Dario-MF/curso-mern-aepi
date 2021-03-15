const express = require('express');
const router = express.Router();

// Get /main/index
router.get('/', (req, res) => {
  res.redirect('/main/index')
});

router.get('/main/index', (req, res)=> {
  res.render('pages/main/mainIndex', { title: 'Main' });
});

// Get /main/about
router.get('/main/about', (req, res) => {
  res.render('pages/main/mainAbout', { title: 'About' });
});

module.exports = router;
