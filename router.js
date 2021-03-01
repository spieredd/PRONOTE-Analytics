const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.status(200).render('pages/index');
});

router.get('/about', (req,res) => {
    res.status(200).render('pages/about');
});

router.get('/connect',(req,res)=>{
    res.status(200).render('pages/connect');
});

// router
//    .use((req, res) => {
//            res.status(404);
//            res.json({
//                error: "Page not found"
//            });  
//        });

module.exports = router;