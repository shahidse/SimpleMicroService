/* index controller */
const index = (req, res, next) => {
    res.status(200).send('message sent')
}

module.exports=index