/* user controller */
const user = (req, res, next) => {
    let user = {
        dumyData: "this dummy user"
    }
    res.status(200).json(user)
}
module.exports = user;