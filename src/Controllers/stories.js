const { getAll } = require('../services/api/getAll')

exports.getAllStories = async (req, res) => {
    await getAll(req, res, 'stories', ['characters', 'comics'])
}
