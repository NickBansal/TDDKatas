class MarsRover {
    constructor(location = [0, 0], direction = 'N') {
        this.location = location
        this.direction = direction
        this.commandList = []
    }

    move(list) {
        const forwards = list.filter(item => item === 'f').length
        const backwards = list.filter(item => item === 'b').length
        if (this.direction === 'N') {
            this.location[1] -= forwards
            this.location[1] += backwards
        }
        if (this.direction === 'S') {
            this.location[1] += forwards
            this.location[1] -= backwards
        }
        if (this.direction === 'W') {
            this.location[0] -= forwards
            this.location[0] += backwards
        }
        if (this.direction === 'E') {
            this.location[0] += forwards
            this.location[0] -= backwards
        }
    }

    rotate(list) {
        const lookupLeft = { 'E': 'N', 'N': 'W', 'W': 'S', 'S': 'E' }
        const lookupRight = { 'E': 'S', 'S': 'W', 'W': 'N', 'N': 'E' }
        if (list[0] === 'l') {
            this.direction = lookupLeft[this.direction]
        }
        if (list[0] === 'r') {
            this.direction = lookupRight[this.direction]
        }
    }


    commands(arr) {
        if (arr) this.commandList = arr
        this.move(this.commandList)
        this.rotate(this.commandList)
        return this.commandList
    }
}

module.exports = MarsRover
