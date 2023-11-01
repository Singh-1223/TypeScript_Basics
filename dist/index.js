"use strict";
// let a=25; //automatically knows a is a number;
//exlicitly  defining type
// let address:string;
// let age:number=67;
// let check:boolean;
//other way;
let address = "delhi";
let age = 45;
//union  type;
let surname; //surname can be either string or number
surname = "disi";
//*********************FUNC AND TYPE KEYWORD************************************** */
//in function, we have to tell type of parameters
// const func = (age:number ,str:string)=>{
//     console.log(age+"  "+ str);
// }
//  func2 will return string
// const func2 = (age:number ,str:string):string=>{
//     console.log(age+"  "+ str);
//     return String(age+address);
// }
// func(age,address);
// //  username will be alwasys string, using type keyword
// type UserName= string;
// let abhi:UserName="abhi";
// type passtofunc =(age:number,str:string)=>string;
// const func3:passtofunc = (age,str)=>{
//     console.log(age+"  "+ str);
//     return String(age+address);
// }
//***********************ARRAYS IN TS ******************************** */
// 1st method---declaring arrray
const arr = [12, 243, 34, 54]; // array of type number;
const arr2 = ['hi', 'bye', 'lie'];
// 2nd method----other importand method of array declation
const arr3 = [23, 4, 53, 2];
let arr4;
arr4 = ['hi', 'lie', 'bye'];
// array with boht number and string, or multiple types
const mularr = [230, "hi", 'bye', 54];
//creating typle or fixed size array
const tuplearr = [1, 23, 34];
//********************OBJECT IN TS********************
// one way define type alongside, this makes code large
const obj = {
    height: 34,
    surname: "summu",
    gender: true
};
const obj1 = {
    height: 34,
    surname: "summu",
};
//creating new object wiht NewObj3 type
const newobj3 = {
    height: 34,
    surname: "iti",
    gender: false,
    money: 3455
};
// *********** FUNCTIONS IN TS ***************************
// normal fucntions
// function lol takes n which is a number and it return a number
function lol(n) {
    return n;
}
const lol1 = function lol1(n) {
    return n;
};
// arrow functions
const func = (age, str) => {
    console.log(age + "  " + str);
};
//  func2 will return string
const func2 = (age, str) => {
    console.log(age + "  " + str);
    return String(age + address);
};
func(age, address);
let abhi = "abhi";
const func3 = (age, str) => {
    console.log(age + "  " + str);
    return String(age + address);
};
// passing defalut value for n, n=45
const func4 = (n = 45, m, l) => {
    if (typeof l === "undefined")
        return n * m;
    return n * m * l;
};
const func5 = (...m) => {
    return m;
};
func5(34, 24, 545, 23, 4534, 543, 23, 32);
const func6 = (...m) => {
    return m;
};
//```````````````````````FUNCTIONS  WITH OBJECTS*****************************
const getData = (product) => {
    console.log(product); //out fucntion here
};
//usign funciton with type getdatatype1
const getData2 = (product) => {
    console.log(product);
};
const getData5 = (product) => {
    console.log(product);
};
const productOne = {
    name: "Macbook",
    stock: 46,
    price: 999999,
    photo: "samplephotourl",
    id: "asdnasjdasjkdas",
};
getData5(productOne);
// Never Type
// in case we throw error ,type never is returned
const errorHandler = () => {
    throw new Error();
};
//in case we return error, type error is returned
const errorHandler1 = () => {
    return new Error();
};
//   *******************CLASSES IN TS ************************************
// making a class
class Player {
    constructor(height, weight) {
        this.myHeight = () => {
            return this.height;
        };
        this.height = height;
        this.weight = weight;
        this.id = String(Math.random() * 100);
    }
}
//creating object form class;
const boi = new Player(233, 23);
console.log(boi.myHeight());
// other mehod and protected keyword
// with protected keyword ,we can use/access that property in extended class which is not possible wiht private
class Player2 {
    constructor(//can define properties directly in constructor
    height, weight, power //protected keyword
    ) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.myHeight = () => {
            return this.height;
        };
    }
}
const boi2 = new Player2(3, 4, 3);
class Player3 extends Player2 {
    constructor(height, weight, power, special) {
        super(height, weight, power); // for lconstructor of parent class
        this.getMyPower = () => {
            return this.power;
        };
        this.special = special;
    }
}
const boi3 = new Player3(3, 4, 3, true);
// SETTER AND GETTER FUNCTION
class Player4 {
    constructor(//can define properties directly in constructor
    height, weight, power //protected keyword
    ) {
        this.height = height;
        this.weight = weight;
        this.power = power;
    }
    //getter
    get getheight() {
        return this.height;
    }
    //setter  , set function do not return anything, not even void
    set changeHeight(val) {
        this.height = val;
    }
}
const boi4 = new Player4(3, 4, 3);
console.log(boi4.getheight); //access height
boi4.changeHeight = 500; //change height
console.log(boi4.getheight); //access height
class Product4 {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.id = String(Math.random() * 1000);
        this.getId = () => this.id;
    }
}
const product5 = new Product4("Macbook", 2000, 20);
// ************************TYPE ASSERTION ***************************************************
const btn = document.getElementById('btn');
btn?.onclick;
// ts will think that btn can be html elemetn or maybe null
// or we use ? with btn as to use if exits
// type asseriton  , telling ts btn2 is a html element
const btn2 = document.getElementById('btn');
// btn2.onclick; 
// other way of type assertion 
const btn3 = document.getElementById('btn');
// btn3.onclick; 
//third method , we will use ! in the tell telling ts that it is not null, os it can only be html element then
const btn4 = document.getElementById('btn');
// btn4.onclick; 
//telling specially about the elemetn so that we can use elemnet properties
// for eg) we want to use src property of image element
const img = document.getElementById('myimg');
// img.src=""; // can now use src property;
// can be done this way also
const img1 = document.querySelector('img');
// img.src="";
const form = document.getElementById('myform');
const myinput = document.querySelector("form>input");
form.onsubmit = (e) => {
    e.preventDefault();
    const h2 = document.createElement("h2");
    const body = document.querySelector("body");
    const value = Number(myinput.value);
    h2.textContent = String(value + 20);
    body.append(h2);
};
