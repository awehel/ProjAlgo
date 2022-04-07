const mongoose = require("mongoose")

const ShowSchema = new mongoose.Schema(
    {
        name: {
            type:String,
            required: [true, "Show name is required"]
        },
        backdrop_path:{
            type:String,
            required: true
        },
        showComplete:{
            type:Boolean
        },
        
    

    }, {timestamps:true}
)

const Show = mongoose.model("Show", ShowSchema)
module.exports = Show