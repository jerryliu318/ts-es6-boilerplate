
interface LabelValue {
    label: string;
}

const printLabel = (labelObj: LabelValue) => {
    console.log(labelObj.label);
    // console.log(labelObj.size); // error
};

const myObj = {size: 10, label : "Size 10 Object"};
// myObj.test = "testing"; // Excess Property Checkes
// printLabel({size: 10, label : "Size 10 Object"}); // Excess Property Checkes
printLabel(myObj);

// ========================

interface SquareConfig {
    color?: string;
    width?: number;
}

const createSquare = (config: SquareConfig): {color: string; area: number} => {
    const newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
};

const mySquare1 = createSquare({color: "black"}); // {color: "black"; area: 100}
// const mySquare2 = createSquare({}); // {color: "white"; area: 100}
// const mySquare3 = createSquare("123"); // error
// const mySquare4 = createSquare({color: "black", test: "123"}); // Excess Property Checkes
// const mySquare5 = createSquare({} as SquareConfig);

// ========================

interface Point {
    readonly x: number;
    readonly y: number;
}

const p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error

let arrVar: number[];
arrVar = [1, 2, 3, 4];
const roArrVar: ReadonlyArray<number> = arrVar;
// roArrVar[0] = 12; // error
// roArrVar.push(5); // error
// roArrVar.length = 100; // error
// arrVar = roArrVar; // error
arrVar = roArrVar as number[];

// https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files
export {};
