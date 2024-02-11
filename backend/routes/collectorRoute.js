const express = require('express');
const { login ,register,getAllRest,history,currentOrder,updateStatus} = require('../controllers/collectorController');
const router = express.Router();


// Middleware example: Logging requests
// router.get('/', (req, res) => {
 router.route('/login').post(login)
router.route('/register').post(register)
router.route('/getAllRest/:id').get(getAllRest)
router.route('/history/:id').get(history)
router.route('/currentOrder/:id').get(currentOrder)
router.route('/updateStatus').patch(updateStatus)
// login
// get current order 
// get all orders 
// update orders  status 



module.exports = router;
