const express = require('express')
const router = express.Router()
const {post, get, update, remove} = require('../contoller/AuthContoller')

router.post('/doctor', post)
router.get('/doctor', get)
router.put('/doctor/:id', update)
router.delete('/doctor/:id', remove)

module.exports = router;
