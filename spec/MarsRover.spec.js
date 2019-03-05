const MarsRover = require('../katas/MarsRover')
const { expect } = require('chai')

describe.only('Mars Rover', function () {
    describe('You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing', function () {
        it('should set starting location', function () {
            var mr = new MarsRover([12, 21]);
            expect(mr.location).eql([12, 21]);
        });
        it('should use default starting location value 0x0 when not assigned', () => {
            var mr = new MarsRover();
            expect(mr.location).eql([0, 0]);
        });
        it('should set direction as numeric value', () => {
            var mr = new MarsRover([12, 21], 'N');
            expect(mr.direction).equal('N');
        });
        it('should use default starting direction value N when not assigned', () => {
            var mr = new MarsRover([12, 21]);
            expect(mr.direction).equal('N');
        });
    });

    describe('The rover receives a character array of commands', () => {
        it('should set commands array', () => {
            var mr = new MarsRover([12, 21], 'N');
            mr.commands(['do', 'this', 'and', 'then', 'do', 'that']);
            expect(mr.commands()).eql(['do', 'this', 'and', 'then', 'do', 'that']);
        });
    });

    describe('Implement commands that move the rover forward/backward (f,b)', () => {
        it('should reduce Y when moving north', () => {
            var mr = new MarsRover([12, 21], 'N');
            mr.commands(['f', 'f']);
            expect(mr.location).eql([12, 19]);
        });
        it('should increase Y when moving south', () => {
            var mr = new MarsRover([12, 21], 'S');
            mr.commands(['f']);
            expect(mr.location).eql([12, 22]);
        });
        it('should reduce X when moving west', () => {
            var mr = new MarsRover([12, 21], 'W');
            mr.commands(['f']);
            expect(mr.location).eql([11, 21]);
        });
        it('should increase X when moving east', () => {
            var mr = new MarsRover([12, 21], 'E');
            mr.commands(['f']);
            expect(mr.location).eql([13, 21]);
        });
        it('should increase Y when moving backwards facing north', () => {
            var mr = new MarsRover([12, 21], 'N');
            mr.commands(['b']);
            expect(mr.location).eql([12, 22]);
        });
        it('should reduce Y when moving backwards facing south', () => {
            var mr = new MarsRover([12, 21], 'S');
            mr.commands(['b']);
            expect(mr.location).eql([12, 20]);
        });
        it('should increase X when moving backwards facing west', () => {
            var mr = new MarsRover([12, 21], 'W');
            mr.commands(['b']);
            expect(mr.location).eql([13, 21]);
        });
        it('should reduce X when moving backwards facing east', () => {
            var mr = new MarsRover([12, 21], 'E');
            mr.commands(['b']);
            expect(mr.location).eql([11, 21]);
        });
    });

    describe('Implement commands that turn the rover left/right (l,r)', () => {
        it('should change direction from E to N when command is to turn left', () => {
            var mr = new MarsRover([12, 21], 'E');
            mr.commands(['l']);
            expect(mr.direction).equal('N');
        });
        it('should change direction from N to W when command is to turn left', () => {
            var mr = new MarsRover([12, 21], 'N');
            mr.commands(['l']);
            expect(mr.direction).equal('W');
        });
        it('should change direction from E to S when command is to turn right', () => {
            var mr = new MarsRover([12, 21], 'E');
            mr.commands(['r']);
            expect(mr.direction).equal('S');
        });
        it('should change direction from E to S when command is to turn right', () => {
            var mr = new MarsRover([12, 21], 'S');
            mr.commands(['r']);
            expect(mr.direction).equal('W');
        });
    });

    describe('Implement wrapping from one edge of the grid to another (planets are spheres after all)', () => {
        it('should assign grid size', () => {
            var mr = new MarsRover([12, 21], 'N', [12, 33]);
            expect(mr.grid).eql([12, 33]);
        });
        it('should use default value 100x100 when grid is not assigned', () => {
            var mr = new MarsRover([12, 21], 'N');
            expect(mr.grid).eql([100, 100]);
        });
        it('should return X to 0 when grid is passed', () => {
            var mr = new MarsRover([9, 9], 'E', [10, 10]);
            mr.commands(['f']);
            expect(mr.location).eql([0, 9]);
        });
        it('should return Y to 0 when grid is passed', () => {
            var mr = new MarsRover([9, 9], 'S', [10, 10]);
            mr.commands(['f']);
            expect(mr.location).eql([9, 0]);
        });
        it('should return X to grid end when grid is passed from west', () => {
            var mr = new MarsRover([0, 9], 'E', [10, 10]);
            mr.commands(['b']);
            expect(mr.location).eql([9, 9]);
        });
        it('should return Y to grid end when grid is passed from north', () => {
            var mr = new MarsRover([9, 0], 'N', [10, 10]);
            mr.commands(['f']);
            expect(mr.location).eql([9, 9]);
        });
        it('should return Y to grid end when grid is passed from north', () => {
            var mr = new MarsRover([9, 0], 'N', [10, 10]);
            mr.commands(['f', 'f', 'f']);
            expect(mr.location).eql([9, 7]);
        });
    });

    describe('Follows the journey of the Mars Rover through all directions', () => {
        it('Should bring a new location', () => {
            var mr = new MarsRover([12, 21]);
            mr.commands(['f', 'f', 'f', 'b', 'l', 'f', 'l']);
            expect(mr.location).eql([11, 19]);
        })
    })

    describe('Implement obstacle detection before each move to a new square.'
        + ' If a given sequence of commands encounters an obstacle,'
        + ' the rover moves up to the last possible point and reports the obstacle', () => {
            it('should assign obstacles', () => {
                var mr = new MarsRover([12, 21], 'N', [12, 33], [[5, 5], [3, 7]]);
                expect(mr.obstacles).eql([[5, 5], [3, 7]]);
            });
            it('should use empty array when obstacles are not assigned', () => {
                var mr = new MarsRover([12, 21], 'N');
                expect(mr.obstacles.length).equal(0);
            });
            it('should not move to the obstacle', () => {
                var mr = new MarsRover([0, 0], 'E');
                mr.obstacles = [[5, 1], [3, 0]];
                mr.commands(['f', 'f', 'f']);
                expect(mr.location).eql([2, 0]);
            });
            it('should stop when obstacle is detected', () => {
                var mr = new MarsRover([0, 0], 'E');
                mr.obstacles = [[3, 0]];
                mr.commands(['f', 'f', 'f', 'l', 'f']);
                expect(mr.location).eql([2, 0]);
            });
            it('should stop when obstacle is detected', () => {
                var mr = new MarsRover([0, 0], 'E');
                mr.obstacles = [[3, 0]];
                mr.commands(['f', 'f', 'f', 'l', 'f', 'f', 'f', 'f']);
                expect(mr.location).eql([2, 0]);
            });
            it('should stop when obstacle is detected', () => {
                var mr = new MarsRover([10, 10], 'E');
                mr.obstacles = [[11, 10]];
                mr.commands(['f', 'f', 'b']);
                expect(mr.status).eql('obstacle');
            });
            it('should stop when obstacle is detected', () => {
                var mr = new MarsRover([2, 3], 'S');
                mr.obstacles = [[2, 4]];
                mr.commands(['f', 'f', 'f']);
                expect(mr.location).eql([2, 3]);
            });
            it('should set status to obstacle when one is detected', () => {
                var mr = new MarsRover([10, 10], 'E');
                mr.obstacles = [[11, 10]];
                mr.commands(['f']);
                expect(mr.location).eql([10, 10]);
            });
            it('should leave status to OK when obstacle is NOT detected', () => {
                var mr = new MarsRover([0, 0], 'E');
                mr.commands(['f']);
                expect(mr.status).equal('OK');
            });
        });
});