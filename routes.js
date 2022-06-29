const router = require('express').Router();
const { body } = require('express-validator');
const { register } = require('./controllers/registerController');
const { login } = require('./controllers/loginController');
const { getUser } = require('./controllers/getUserController');
const { getAllUsers } = require('./controllers/getAllUserController');
const { resetPassword } = require('./controllers/resetPasswordController');
const { emAdd } = require('./controllers/emAddController');
const { getAllEm } = require('./controllers/emGetController');
const { emEdite } = require('./controllers/emEditeController');
const { emDelete } = require('./controllers/emDeleteController');
const { cateAdd } = require('./controllers/categoryAddController');
const { getAllCate } = require('./controllers/categoryGetController');
const { cateEdite } = require('./controllers/categoryEditeController');
const { cateDelete } = require('./controllers/categoryDeleteController');
const { cmAdd } = require('./controllers/cmAddController');
const { getAllCm } = require('./controllers/cmGetController');
const { cmsEdite } = require('./controllers/cnEditeController');
const { cmDelete } = require('./controllers/cmDeleteController');
// user
router.post('/register', [
    body('name', "The name must be of minimum 3 characters length")
    .notEmpty(),
    body('password', "The Password must be of minimum 4 characters length").notEmpty().trim().isLength({ min: 4 }),
], register);


router.post('/login', [
    body('name', "Invalid user name address")
    .notEmpty(),
    body('password', "The Password must be of minimum 4 characters length").notEmpty().trim().isLength({ min: 4 }),
], login);

router.get('/getuser', getUser);

router.get('/getallusers', getAllUsers);

router.get('/resetpassword', [
    body('password', "The Password must be of minimum 4 characters length").notEmpty().trim().isLength({ min: 4 }),
], resetPassword);

// em
router.post('/addem', [
    body('name', "The name must be of minimum 3 characters length")
    .notEmpty(),
    body('address', "The address must be of minimum 3 characters length")
    .notEmpty(),
    body('position', "The position must be of minimum 3 characters length")
    .notEmpty(),
    body('phone', "The phone must be of minimum 3 characters length")
    .notEmpty(),
], emAdd);

router.get('/getallem', getAllEm);

router.put('/emedite/:id', [
    body('name', "The name must be of minimum 3 characters length")
    .notEmpty(),
    body('address', "The address must be of minimum 3 characters length")
    .notEmpty(),
    body('position', "The position must be of minimum 3 characters length")
    .notEmpty(),
    body('phone', "The phone must be of minimum 3 characters length")
    .notEmpty(),
], emEdite);
router.delete('/emdelete/:id', emDelete);

// category
router.post('/addcate', [
    body('type', "The type must be of minimum 3 characters length")
    .notEmpty(),
    body('type_name', "The type name must be of minimum 3 characters length")
    .notEmpty(),
], cateAdd);

router.get('/getallcate', getAllCate);

router.put('/cateedite/:id', [
    body('type', "The type must be of minimum 3 characters length")
    .notEmpty(),
    body('type_name', "The type name must be of minimum 3 characters length")
    .notEmpty(),
], cateEdite);

router.delete('/catedelete/:id', cateDelete);

// customer
router.post('/addcm', [
    body('company_name', "The company name must be of minimum 3 characters length")
    .notEmpty(),
    body('address', "The address must be of minimum 3 characters length")
    .notEmpty(),
    body('name', "The name must be of minimum 3 characters length")
    .notEmpty(),
    body('service', "The service must be of minimum 3 characters length")
    .notEmpty(),
    body('phone', "The phone must be of minimum 3 characters length")
    .notEmpty(),
], cmAdd);

router.get('/getallcm', getAllCm);

router.put('/cmsedite/:id', [
    body('company_name', "The company name must be of minimum 3 characters length")
    .notEmpty(),
    body('address', "The address must be of minimum 3 characters length")
    .notEmpty(),
    body('name', "The name must be of minimum 3 characters length")
    .notEmpty(),
    body('service', "The service must be of minimum 3 characters length")
    .notEmpty(),
    body('phone', "The phone must be of minimum 3 characters length")
    .notEmpty(),
], cmsEdite);

router.delete('/cmdelete/:id', cmDelete);
module.exports = router;