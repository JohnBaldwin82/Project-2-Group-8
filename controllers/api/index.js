const router = require('express').Router()
const postRoutes = require('./postRoutes.js')
const aiRoutes = require('./aiRoutes.js')
const userRoutes = require('./userRoutes.js')
const chatRoutes = require('./chatRoutes.js')

router.use('/projects', postRoutes)
router.use('/chatGpt', aiRoutes)
router.use('/user', userRoutes);
router.use('/chat', chatRoutes);


module.exports = router