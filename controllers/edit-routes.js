const router = require("express").Router();
const { Post } = require("../models");
// Justin current working on fixing after edit to stay in current dashboard
const { User } = require("../models")
// 
const withAuth = require("../utils/auth");

//on /edit/{id} page load
router.get("/:id", withAuth, async (req, res) => {
    console.log('======edit-routes invoked=====');
    try {
        const postData = await Post.findByPk(req.params.id);
        // Justin current working on fixing after edit to stay in current dashboard
        const userData = await User.findByPk(req.params.id);
        //
        const post = postData.get({ plain: true });
        // Justin current working on fixing after edit to stay in current dashboard
        const user = userData.get({ plain: true });
        //
        if (post) {
            res.render("edit", {
                loggedIn: req.session.loggedIn,
                loggedInUserData: req.session.loggedInUserData,
                postData: post,
            });
            // Justin may need to add code in here for functionality of edit with routes and dashboard
        } else {
            res.redirect("/dashboard");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

