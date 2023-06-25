const {CommentModel, validateComment}=require('../models/commentModel')
const {Types}=require('mongoose')


const getComments=async(req,res)=>{
    try {
        
     let comments=await  CommentModel.find();
     res.send(comments)
    } catch (error) {
        res.json({"eror":error})
    }

}
const getCommentById=async(req,res)=>{

    try {
        let id=req.params.id
     let comment= await CommentModel.findById(id);
     res.send(comment)
    } catch (error) {
        res.json({"error":error})
    }

}
const getCommentByDressId=async(req,res)=>{

    try {
        let id=req.params.id
     let comments= await CommentModel.find({dress:Types.ObjectId(id)});
     res.send(comments)
    } catch (error) {
        res.json({"error":error})
    }

}
const deleteComment=async(req,res)=>{
    try {
        let id=req.params.id

     let comment= await CommentModel.findByIdAndDelete(id);
     res.send(comment+" deleted succesfully!!")
    } catch (error) {
        res.json({"error":error})
    }

}
const addComment=async(req,res)=>{
    try {
        let newComment=new commentModel(req.body) 

        await newComment.save()
        res.send("the new Comment added successfully!")
    } catch (error) {
        res.json({"error":error})
    }

}
const updateComment=async(req,res)=>{
    try {
        let id=req.params.id;
        let newComment=(req.body) 
        await CommentModel.findByIdAndUpdate(id,newComment)

        res.send("the new Comment updated successfully!")
    } catch (error) {
        res.json({"error":error})
    }

}

module.exports={getCommentByDressId,getCommentById,getComments,deleteComment,addComment,updateComment}