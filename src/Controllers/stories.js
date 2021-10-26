const axios = require('axios')

exports.getAllStories = async (req, res) => {
    const stories = await axios.get('characters')
        .catch(function (error) {
            res.json(error)
        })

    const [heroes, comics] = await Promise.all(
        await getStoriesDatas(stories.data.data.results, 'heroes'),
        await getStoriesDatas(stories.data.data.results, 'comics')
    )

    stories.comics = comics
    stories.heroes = stories

    res.json(stories.data)
}

async function getStoriesDatas(stories, ressourceName) {
    return await Promise.all(
        stories.map(async story => {
            const heroes = await axios.get(`characters/${story.id}/${ressourceName}`)
            story[ressourceName] = heroes.data?.data.results ?? []
            return story
        })
    )
}
