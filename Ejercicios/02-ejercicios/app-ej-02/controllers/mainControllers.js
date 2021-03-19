


const renderMainIndex = (req, res, next) => {
    try {
        res.render('pages/main/mainIndex', { title: 'Main' });
    } catch (error) {
        next(error);
    };

};

const renderMainAbout = (req, res, next) => {
    try {
        res.render('pages/main/mainAbout', { title: 'About' });
    } catch (error) {
        next(error);
    };
};



module.exports = {
    renderMainIndex,
    renderMainAbout
};