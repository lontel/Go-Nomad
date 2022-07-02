const isLoggedIn = (req, res, next) => {
    if (!req.session.currentUser) {
        return res.render('####', { errorMessage: 'You must log in' })
    }
    next()
}
const isLoggedOut = (req, res, next) => {
    if (req.session.currentUser) {
        return res.redirect('/')
    }
    next()
}
module.exports = { isLoggedIn, isLoggedOut }