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
const { orAdd } = require('./controllers/orderAddController');
const { getAllOrder } = require('./controllers/orderGetController');
const { orderEdite } = require('./controllers/orderEditeController');
const { orderDelete } = require('./controllers/orderDeleteController');
const { deliAdd } = require('./controllers/deliveryAddController');
const { getAllDeli } = require('./controllers/deliveryGetController');
const { deliDelete } = require('./controllers/deliveryDeleteController');
const { deliEdite } = require('./controllers/deliveryEditeController');
const { ordetailAdd } = require('./controllers/order.detailAddController');
const { getAllOrderDetail } = require('./controllers/order.detailGetController');
const { orderDetailEdite } = require('./controllers/order.detailEditeController');
const { orderDetailDelete } = require('./controllers/order.detailDeleteController');
const { tranAdd } = require('./controllers/transportAddController');
const { getAllTran } = require('./controllers/transportGetController');
const { tranEdite } = require('./controllers/transportEditeController');
const { tranDelete } = require('./controllers/transportDeleteController');
const { tranDetailAdd } = require('./controllers/transport.detailAddController');
const { getAllTranDetail } = require('./controllers/transport.detailGetController');
const { tranDetailEdite } = require('./controllers/transport.detailEditeController');
const { tranDetailDelete } = require('./controllers/transport.detailDeleteController');
const { getDetailCate } = require('./controllers/categoryGetDetailController');
const { getDetailCm } = require('./controllers/cmGetDetailController');
const { getDetailDeli } = require('./controllers/deliveryGetDetailController');
const { getDetailEm } = require('./controllers/emGetDetailController');
// user
router.post('/register', [
    body('name', "would have 3 characters length")
    .notEmpty(),
    body('password', "would have 4 characters length").notEmpty().trim().isLength({ min: 4 }),
], register);


router.post('/login', [
    body('name', "Invalid user name address")
    .notEmpty(),
    body('password', "would have 4 characters length").notEmpty().trim().isLength({ min: 4 }),
], login);

router.get('/getuser', getUser);

router.get('/getallusers', getAllUsers);

router.get('/resetpassword', [
    body('password', "would have 4 characters length").notEmpty().trim().isLength({ min: 4 }),
], resetPassword);

// em
router.post('/addem', [
    body('name', "would have 3 characters length")
    .notEmpty(),
    body('address', "The address must be of minimum 3 characters length")
    .notEmpty(),
    body('position', "The position must be of minimum 3 characters length")
    .notEmpty(),
    body('phone', "The phone must be of minimum 3 characters length")
    .notEmpty(),
], emAdd);

router.get('/getallem', getAllEm);

router.get('getdetailem', getDetailEm);

router.get('/getdetailem/:id', getDetailCate);

router.put('/emedite/:id', [
    body('name', "would have 3 characters length")
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

router.get('/getdetailcate/:id', getDetailCate);

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
    body('name', "would have 3 characters length")
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
    body('name', "would have 3 characters length")
    .notEmpty(),
    body('service', "The service must be of minimum 3 characters length")
    .notEmpty(),
    body('phone', "The phone must be of minimum 3 characters length")
    .notEmpty(),
], cmsEdite);

router.delete('/cmdelete/:id', cmDelete);
// order 
router.post('/addor', [
    body('emp_id', "The company name must be of minimum 3 characters length")
    .notEmpty(),
    body('company_id', "The company name must be of minimum 3 characters length")
    .notEmpty(),
    body('category_id', "The company name must be of minimum 3 characters length")
    .notEmpty(),
    body('order_date', "The company name must be of minimum 3 characters length")
    .notEmpty(),
], orAdd);

router.get('/getallorder', getAllOrder);

router.put('/orderedite/:id', [
    body('emp_id', "The company name must be of minimum 3 characters length")
    .notEmpty(),
    body('company_id', "The company name must be of minimum 3 characters length")
    .notEmpty(),
    body('category_id', "The company name must be of minimum 3 characters length")
    .notEmpty(),
    body('order_date', "The company name must be of minimum 3 characters length")
    .notEmpty(),
], orderEdite);

router.delete('/orderdelete/:id', orderDelete);

// delivery
router.post('/adddeli', [
    body('customer_id', "The company name must be of minimum 3 characters length")
    .notEmpty(),
    body('order_id', "The company name must be of minimum 3 characters length")
    .notEmpty(),
    body('delpriec', "The company name must be of minimum 3 characters length")
    .notEmpty(),
    body('nettotal_price', "The company name must be of minimum 3 characters length")
    .notEmpty(),
], deliAdd);

router.get('/getalldeli', getAllDeli);

router.get('/getdetaildeli/:id', getDetailDeli);

router.put('/deliedite/:id', [
    body('customer_id', "The company name must be of minimum 3 characters length")
    .notEmpty(),
    body('order_id', "The company name must be of minimum 3 characters length")
    .notEmpty(),
    body('delpriec', "The company name must be of minimum 3 characters length")
    .notEmpty(),
    body('nettotal_price', "The company name must be of minimum 3 characters length")
    .notEmpty(),
], deliEdite);

router.delete('/delidelete/:id', deliDelete);

// order detail
router.post('/addordetail', [
    body('order_id', "The company name must be of minimum 3 characters length")
    .notEmpty(),
    body('category_id', "The company name must be of minimum 3 characters length")
    .notEmpty(),
    body('order_qty', "The company name must be of minimum 3 characters length")
    .notEmpty(),
], ordetailAdd);

router.get('/getallordetail', getAllOrderDetail);

router.put('/ordetailedite/:id', [
    body('order_id', "The company name must be of minimum 3 characters length")
    .notEmpty(),
    body('category_id', "The company name must be of minimum 3 characters length")
    .notEmpty(),
    body('order_qty', "The company name must be of minimum 3 characters length")
    .notEmpty(),
], orderDetailEdite);

router.delete('/ordetailedelete/:id', orderDetailDelete);

// transport
router.post('/addtrans', [
    body('date', "The company name must be of minimum 3 characters length")
    .notEmpty(),
    body('dimersisions', "The company name must be of minimum 3 characters length")
    .notEmpty(),
    body('order_id', "The company name must be of minimum 3 characters length")
    .notEmpty(),
    body('customer_id', "The company name must be of minimum 3 characters length")
    .notEmpty(),
], tranAdd);

router.get('/getalltrans', getAllTran);

router.put('/tranedite/:id', [
    body('date', "The company name must be of minimum 3 characters length")
    .notEmpty(),
    body('dimersisions', "The company name must be of minimum 3 characters length")
    .notEmpty(),
    body('order_id', "The company name must be of minimum 3 characters length")
    .notEmpty(),
    body('customer_id', "The company name must be of minimum 3 characters length")
    .notEmpty(),
], tranEdite);

router.delete('/trandelete/:id', tranDelete);

// transport detail
router.post('/addtrandetail', [
    body('category_id', "The company name must be of minimum 3 characters length")
    .notEmpty(),
    body('transport_qty', "The company name must be of minimum 3 characters length")
    .notEmpty(),
    body('transport_totol', "The company name must be of minimum 3 characters length")
    .notEmpty()
], tranDetailAdd);

router.get('/getalltrandetail', getAllTranDetail);

router.put('/trandetailedite/:id', [
    body('category_id', "The company name must be of minimum 3 characters length")
    .notEmpty(),
    body('transport_qty', "The company name must be of minimum 3 characters length")
    .notEmpty(),
    body('transport_totol', "The company name must be of minimum 3 characters length")
    .notEmpty()
], tranDetailEdite);

router.delete('/trandetailedelete/:id', tranDetailDelete);

module.exports = router;