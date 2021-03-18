


const renderMainIndex = (req, res) => {
    res.render('pages/main/mainIndex', { title: 'Main' });
};

const renderMainAbout = (req, res) => {
    res.render('pages/main/mainAbout', { title: 'About' });
};



module.exports = {
    renderMainIndex,
    renderMainAbout
};