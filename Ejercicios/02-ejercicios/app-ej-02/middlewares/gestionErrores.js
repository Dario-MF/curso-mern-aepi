const createError = require('http-errors');


const routeError = (req, res, next) => {
    next(createError(404));
};

const handleError = (err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = err;
    res.locals.status = err.status;

    res.status(err.status).render('pages/error');
};


const serverErrors = (err, req, res, next) => {
    console.log(err);
    res.locals.message = err.message;
    res.locals.error = err;
    res.locals.status = 500;

    res.status(500).render('pages/error');
};


module.exports = {
    routeError,
    serverErrors,
    handleError
};