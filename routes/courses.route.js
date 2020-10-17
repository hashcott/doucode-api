const router = require("express").Router();

const Course = require("../models/course");

router.get("/", async (req, res) => {
    try {
        let data = await Course.find({});
        res.json({ data })
    } catch (error) {
        res.status(400).json({error : error.message})
    }
    
})

router.get("/:id", async (req, res) => {
    try {
        let data = await Course.find({ _id : req.params.id });
        res.json({ data })
    } catch (error) {
        res.status(400).json({error : error.message})
    }
})

module.exports = router;