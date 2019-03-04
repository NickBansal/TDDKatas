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

    describe('Implement commands that turn the rover left/right (l,r)', function () {
        it('should change direction from E to N when command is to turn left', function () {
            var mr = new MarsRover([12, 21], 'E');
            mr.commands(['l']);
            expect(mr.direction).equal('N');
        });
        it('should change direction from N to W when command is to turn left', function () {
            var mr = new MarsRover([12, 21], 'N');
            mr.commands(['l']);
            expect(mr.direction).equal('W');
        });
        it('should change direction from E to S when command is to turn right', function () {
            var mr = new MarsRover([12, 21], 'E');
            mr.commands(['r']);
            expect(mr.direction).equal('S');
        });
        it('should change direction from E to S when command is to turn right', function () {
            var mr = new MarsRover([12, 21], 'S');
            mr.commands(['r']);
            expect(mr.direction).equal('W');
        });
    });

    // describe('Implement wrapping from one edge of the grid to another (planets are spheres after all)', function () {
    //     it('should assign grid size', function () {
    //         var mr = new MarsRover([12, 21], 'N', [12, 33]);
    //         expect(mr.grid).eql([12, 33]);
    //     });
    //     it('should use default value 100x100 when grid is not assigned', function () {
    //         var mr = new MarsRover([12, 21], 'N');
    //         expect(mr.grid).eql([100, 100]);
    //     });
    //     it('should return X to 0 when grid is passed', function () {
    //         var mr = new MarsRover([9, 9], 'E', [10, 10]);
    //         mr.commands(['f']);
    //         expect(mr.location).eql([0, 9]);
    //     });
    // it('should return Y to 0 when grid is passed', function () {
    //     var mr = new MarsRover([9, 9], 'S', [10, 10]);
    //     mr.commands(['f']);
    //     expect(mr.location).toEqual([9, 0]);
    // });
    // it('should return X to grid end when grid is passed from west', function () {
    //     var mr = new MarsRover([0, 9], 'E', [10, 10]);
    //     mr.commands(['b']);
    //     expect(mr.location).toEqual([9, 9]);
    // });
    // it('should return Y to grid end when grid is passed from north', function () {
    //     var mr = new MarsRover([9, 0], 'N', [10, 10]);
    //     mr.commands(['f']);
    //     expect(mr.location).toEqual([9, 9]);
    // });
    // });

    // describe('Implement obstacle detection before each move to a new square.'
    //     + ' If a given sequence of commands encounters an obstacle,'
    //     + ' the rover moves up to the last possible point and reports the obstacle', function () {
    //         it('should assign obstacles', function () {
    //             var mr = new MarsRover([12, 21], 'N', [12, 33], [[5, 5], [3, 7]]);
    //             expect(mr.obstacles).toEqual([[5, 5], [3, 7]]);
    //         });
    //         it('should use empty array when obstacles are not assigned', function () {
    //             var mr = new MarsRover([12, 21], 'N');
    //             expect(mr.obstacles.length).toEqual(0);
    //         });
    //         it('should not move to the obstacle', function () {
    //             var mr = new MarsRover([0, 0], 'E');
    //             mr.obstacles = [[5, 1], [3, 0]];
    //             mr.commands(['f', 'f', 'f']);
    //             expect(mr.location).toEqual([2, 0]);
    //         });
    //         it('should stop when obstacle is detected', function () {
    //             var mr = new MarsRover([0, 0], 'E');
    //             mr.obstacles = [[3, 0]];
    //             mr.commands(['f', 'f', 'f', 'l', 'f']);
    //             expect(mr.location).toEqual([2, 0]);
    //         });
    //         it('should set status to obstacle when one is detected', function () {
    //             var mr = new MarsRover([0, 0], 'E');
    //             mr.obstacles = [[1, 0]];
    //             mr.commands(['f']);
    //             expect(mr.status).toEqual('obstacle');
    //         });
    //         it('should leave status to OK when obstacle is NOT detected', function () {
    //             var mr = new MarsRover([0, 0], 'E');
    //             mr.commands(['f']);
    //             expect(mr.status).toEqual('OK');
    //         });
    //     });

});