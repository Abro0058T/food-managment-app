const express = require('express');
const router = express.Router();
const {login,register,registerMenu,getRestData,createOrder ,history} =require('../controllers/outletController')


// Middleware example: Logging requests
router.get('/', (req, res) => {
 
res.send("working this is /")});

router.route("/register").post(register)

router.route("/login").post(login)
router.route("/RegisterMenu").post(registerMenu)
router.route("/restaurant/:id").get(getRestData)
router.route("/createOrder/:id").post(createOrder);
router.route("/history/:id").get(history)
  

module.exports = router;
