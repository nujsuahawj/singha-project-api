const router = require('express').Router();
const {body} = require('express-validator');
const {register} = require('./controllers/registerController');
const {login} = require('./controllers/loginController');
const {getUser} = require('./controllers/getUserController');
const {getAllUsers} = require('./controllers/getAllUserController');
const {resetPassword} = require('./controllers/resetPasswordController');

router.post('/register', [
    body('name',"The name must be of minimum 3 characters length")
    .notEmpty(),
    body('password',"The Password must be of minimum 4 characters length").notEmpty().trim().isLength({ min: 4 }),
], register);


router.post('/login',[
    body('name',"Invalid user name address")
    .notEmpty(),
    body('password',"The Password must be of minimum 4 characters length").notEmpty().trim().isLength({ min: 4 }),
],login);

router.get('/getuser',getUser);
router.get('/getallusers',getAllUsers);
router.get('/resetpassword',[
    body('password',"The Password must be of minimum 4 characters length").notEmpty().trim().isLength({ min: 4 }),
],resetPassword);

module.exports = router;