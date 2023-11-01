// let a=25; //automatically knows a is a number;

//exlicitly  defining type
// let address:string;
// let age:number=67;
// let check:boolean;

//other way;
let address=<string>"delhi";
let age=<number>45;

//union  type;
let surname:string|number;  //surname can be either string or number
surname="disi"






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
const arr:number[] =[12,243,34,54]; // array of type number;
const arr2:string[]=['hi','bye','lie'];

// 2nd method----other importand method of array declation

const arr3:Array<number> =[23,4,53,2];
let arr4:Array<string>
arr4=['hi','lie','bye'];

// array with boht number and string, or multiple types
 const mularr:Array<string|number> = [230,"hi",'bye',54]

 //creating typle or fixed size array
 const tuplearr:[number,number,number] =[1,23,34];












//********************OBJECT IN TS********************
 
// one way define type alongside, this makes code large
 const obj:{
    height:number,  // setting types
    surname:string,
    gender:boolean
 } = {
    height:34,    // giving values
    surname:"summu",
    gender:true
 }

 // other method , pre define and declare types for the object
type obj1type = {
    height:number,  // setting types
    surname:string,
    gender?:boolean  // we used ? to make this property optional , not important to fill it in object
};


const obj1:obj1type ={
    height:34,    // giving values
    surname:"summu",
}

// can use this mehod also to define type
// interface keyword --, used when need to create class /object, we can extend interface
interface obj3 {
    height:number,  // setting types
    surname:string,
    gender?:boolean  // we used ? to make this property optional , not important to fill it in object

}

// we can extend interface
interface NewObj3 extends obj3{
    money:number
}

//creating new object wiht NewObj3 type

const newobj3:NewObj3={
    height:34,
    surname:"iti",
    gender:false,
    money:3455
}









// *********** FUNCTIONS IN TS ***************************

// normal fucntions

// function lol takes n which is a number and it return a number
function lol(n:number):number{
    return n;
}

// using type and then passing
type loltype =(n:number)=>number;
const lol1:loltype = function lol1(n){
    return n;
}

// arrow functions
const func = (age:number ,str:string)=>{
    console.log(age+"  "+ str);
}

//  func2 will return string
const func2 = (age:number ,str:string):string=>{
    console.log(age+"  "+ str);
    return String(age+address);
}

func(age,address);

//  username will be alwasys string, using type keyword
type UserName= string;
let abhi:UserName="abhi";

//creating passtofunc type and tehn pass that to function
type passtofunc =(age:number,str:string)=>string;
const func3:passtofunc = (age,str)=>{
    console.log(age+"  "+ str);
    return String(age+address);
}


// here l is made optional by using ?
type functype =(n:number , m:number, l?:number )=>number;
// passing defalut value for n, n=45
const func4 :functype =(n=45, m ,l)=>{
    if(typeof l === "undefined") return n*m;

    return n*m*l;
}


// Rest operator
type functype5 = (n:number,m:number, l?:number) => number;
const func5 =(...m:number[])=>{
    return m;
}

func5(34,24,545,23,4534,543,23,32);

type functype6 = (...m:number[]) => number[];
const func6:functype6 =(...m)=>{
    return m;
}







//```````````````````````FUNCTIONS  WITH OBJECTS*****************************

  const getData = (product:{
    name:string,   // declaring object element types
    stock:number,
    photo?:string,// photo optinal
    readonly id:string  // cannot change it, it is read only
}):void =>{   // retruns void
    console.log(product);  //out fucntion here
  }

  type getdatatype1 = (product:{
    name:string,   // declaring object element types
    stock:number,
    photo:string
  })=>void

  //usign funciton with type getdatatype1
  const getData2:getdatatype1 = (product)=>{
    console.log(product);
  }




  interface Product {
  name: string;
  stock: number;
  price: number;
  photo: string;
  readonly id: string;
}

type GetDataType = (product: Product) => void;

const getData5: GetDataType = (product) => {
  console.log(product);
};

const productOne: Product = {
  name: "Macbook",
  stock: 46,
  price: 999999,
  photo: "samplephotourl",
  id: "asdnasjdasjkdas",
};

getData5(productOne);


// Never Type
// in case we throw error ,type never is returned
  const errorHandler = ():never =>{
    throw new Error();
  }

//in case we return error, type error is returned
const errorHandler1 = () =>{
    return new Error();
  }














//   *******************CLASSES IN TS ************************************

// making a class
class Player{
    readonly id:string; 
    private height;  // can access height only in this class as it is private
    weight;  // public by default

    constructor(height:number, weight:number){
        this.height= height;
        this.weight=weight;
        this.id = String(Math.random()*100);
    }

    myHeight = ()=>{
        return this.height;
    }
}

//creating object form class;
const boi = new Player(233,23);
console.log(boi.myHeight());

// other mehod and protected keyword
// with protected keyword ,we can use/access that property in extended class which is not possible wiht private

class Player2{
    constructor(   //can define properties directly in constructor
        private height:number,
        public weight:number,
        protected power:number //protected keyword
    ){}

    myHeight = ()=>{
        return this.height;
    }
}

const boi2= new Player2(3,4,3);

class Player3 extends Player2{
    special :boolean;

    constructor(height:number,weight:number,power:number,special:boolean){
        super(height,weight,power) // for lconstructor of parent class
        this.special = special;
    }

    getMyPower = ()=>{   // power is protected in class player2 , we can access it in subclass
        return this.power;
    }
}

const boi3= new Player3(3,4,3,true);


// SETTER AND GETTER FUNCTION

class Player4{
    constructor(   //can define properties directly in constructor
        private height:number,
        public weight:number,
        protected power:number //protected keyword
    ){}
     
    //getter
    get getheight():number{
        return this.height;
    }
    
     //setter  , set function do not return anything, not even void
    set changeHeight(val:number){
        this.height = val;
    }
}

const boi4= new Player4(3,4,3);
console.log(boi4.getheight); //access height
boi4.changeHeight = 500;  //change height
console.log(boi4.getheight); //access height


// with interface


interface ProductsType2 {
  name: string;
  price: number;
  stock: number;
  offer?: boolean;
}

interface GiveId {
  getId: () => string;
}

class Product4 implements ProductsType2, GiveId {
  private id: string = String(Math.random() * 1000);
  constructor(
    public name: string,
    public price: number,
    public stock: number
  ) {}
  getId = () => this.id;
}

const product5 = new Product4("Macbook", 2000, 20);












// ************************TYPE ASSERTION ***************************************************

const btn = document.getElementById('btn') 
btn?.onclick; 
// ts will think that btn can be html elemetn or maybe null
// or we use ? with btn as to use if exits

// type asseriton  , telling ts btn2 is a html element
const btn2 = document.getElementById('btn') as HTMLElement;
// btn2.onclick; 

// other way of type assertion 
const btn3 = <HTMLElement>document.getElementById('btn') ;
// btn3.onclick; 

//third method , we will use ! in the tell telling ts that it is not null, os it can only be html element then
const btn4 = document.getElementById('btn')!; 
// btn4.onclick; 



//telling specially about the elemetn so that we can use elemnet properties
// for eg) we want to use src property of image element
const img= document.getElementById('myimg') as HTMLImageElement;
// img.src=""; // can now use src property;

// can be done this way also
const img1  = document.querySelector('img')!;
// img.src="";



const form = document.getElementById('myform')as HTMLFormElement;
const myinput = document.querySelector("form>input") as HTMLInputElement;

form.onsubmit = (e:SubmitEvent)=>{
    e.preventDefault();
    const h2 = document.createElement("h2");
    const body = document.querySelector("body")!;
    const value = Number(myinput.value);
    
    h2.textContent = String(value + 20);
    body.append(h2);
}









// ********************* Keyof & Index Signature************************

interface Person5 {
    // [key: string]: string;
  name: string;
  email: string;
}

const myobj5: Person5 = {
  name: "Abhi",
  email: "abhI@gmail.com",
};

let key="name";

myobj5[key as keyof typeof myobj5]

const getName = (): string => {
  return myobj5["name"];
};
const getEmail = (): string => {
  return myobj5["email"];
};

const getData3 = (key: keyof Person5 ): string => {
  return myobj5[key];
};

getData3("name")












//******************* TYPE UTILITY ***************************** */

// Partial<Type>
// Required<Type>
// Readonly<Type>
// Record<Keys, Type>
// Pick<Type, Keys>
// Omit<Type, Keys>
// Exclude<Type, ExcludedUnion>
// Extract<Type, Union>
// NonNullable<Type>
// Parameters<Type>
// ConstructorParameters<Type>
// ReturnType<Type>
// InstanceType<Type>


// ---------------Partial<Type>
type User ={
    name:string,
    email:string
}

type User2=Partial<User>

//makes all properties optional by using Partial, otherwise we would have to use ? wiht every property
// like name?:string , email?:string




//--------------Requiered<Type>   --opposite of partial 
type User3 ={   
    name?:string,  // both name , email optional here
    email?:string
}

type User4=Required<User3>  // here all properties become necessary wiht required 

const user5:Required<User3>={  //can be used like this also
    name:'hary',
    email:'ha@ry'
}




//---------------- Readonly<Type> - makes every property readonly
type User6 ={
    name:string,
    email:string
}
const user7: Readonly<User6> ={  //  can only read ,cannot overwrite it
    name:"abhi",
    email:"abhi@gmail.vom"
}



//-----------------Record<keys,Type>

type User8 = {
  name: string;
  email: string;
  gender:string;
};

type User9 = Record<"name"|"email"|"gender",string>

// Example

interface UserInfo {
  age: number;
}

type UserName2 = "john" | "levi" | "elon" | "jack";

const users: Record<UserName2, UserInfo> = {
  john: { age: 34 },
  levi: { age: 34 },
  elon: { age: 34 },
  jack: { age: 34 },
};






// ---------------------Pick<Type, Keys>
interface OrderInfo {
  readonly id: string;
  user: string;
  city: string;
  state: string;
  country: string;
  status: string;
}
type ShippingInfo = Pick<OrderInfo, "city" | "state" | "country">;
//picks that particular keys






// --------------------------Omit<Type, Keys>
interface ShippingInfo1 {
  city: string;
  state: string;
  country: string;
}

type Random = Omit<ShippingInfo1,"country">
//omit particular keys




// -----------------Exclude<Type, ExcludedUnion>
type MyUnion = string | number | boolean
type Random1 = Exclude<MyUnion , boolean>
//exluces paritlcular types



// -------------------Extract<Type, Union>
type MyUnion2 = string | number | boolean
type Random2 = Extract<MyUnion , boolean>
//extracts particular type



//-------------------------- NonNullable<Type>
type MyUnion3 = string | number | boolean | null | undefined
type Random3 = NonNullable<MyUnion> //removes null and undefined
         //same as
type Random4 = Exclude<MyUnion,undefined| null>
//removes null and undefined




// -----------------Parameters<Type>
const myfunc = (a: number, b: string) => {
  console.log(a + b);
};
type Random5 = Parameters<typeof myfunc>
//gives parameter types



// -------------------ConstructorParameters<Type>
class SampleClass {
  constructor(public s: string, public t: string) {}
}
type Random6 = ConstructorParameters<typeof SampleClass>
//gives constructor types




//----------------------- ReturnType<Type>
const myfunc1 = (a: number, b: string):string => {
  return a + b;
};
type FuncType = ReturnType< typeof myfunc1>
//gives return type




// ----------------------------InstanceType<Type>
class SampleClass2 {
  constructor(public s: string, public t: string) {}
}
type Random7 = InstanceType<typeof SampleClass>
//gives instance
const user:Random7 ={
    s:"44",
    t:"ssds"
}







//VERY IMPORTANT TOPIC
//****************************  GENERICS IN IS ************************** */



//made a generic fucntion T means any customType
const func7 = <T>(n: T): T => {
 return n;
};

const ans = func7(20);
const ans2 = func7("20");
const ans3 = func7(true);





//wiht passing of object
type Person = {
  name: string;
  age: number;
};

const func8 = <T>(n: T): T => {
  return n;
};

const person1: Person = {
  name: "Abhi",
  age: 109,
};

//good practice to specify what you pass type ,here <Person>
const ans1 = func8<Person>(person1);






// const func9 = <T, U>(n: T, o: U):{object}=> {
//   return { n, o };
// };

const func9 = <T, U>(n: T, o: U): { n:T, o:U } => {
  return { n, o };
};

const ans5 = func9<number,string>(20,"Lol");

type Person3 = {
  name: string;
  age: number;
};

type Person2 = {
  name: string;
  age: number;
  email: string;
};

const user6: Person = {
  name: "abhi",
  age: 109,
};

const user2: Person2 = {
  name: "abhi",
  age: 109,
  email: "asd@gmail.com",
};

const func10 = <T, U extends T>(n: T, o: U): { n: T; o: U } => {
  return { n, o };
};

const ans6 = func10<Person, Person2>(user6, user2);





//example generics

type Person7 = {
  name: string;
  age: number;
};

const users7: Person7[] = [
  {
    name: "abhi",
    age: 109,
  },
  {
    name: "Nahar",
    age: 109,
  },
  {
    name: "Levi",
    age: 52,
  },

  {
    name: "Random",
    age: 2,
  },
];

//function filterbyPeoples wihtout generics
const filterByPeoples = (arr:[],property:any,value:any)=>{
    arr.filter((item)=>item[property]===value);
}

//fucntion filterbyPeoples wiht generics
const filterByPeoples1 = <T, U extends keyof T>(
  arr: T[],
  property: U,
  value: T[U]
): T[] => {
  return arr.filter((item) => item[property] === value);
};

const filteredPeopleByName = filterByPeoples1(users7, "name", "Nahar");
const filteredPeopleByAge = filterByPeoples1(users7, "age", 109);
console.log(filteredPeopleByAge);