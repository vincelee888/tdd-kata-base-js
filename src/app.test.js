import { evolve } from "./app"

describe('game of life', () => {
    describe('forever alone', () => {
        test('dead cells stay dead', () => {
            const current = [
                [false]
            ]
            const expected = [
                [false]
            ]
            expect(evolve(current)).toEqual(expected)
        })
    })

    // describe('no person is an island', () => {
    //     test('live cells with only one live neighbour dies', () => {
    //         const current = [
    //             [true, true]
    //         ]
    //         const expected = [
    //             [false, false]
    //         ]
    //         expect(evolve(current)).toEqual(expected)
    //     })

        // test('cells with 2 neighbours to survive', () => {
        //     const current = [
        //         [true, true, true]
        //     ]
        //     const expected = [
        //         [false, true, false]
        //     ]
        //     expect(evolve(current)).toEqual(expected)
        // })
    // })
})
