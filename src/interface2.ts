
import { SquareConfig } from "./common/declared";

const createSquare = (config: SquareConfig): {color: string; area: number} => {
    const newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
        newSquare.color = config.area; // OK
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
};

const mySquare1 = createSquare({color: "black"}); // {color: "black"; area: 100}

// ========================

// Function Types

// interface SearchFunc {
//     (source: string, subString: string): boolean;
// }
type SearchFunc = (source: string, subString: string) => boolean;

let mySearch: SearchFunc;
mySearch = (source: string, subString: string) => {
    const result = source.search(subString);
    return result > -1;
};
mySearch = (src: string, sub: string): boolean => {
    const result = src.search(sub);
    return result > -1;
};
mySearch = (src, sub) => {
    const result = src.search(sub);
    return result > -1;
};

// ========================

// Indexable Types

interface StringArray1 {
    [index1: number ]: string;
}
let strArray1: StringArray1;
strArray1 = ["Bob", "Fred"];
console.log(strArray1[0]);
// strArray1 = {10: "123", 100: "456"};
// strArray1 = [1, "Fred"]; // error
const myStr1: string = strArray1[1];

interface StringArray2 {
    [index2: string ]: string;
}
const myArray2: StringArray2 = {name1: "Bob", name2: "Fred"};
const myStr2: string = myArray2.name1;
// const unknow: string = myArray2.unknow; // OK

interface NumberDictionary {
    [index: string]: number|string;
    length: number;    // ok, length is a number
    name: string;      // error, the type of 'name' is not a subtype of the indexer
}

interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let readOnlyArray: ReadonlyStringArray;
readOnlyArray = ["Alice", "Bob"];
readOnlyArray = {0: "123", 1: "456"};
// readOnlyArray = {x1: "123", x2: "456"}; // error
// readOnlyArray[0] = "789"; // error

// https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files
export {};
