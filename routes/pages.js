const express = require('express');
const authController = require('../controllers/auth');

const router = express.Router();

router.get('/', authController.isLoggedIn, (req, res) => {
  res.render('index', {
    user: req.user
  });
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.get('/login', (req, res) => {
  res.render('login');
});
router.get('/logout', (req, res) => {
  res.render('logout');
});

router.get('/wallet', authController.isLoggedIn, (req, res) => {
  
  console.log(req.user);
  if( req.user ) {
    res.render('wallet', {
      user: req.user
    });
  } else {
    res.redirect('/login');
  }
  
});

router.get('/profile', authController.isLoggedIn, (req, res) => {
  console.log(req.user);
  if( req.user ) {
    res.render('profile', {
      user: req.user
    });
  } else {
    res.redirect('/login');
  }
  
})

module.exports = router;