const express = require('express')
const router = express.Router()



router.get('/', (req, res) => {
  res.send('blog home page')
})

router.get('/about', (req, res) => {
  res.send('About blog')
})

router.get('/blogpost/:slug', (req, res) => {
    res.send(`This is about ${req.params.slug}`)
  })

module.exports = router