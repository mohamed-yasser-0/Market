const logss = (req, res, next) => {
    console.log(req.path,req.body);
    next();
};

module.exports = logss;