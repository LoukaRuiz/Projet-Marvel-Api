const axios = require('axios')

exports.getAll = async (req, res, parentDataName, childrenName) => {
    const parentData = await axios.get(parentDataName)
        .catch(function (error) {
            res.json(error)
        })

    const [children] = await Promise.all(
        childrenName.map(async childName => await getDatas(parentData.data.data.results, parentDataName, childName))
    )

    for (let child = 0; child < childrenName.length; child++) {
        parentData.data.data.results[childrenName[child]] = children[child]
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
