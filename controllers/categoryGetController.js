const conn = require('../dbConnection').promise();
exports.getAllCate = async(req, res, next) => {
    // select * from category
    try {
        const [rows] = await conn.execute('SELECT `id`,`type`,`type_name` FROM category');
        res.json({
            category: rows
        });
    } catch (err) {
        next(err);
    }
}