class MarsRover {
    constructor(location = [0, 0], direction = 'N', grid = [100, 100], obstacles = []) {
        this.location = location
        this.direction = direction
        this.commandList = []
        this.grid = grid
        this.obstacles = obstacles
        this.memory = [[0, 0]]
        this.status = 'OK'
    }

    move(x) {
        const moveMents = x === 'f' ? 1 : -1
        if (this.direction === 'N') {
            this.location[1] -= moveMents
        }
        if (this.direction === 'S') {
            this.location[1] += moveMents
        }
        if (this.direction === 'W') {
            this.location[0] -= moveMents
        }
        if (this.direction === 'E') {
            this.location[0] += moveMents
        }
        this.memory.push([...this.location])
    }

    gridLock() {
        if (this.location[0] >= this.grid[0]) {
            this.location[0] -= this.grid[0]
        }
        if (this.location[1] >= this.grid[1]) {
            this.location[1] -= this.grid[1]
        }
        if (this.location[0] < 0) {
            this.location[0] += this.grid[0]
        }
        if (this.location[1] < 0) {
            this.location[1] += this.grid[1]
        }
    }

    rotate(x) {
        const lookupLeft = { 'E': 'N', 'N': 'W', 'W': 'S', 'S': 'E' }
        const lookupRight = { 'E': 'S', 'S': 'W', 'W': 'N', 'N': 'E' }
        this.direction = x === 'l' ? lookupLeft[this.direction] : lookupRight[this.direction]
    }

    commands(arr) {
        if (arr) this.commandList = arr
        this.commandList.forEach(item => {
            if (!this.obstacles.some(item => item[0] === this.location[0] && item[1] === this.location[1])) {
                if (item === 'f' || item === 'b') {
                    this.move(item)
                }
                if (item === 'l' || item === 'r') {
                    this.rotate(item)
                }
            }
        })
        if (this.obstacles.some(item => item[0] === this.location[0] && item[1] === this.location[1])) {
            this.location = (this.memory[this.memory.length - 2])
            this.status = 'obstacle'
        }
        this.gridLock()

        return this.commandList
    }
}

module.exports = MarsRover
