const isAdmin = (req, res, next) => {
    console.log('isAdmin invoked');
    if (!req.session.isAdmin) {
        res.redirect("/userDashboard");
    } else {
        next();
    }
}
module.exports = isAdmin;