const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        console.log(`Next is: ${next}`)
        next();
    }
};

module.exports = withAuth;