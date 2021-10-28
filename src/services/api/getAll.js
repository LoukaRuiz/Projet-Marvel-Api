const axios = require('axios')

exports.getAll = async (res, parentDataName, childsName) => {
    const parentData = await axios.get(parentDataName)
        .catch(function (error) {
            res.json(error)
        })

    const [childs] = await Promise.all(
        childsName.map(async childName => await getDatas(parentData.data.data.results, parentDataName, childName))
    )

    for (let child = 0; child < childsName.length; child++) {
        parentData.data.data.results[childsName[child]] = childs[child]
    }

    res.json(parentData.data)
}

async function getDatas(parentData, parentDataName, ressourceName) {
    return await Promise.all(
        parentData.map(async parent => {
            const child = await axios.get(`${parentDataName}/${parent.id}/${ressourceName}`)
            parent[ressourceName] = child.data?.data.results ?? []
            return parent
        })
    )
}
