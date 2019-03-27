
// Class Types

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

// This is because when a class implements an interface,
// only the instance side of the class is checked.
// Since the constructor sits in the static side, it is not included in this check.
class Clock implements ClockInterface {
    public currentTime: Date;
    constructor(h: number, m: number) { }
    public setTime(d: Date) {
        this.currentTime = d;
    }
}

// interface ClockConstructor {
//     new (hour: number, minute: number): ClockInterface;
// }
type ClockConstructor = new (hour: number, minute: number) => ClockInterface2;
interface ClockInterface2 {
    tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface2 {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface2 {
    constructor(h: number, m: number) { }
    public tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface2 {
    constructor(h: number, m: number) { }
    public tick() {
        console.log("tick tock");
    }
}
class WrongClock implements ClockInterface2 {
    constructor(h: number, m: number, s: number) { }
    public tick() {
        console.log("wrong wrong");
    }
}

const digital = createClock(DigitalClock, 12, 17);
const analog = createClock(AnalogClock, 7, 32);
// const wrong = createClock(WrongClock, 12, 17); // wrong

// Extending Interfaces

interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

const square = {} as Square;
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
// square.height = 50; // error

// Interfaces Extending Classes

class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    public select() { }
}

class TextBox extends Control {
    public select() { }
}

// class Image implements SelectableControl {
//     public select() { }
// }

// https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files
export {};
