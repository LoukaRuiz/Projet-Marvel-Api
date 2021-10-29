require('dotenv').config()
const axios = require('axios')

describe("getAllHeroes", () => {
    let getAllHeroesPath
    let env

    beforeEach(() => {
        env = process.env
        getAllHeroesPath = "http://localhost:" + env.PORT + "/heroes"
    })

    it('receives 200 status', async () => {
        const res = await axios.get(getAllHeroesPath)
        expect(res.status).toBe(200);
    });

    it('receives 2 heroes', async () => {
        const res = await axios.get(getAllHeroesPath)
        expect(res.data.data.results.length).toBe(2);
    });

    it('receives list of comics', async () => {
        const res = await axios.get(getAllHeroesPath)
        expect(Array.isArray(res.data.data.results[0].comics)).toBeTruthy();
    });

    it('receives valid comics', async () => {
        const res = await axios.get(getAllHeroesPath)
        expect(typeof res.data.data.results[0].comics[0].title).toBe("string");
    });
});
