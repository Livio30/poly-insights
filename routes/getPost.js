const BlogPost = require('../model/blogPostSchema.js');

const express = require("express");

const router = express.Router();

// Retrieving posts
router.get("/post/:id", async (req, res) => {
    try{
        const post = await BlogPost.findOne({ _id: req.params.id })
        console.log("Data Retrieved");
        return res.status(200).json({ post });
    }catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Posts could not be retrieved" });
    }
});

module.exports = router;