const router = require("express").Router();
const CheckPoint = require("../models/checkpoint");

router.get("/", async (req, res) => {
    try {
        let data = await CheckPoint.find({});
        res.json({ data })
    } catch (error) {
        res.status(400).json({error : error.message})
    }
})

router.get("/moduleID=:id", async (req, res) => {
    try {
        let data = await CheckPoint.find({moduleID : req.params.id});
        res.json({ data })
    } catch (error) {
        res.status(400).json({error : error.message})
    }
})

router.get("/:id", async (req, res) => {
    try {
        let data = await CheckPoint.find({_id : req.params.id});
        res.json({ data })
    } catch (error) {
        res.status(400).json({error : error.message})
    }
})

module.exports = router;