const { getAll } = require('../services/api/getAll')

exports.getAllStories = async (req, res) => {
    await getAll(res, 'stories', ['characters', 'comics'])
}
