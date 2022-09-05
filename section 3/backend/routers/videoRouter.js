//  to process user request only
const express = require('express');
const router= express.Router();

router.get('/video',(req,res)=>{
    res.send('response from add');

})
// 
module.exports=router;