const Post = require('./database.js')
const fileService = require('./fileService.js')
class PostService{
    async getAll(){
        const posts = await Post.find()
        return posts
    }
    async getOne(id){
        if(!id){
            throw new Error('No such post')
        }
        const post = await Post.findById(id)
        return post
    }
    async create(post, avatar){
        const fileName = fileService.saveFile(avatar);
        const createdPost = await Post.create({...post, avatar: fileName})
        return createdPost
    }
    async update(post){
        if(!post._id){
            throw new Error('No such post')
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true});
        return updatedPost
    }
    async delete(id){
        if(!id){
            throw new Error('No such post')
        }
        const deletedPost = await Post.findByIdAndDelete(id)
        return deletedPost
    }
}

module.exports = new PostService()