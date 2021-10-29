const { getAll } = require('../services/api/getAll')

exports.getAllComics = async (req, res) => {
    await getAll(res, 'comics', ['stories', 'characters'])
}
