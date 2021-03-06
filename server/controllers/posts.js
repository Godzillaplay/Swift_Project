import PostMsg from "../models/postMessage.js";


export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMsg.find();
        res.status(200).json(postMessages);
    } catch(error) {
        res.status(404).json({message: error.message });
    }
}

export const createPost = (req, res) => {
    res.send('Post Creation');
}