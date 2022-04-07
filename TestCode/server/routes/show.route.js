const ShowController = require("../controllers/show.controller")

module.exports = (app)=>{
    app.post("/api/show", ShowController.createShow)
}