import { getNeighbours } from './board'

export const evolve = (state) => {
    console.log(getNeighbours())
    const nextGen = []
    for(let y = 0; y < state.length; y++) {
        nextGen.push([])
        for(let x = 0; x < state[y].length; x++) {
            nextGen[y][x] = state[y][x]
        }
    }

    return nextGen
}
