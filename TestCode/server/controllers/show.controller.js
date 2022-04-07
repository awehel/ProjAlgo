const Show = require("../models/show.model")

module.exports = {

    createShow: (req, res)=>{
        Show.create(req.body)
        .then((newShow)=>{
            console.log(newShow)
            res.json(newShow)
        })
        .catch((err)=>{
            console.log(req.body)
            console.log("createShow failed")
            res.status(400).json(err)
        })
    }
}