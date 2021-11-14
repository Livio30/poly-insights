const BlogPost = require('../model/blogPostSchema.js');

const express = require("express");

const router = express.Router();

// Retrieving posts
router.get("/posts", async (req, res) => {
    try{
        const Posts = await BlogPost.find();
        console.log("Data Retrieved");
        return res.status(200).json({ Posts });
    }catch (error) {
        console.error(error);
        return res.status(500).json({ errorMessage: "Posts could not be retrieved" });
    }
});

module.exports = router;