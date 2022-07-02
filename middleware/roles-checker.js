const checkRole = (...grantedRoles) => (req, res, next) => {
    if (grantedRoles.includes(req.session.currentUser.role)) {
        next()
    } else {
        res.render('####', { errorMessage: 'Unauthorized' })
    }
}
module.exports = { checkRole }












