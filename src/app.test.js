import { evolve } from "./app"

jest.mock("./board")
import { getNeighbours } from "./board"

describe("game of life", () => {
  describe("forever alone", () => {
    test("cells with no neighbours die", () => {
      const current = [[false]]
      const expected = [[false]]
      expect(evolve(current)).toEqual(expected)
    })
  })

  describe("no person is an island", () => {
    getNeighbours.mockImplementation((x, y) => {
        return 0
    })

    // test("live cells with only one live neighbour dies", () => {
    //   const current = [[true, true]]
    //   const expected = [[false, false]]
    //   expect(evolve(current)).toEqual(expected)
    // })

    // test("cells with 2 neighbours to survive", () => {
    //   const current = [[true, true, true]]
    //   const expected = [[false, true, false]]
    //   expect(evolve(current)).toEqual(expected)
    // })
  })
})
