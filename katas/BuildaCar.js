class Vehicle {
  constructor(length, door) {
    let layer3;
    let layer2;
    const layer1 = ` ${'-'.repeat(length - 2)}\n`;

    if (door > 0) {
      let j = 1; let i = 5; let backDoor = ''; let frontDoor = ''; let
        front = true;
      while (j <= door) {
        front ? frontDoor += '[]' : backDoor += '[]';
        layer2 = `|${backDoor}${' '.repeat(length - i)}${frontDoor}\\`;
        j++;
        i += 2;
        front = !front;
      }
    }

    if (length > 11) {
      let i = 12;
      let backWheel = ''; let frontWheel = '';
      let back = true;
      while (i <= length) {
        back ? backWheel += 'o-' : frontWheel += '-o';
        layer3 = `-o-${backWheel}${'-'.repeat(length - (i - 3))}${frontWheel}-o-'`;
        i += 2;
        back = !back;
      }
    } else {
      layer3 = `-o-${'-'.repeat(length - 7)}-o-'`;
    }

    this.body = {
      component: {
        layer1,
        layer2,
      },
    };
    this.chassis = {
      component: { layer3 },
    };
  }
}

const car = (length, door) => {
  let Car;
  if (length < 7) throw new RangeError('length must be larger then 7');
  else Car = new Vehicle(length, door);
  return Car;
};

module.exports = { car, Vehicle };
