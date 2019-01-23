
let boolVariable: boolean = true;
let numVariable: number = 5;
let strVariable: string = "a";
let anyVariable: any = numVariable;

// array
let arrVariable: number[] = [1, 2, 3];
// arrVariable.push(strVariable);

// tuple
// 在Python中，Tuple就像是串列（List），不過串列是可變動（Mutable）物件，而Tuple是不可變動（Immutable）物件。
// 在ts中，以陣列形式存在，描述要儲存的類型
let strictArr: [string, number, boolean] = [strVariable, numVariable, boolVariable];
// strictArr.push(strVariable);
// strictArr.push(anyVariable);
// strictArr.push(arrVariable);
// console.log("strictArr", [strictArr, Array.isArray(strictArr)]);

// enum
enum Color {Red, Green, Blue}
let enumVariable: Color = Color.Blue;
// enumVariable = strVariable;
// enumVariable = numVariable;
// console.log("enumeration", enumVariable);

// void: only assign undefined or null
let voidVariable: void;
voidVariable = undefined;
// voidVariable = numVariable;
// numVariable = voidVariable;

// null or undefined: By default null and undefined are subtypes of all other types.
let nullVariable: null = null;
// nullVariable = numVariable;
// numVariable = nullVariable;

// never
// let k = (arg1: string): never => {
//     throw new Error("never testing");
// };

// object
let obj: object = {key: strVariable};
// obj = numVariable;
// obj = nullVariable;

// ========================
// arrVariable.push(nullVariable);
