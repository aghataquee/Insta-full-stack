const express=require('express');
const router=express.Router();
router.route('/signup').post()
router.route('/login').post();
router.route('/getdetails').get()
module.exports=router;