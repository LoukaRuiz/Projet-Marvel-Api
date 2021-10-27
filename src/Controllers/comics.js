const { getAll } = require('../services/api/getAll')

exports.getAllComics = async (req, res) => {
    await getAll(req, res, 'comics', ['stories', 'characters'])
}
