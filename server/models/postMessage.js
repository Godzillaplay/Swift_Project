import mongoose from 'mongoose';

/*This is a mongoose schema. 
* It represents the structure of a document expressed.. 
* in properties and values (Key, Value Pair).
* The schema will be converted to a model.
*/
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },

});

// Convert "postSchema" schema to a model.
const PostMsg = mongoose.model('PostMsg', postSchema);

export default PostMsg;