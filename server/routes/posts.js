import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js';  // The import statement with curly braces indicates that function was exported by a named export.

const router = express.Router();

// http://localhost:4000/posts

router.get('/', getPosts);
router.post('/', createPost);

export default router;