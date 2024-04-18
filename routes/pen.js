var express = require('express');
var passport = require('passport');
const pen_controlers= require('../controllers/pen');
var router = express.Router();
/* GET costumes */
router.get('/', pen_controlers.pen_view_all_Page );
/* GET detail costume page */
router.get('/detail', pen_controlers.pen_view_one_Page);
/* GET create costume page */
router.get('/create', pen_controlers.pen_create_Page);
/* GET create update page */
//router.get('/update', pen_controlers.pen_update_Page);
/* GET delete costume page */
//router.get('/delete', pen_controlers.pen_delete_Page);
// A little function to check if we have an authorized user and continue on

// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}
router.get('/update',secured, pen_controlers.pen_update_Page);
router.get('/delete',secured, pen_controlers.pen_delete_Page);
router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
    });
module.exports = router;

