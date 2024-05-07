const express = require('express')
const router = express.Router()
//middleware is a function which run before any request 
//it has the power to give response

//if you want anything which run in every route then use middleware
// middleware that is specific to this router
const timeLog = (req, res, next) => {
  console.log('Time: ', Date.now())
  next()
}
router.use(timeLog)

// define the home page route
router.get('/', (req, res) => {
  res.send('Birds home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})

module.exports = router