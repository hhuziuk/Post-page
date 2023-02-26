const PostService = require("./PostService.js")
const Post = require('./database.js')

class PostController {
    async getAll(req, res){
        try{
            const posts = await PostService.getAll()
            res.status(500).json(posts)
        }
        catch(error){
            res.status(500).json(error)
        }
    }
    async getOne(req, res){
        try{
            const post = await PostService.getOne(req.params.id)
            res.status(500).json(post)
        }
        catch(error){
            res.status(500).json(error)
        }
    }
    async create(req, res){
        try{
            const post = await PostService.create(req.body, req.files.avatar)
            res.status(500).json(post)
        }
        catch(error){
            res.status(500).json(error)
        }
    }
    async update(req, res){
        try{
            const updatedPost = await PostService.update(req.body)
            return res.json(updatedPost)
        }
        catch(error){
            res.status(500).json(error)
        }
    }
    async delete(req, res){
        try{
            const post = await PostService.delete(req.params.id)
            res.status(500).json(post)
        }
        catch(error){
            res.status(500).json(error)
        }
    }
}

module.exports = new PostController()