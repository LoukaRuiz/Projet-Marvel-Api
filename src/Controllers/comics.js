const axios = require('axios')

exports.getAllComics = async (req, res) => {
    const comics = await axios.get('comics')
        .catch(function (error) {
            res.json(error)
        })
       
    const [characters, stories] = await Promise.all(
        await getComicsDatas(comics.data.data.results, 'characters'),
        await getComicsDatas(comics.data.data.results, 'stories')
    )

    comics.characters = characters
    comics.stories = stories

    res.json(comics.data)
}

async function getComicsDatas(comics, ressourceName) {
    return await Promise.all(
        comics.map(async comic => {
            const stories = await axios.get(`comics/${comic.id}/${ressourceName}`)
            comic[ressourceName] = stories.data?.data.results ?? []
            return comic
        })
    )
}
