const conn = require('../dbConnection').promise();
exports.getAllCm = async(req, res, next) => {
    // select * from customer
    try {
        const [rows] = await conn.execute('SELECT `id`,`company_name`,`address`,`name`,`service`,`phone` FROM customer');
        if (rows.length > 0) {
            res.json({
                customer: rows
            });
        } else {
            res.status(404).json({
                message: "ບໍ່ພົບຂໍ້ມູນ"
            });
        }
    } catch (err) {
        next(err);
    }
}