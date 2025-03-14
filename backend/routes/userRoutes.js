const express = require('express')

const {signup, login, Profile, Userdelete, Update } = require('../controller/userController');
const authMiddleware = require('../middleware/authMiddleware');


const router = express.Router();

router.post('/signup' ,signup);
router.post('/login' , login);
router.get('/Profile', Profile);
router.delete('/delete/:id', Userdelete);
router.put('/update', Update)



// router.post('/profile', authMiddleware, (req, res) => {
//     res.json({message: "welcome to your profile", user: req.user});
// });


module.exports = router;