const DirectionsReduction = (array) => {
    let x = 0, y = 0
    const lookup = {'NORTH': 1, 'SOUTH': -1, 'WEST': 1, 'EAST': -1}
    const total = array.reduce((acc, value) => {
        (value === 'WEST' || value === 'EAST') ? y += lookup[value] : x += lookup[value]
        if (y !== 0 || x !== 0) acc.push(value) 
        else acc.pop()
        return acc
    }, [])
    if (x === 0 && y === 0) return []
    else return total
}   

module.exports = DirectionsReduction