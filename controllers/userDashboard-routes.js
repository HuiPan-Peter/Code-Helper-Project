// Routes for user dashboard

const router = require("express").Router();
const { Post, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
    console.log('====== User Dashboard Routes Invoked ======');
    // Ensure that the session data is being logged for debugging.
    console.log('Logged In:', req.session.loggedIn, 'User Data:', req.session.loggedInUserData);
    try {
        // Fetch only the posts where the author_id matches the logged-in user's ID.
        const postData = await Post.findAll({
            where: {
                author_id: req.session.loggedInUserData.id // Filtering the posts by the logged-in user's ID.
            },
            include: [
                {
                    model: User,
                    attributes: ["id", "username"],
                },
            ],
            order: [["createdAt", "DESC"]], // Orders the posts by their creation time in descending order.
        });

        // Map the post data to a plain object to be sent to the Handlebars template.
        const userPosts = postData.map((post) => post.get({ plain: true }));

        // Render the userDashboard template and pass the required variables.
        res.render("userDashboard", {
            loggedIn: req.session.loggedIn, // Pass the loggedIn status.
            loggedInUserData: req.session.loggedInUserData, // Pass the logged in user data.
            userPosts: userPosts, // Pass the userPosts to the template, ensuring the name matches the Handlebars loop.
        });
    } catch (err) {
        console.error("Error fetching user posts: ", err); // Log any errors.
        res.status(500).json(err); // Return a 500 status code with the error.
    }
});

module.exports = router;
