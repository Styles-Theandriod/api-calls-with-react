const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send({message: 'Hello from backend!'})
})


router.post('/data', (req, res)=>{
    const { data } = req.body
    res.send({message: `Recieved data: ${data}`});
});

module.exports = router;