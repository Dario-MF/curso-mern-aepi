


const closeServer = (req, res, next) => {
    const d = new Date();
    const hour = d.getHours();

    if (hour >= 17 || hour <= 7) {
        res.locals.error = 'No se puede acceder al servidor de: 17:00h ~ 08:00h';
        res.locals.status = 503;
        res.locals.message = 'Servicio no disponible'
        res.render('pages/error');
        return
    }
    next();
};

module.exports = {
    closeServer
};