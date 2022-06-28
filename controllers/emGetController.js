const conn = require('../dbConnection').promise();
exports.getAllEm = async(req, res, next) => {
    // select * from em
    try {
        const [rows] = await conn.execute('SELECT `id`,`name`,`address`,`position`,`phone` FROM employee');
        res.json({
            employee: rows
        });
    } catch (err) {
        next(err);
    }
}