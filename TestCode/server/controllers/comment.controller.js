const Comment = require('../models/comment.model')
const User = require('../models/user.model')
const jwt = require('jsonwebtoken')

module.exports = {

    createComment: (req, res)=>{
        console.log(req.body)

        const {message, author, receiver} = req.body
        const newMessage = new Comment({
            message, 
            author,
            receiver
        })
        
        // const {message} = req.body

        // const newPost = new Comment({
        //     message
        // })

        // console.log("newPost = " + req.body.toString())
        
        // newPost.save()
        // .then((newPost)=>{
        //     console.log(newPost)
        //     res.json(newPost)
        // })
        // .catch((err)=>{
        //     console.log("error with save")
        //     res.status(400).json(err)
        // })

        Comment.create(req.body)
            .then((newComment)=>{
                console.log(newComment)
                res.json(newComment)
            })
            .catch((err)=>{
                console.log("Error in createComment")
                res.status(400).json(err)
            })
    },

    getCommentByUser: (req, res)=>{
        console.log(req.params.id)
        
        Comment.find({receiver:req.params.id})
        .populate("receiver author", "username")
        .then((allComments)=>{
            console.log(allComments)
            res.json(allComments)
        })
        .catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    }
}