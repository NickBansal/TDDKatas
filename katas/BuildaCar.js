class Vehicle {
    constructor(length) {
        const layer1 = ` ${'-'.repeat(length-1)}`
        this.body = {
            component: { layer1 }
        }
        // this.chassis = {
        //     component: { layer3 }
        // }
    }
}

const car = (length) => {
    let Car
    if (length < 7) throw new Error('length must be larger then 7');
    else Car = new Vehicle(length)
    return Car
}

module.exports = car