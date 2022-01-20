import express from 'express'
import TagSchema from '../schemas/tagSchema'
import CategorySchema from '../schemas/categorySchema'
import PostSchema from '../schemas/postSchema'
const apiRoutes = express.Router()

apiRoutes.get('/', (req, res) => {
  return res.json({ message: 'hello' })
})
apiRoutes.get('/posts', async (req, res) => {
  const result = await PostSchema.find()
    .populate('tags', '-_id')
    .populate('category', '-__v')
  return res.json({ data: result })
})

apiRoutes.post('/tag', (req, res) => {
  const { name } = req.body
  const tag = new TagSchema({ name })
  tag.save().then(() => console.log('meow'))
  return res.json({ message: 'hello' })
})

apiRoutes.post('/category', (req, res) => {
  const { name } = req.body
  const tag = new CategorySchema({ name })
  tag.save().then(() => console.log('meow'))
  return res.json({ message: 'hello' })
})

apiRoutes.post('/post', (req, res) => {
  const { name, description, tags, category } = req.body
  const post = new PostSchema({ name, description, tags, category })
  post.save().then(() => console.log('meow'))
  return res.json({ message: 'hello' })
})

export default apiRoutes
