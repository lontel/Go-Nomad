const rolesChecker = user => {
    return {
        isAdmin: user?.role === 'ADMIN',
        isEditor: user?.role === 'PREMIUM'
    }
}
module.exports = { rolesChecker }