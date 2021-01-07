const { Route } = require('express');
const express = require('express');
const router = express.Router();

//Login page
router.get('/login', (req, res)=> {
    res.render('login.ejs')
})

module.exports = router;