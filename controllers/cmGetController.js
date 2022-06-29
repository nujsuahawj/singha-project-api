const conn = require('../dbConnection').promise();
exports.getAllCm = async(req, res, next) => {
    // select * from customer
    try {
        const [rows] = await conn.execute('SELECT `id`,`company_name`,`address`,`name`,`service`,`phone` FROM customer');
        res.json({
            customer: rows
        });
    } catch (err) {
        next(err);
    }
}