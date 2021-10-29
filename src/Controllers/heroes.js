const { getAll } = require('../services/api/getAll')

exports.getAllHeroes = async (req, res) => {
    await getAll(res, 'characters', ['stories', 'comics'])
}
