const CommentController = require('../controllers/comment.controller');


module.exports = (app)=>{
    app.post("/api/post", CommentController.createComment);
    app.get("/api/posts/:id", CommentController.getCommentByUser)
}