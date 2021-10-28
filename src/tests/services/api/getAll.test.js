const { getAll } = require("../../../services/api/getAll")


describe('getAll', () => {
    describe('with heroes retrieve', () => {
        it('returns valid hero name', () => {
            const hero = getAll(req, res, 'characters', ['stories', 'comics'])
            expect(hero[0].name).toBe("3-D Man")
        })

        it('returns two heroes', () => {

        })

        it('returns valid comics', () => {

        })
    })
    describe('without heroes retrieve', () => {
        it('throws error', () => {

        })

    })
})