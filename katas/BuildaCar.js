class Vehicle {
    constructor(length) {
        let layer3
        const layer1 = ` ${'-'.repeat(length - 2)}\n`
        if (length > 11) {
            let i = 11
            let backWheel = ''
            let frontWheel = ''
            let x = 9
            let front = true
            while (i <= length) {
                front ? backWheel += 'o-' : frontWheel += '-o'
                layer3 = `-o-${backWheel}${'-'.repeat(length - x)}${frontWheel}-o-'`
                i+=2
                x+=2
                front = !front
            }
        } else {
            layer3 = `-o-${'-'.repeat(length - 7)}-o-'`
        }
        
        this.body = {
            component: { layer1 }
        }
        this.chassis = {
            component: { layer3 }
        }
    }
}

const car = (length) => {
    let Car
    if (length < 7) throw new RangeError('length must be larger then 7');
    else Car = new Vehicle(length)
    return Car
}

module.exports = { car, Vehicle }