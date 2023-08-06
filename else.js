// 1. If/else statement

const input = 5;

if (input >= 5) {
    console.log("Bagus");
} else {
    console.log("Nice try")
}

let Text = "Selamat pagi!";
let negara ="indonesia";


if ( Text === "Good mirning!"){
    negara = "English";
}
else if ( Text === "Selamat pagi!") {
    negara = "indonesia";
} 
else{
    negara = "italia";
}

console.log(negara);

const y =5;
let i =null ;
if (y < 10 || y > 5) {
    i = "index2";
} 

else if (y < 10 && y > 5) {
    i = "index1";
} 

else {
    i = "index0";
}

console.log(i);

//2. ternary operator atau conditional expressions

const isMember = true;
const discount = isMember ? 0.1 : 5;

let nama = "rifqi";

console.log(`Anda mendapatkan diskon sebesar ${discount * 500}%`)

let nilai = 35;
let index = null;
nilai >= 50 ? index = "Bagus" : index = "Cukup";

console.log(`Selamat! Kamu mendapatkan index ${index}`);


//3. Truth dan falsy

// Truth adalah kondisi perbandingan atau nilai yang menghasilkan true
// Falsy adalah kondisi perbandingan yang menghasilkan nilai false atau nilai yg kosong 
// contoh falsy:
// Number 0
// BigInt 0n
// String kosong seperti “” atau ‘’
// null
// undefined
// NaN, atau Not a Number

let a ;

if ( a ) {
    console.log("Bagus");
} else {
    console.log("cukup");
}

