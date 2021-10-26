const axios = require('axios')

exports.getAllHeroes = async (req, res) => {
    const heroes = await axios.get('characters')
        .catch(function (error) {
            res.json(error)
        })

    const [stories, comics] = await Promise.all(
        await getHeroesDatas(heroes.data.data.results, 'stories'),
        await getHeroesDatas(heroes.data.data.results, 'comics')
    )

    heroes.comics = comics
    heroes.stories = stories

    res.json(heroes.data)
}

async function getHeroesDatas(heroes, ressourceName) {
    return await Promise.all(
        heroes.map(async hero => {
            const stories = await axios.get(`characters/${hero.id}/${ressourceName}`)
            hero[ressourceName] = stories.data?.data.results ?? []
            return hero
        })
    )
}
