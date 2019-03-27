
let boolVar: boolean;
boolVar = true;
let numVar: number;
numVar = 5;
let strVar: string;
strVar = "a";
let anyVar: any;
anyVar = numVar;
const arrVar: number[] = [1, 2, 3];
// arrVar.push(strVar); // error

// tuple
// 在Python中，Tuple就像是串列（List），不過串列是可變動（Mutable）物件，而Tuple是不可變動（Immutable）物件。
// 在ts中，以陣列形式存在，描述要儲存的類型
const strictArr: [string, number, boolean] = [strVar, numVar, boolVar];
// strictArr.push(strVar);
// strictArr.push(anyVar);
// strictArr.push(arrVar); // error

// enum
enum Color {Red, Green, Blue}
let enumVar: Color;
enumVar = Color.Blue;
// enumVar = strVar; // error
// enumVar = numVar; // error

// void: only assign undefined or null
let voidVar: void;
voidVar = undefined;
// voidVar = numVar; // error
// numVar = voidVar; // error

// null or undefined: By default null and undefined are subtypes of all other types.
let nullVar: null;
nullVar = null;
// nullVar = numVar; // error
// numVar = nullVar;

// never
// let k = (arg1: string): never => {
//     throw new Error("never testing");
// };

// object
const obj: object = {key: strVar};
// obj = numVar;
// obj = nullVar;

// https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files
export {};
