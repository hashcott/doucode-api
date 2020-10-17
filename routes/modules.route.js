const router = require("express").Router();
const Module = require("../models/module");


router.get("/", async (req, res) => {
    try {
        let data = await Module.find({});
        res.json({ data })
    } catch (error) {
        res.status(400).json({error : error.message})
    }
})

router.get("/courseID=:id", async (req, res) => {
    try {
        let data = await Module.find({courseID : req.params.id});
        res.json({ data })
    } catch (error) {
        res.status(400).json({error : error.message})
    }
})

router.get("/:id", (req, res) => {
    res.json({ status : req.params.id })
})

module.exports = router;