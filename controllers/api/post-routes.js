const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require('../../utils/auth');

//create post
router.post("/", withAuth, async (req, res) => {
    console.log('======from api/post-routes: post("/") =====');
    console.log(req.body);
    try {
        const dbPostData = await Post.create({
            title: req.body.title,
            content: req.body.content,
            author_id: req.body.author_id,
        });
        return res.status(200).json(dbPostData);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

//update post
router.put("/:id", withAuth, async (req, res) => {
    console.log('======from api/post-routes: put("/:id") =====');
    try {
        const updateResult = await Post.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).json(updateResult);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

//delete post
router.delete("/:id", withAuth, async (req, res) => {
    console.log('id', req.params.id);
    try {
        const deletePostData = await Post.destroy({
            where: {
                id: req.params.id
            }
        })
        return res.status(200).json(deletePostData);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

module.exports = router;
