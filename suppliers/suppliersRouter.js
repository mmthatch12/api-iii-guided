const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json.send({ is this working })
})

router.get('/:name', (req, res) => {
    res
})