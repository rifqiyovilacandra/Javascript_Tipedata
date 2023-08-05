// 1. Undefined
let Y;
console.log(typeof(Y));
//2. Numbers
let J = 56;
console.log(typeof(J));
//3. Numbers + Operator
let A, B;
A = 28;
B = 4;
console.log(A - B);//Pengurangn
console.log(A * B);//Perkalian
console.log(A + B);//Penambahan
console.log(A / B);//Pembagian
console.log(A % B);//Sisa hasil bagi
console.log(B ** 2);//Pangkat
//4. Operator + increment & decrement
let i = 5;
console.log(i++);
console.log(i++);
let j = 4;
console.log(++j);
console.log(++j);
//5. Bigint
const bigNumber = 1234567890123456789012345678901234567890n;
const myInt     = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);
//6. String
const answer = '"I think it\'s awesome!" he answered confidently';
console.log(answer);
console.log("Windows path: C:\\Program Files\\MyProject");
// 7. String Template
let myName = "rifqi";
console.log(`Halo nama saya ${myName}`)
// 8. Boolean + comparasion 
// < | > | ==
//True or false 
const indexA = 5;
const indexB = 8;
let hitungSatu = indexA < indexB;
let hitungDua = indexA > indexB;
console.log(hitungSatu);
console.log(hitungDua);

//9. Null

const isiData = null;
console.log(isiData);

//10. Symbol

// const symbol_First = Symbol("ya!")
// console.log(symbol_First);

//11. Symbol + boolean

const symbol_One = Symbol("oke");
const symbol_Two = Symbol("oks");

console.log(symbol_One == symbol_Two);

