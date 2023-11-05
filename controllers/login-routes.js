const router = require("express").Router();

//render handlebars view on page load
router.get("/", async (req, res) => {
    console.log('======login-routes invoked=====');
    res.render("login", {
        loggedIn: req.session.loggedIn,
        loggedInUserData: req.session.loggedInUserData,
    });
});

module.exports = router;
