const { getAll } = require('../services/api/getAll')

exports.getAllHeroes = async (req, res) => {
    await getAll(req, res, 'characters', ['stories', 'comics'])
}
