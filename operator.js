//1. Assignment operator

let indexA = 5;
let indexB = 10;

// indexA += indexB;
// // Variabel di atas, Sama dengan ber-arti indexA Adalah hasil dari indexA + indexB
// console.log(indexA);

indexA += indexB;
console.log(indexA);
indexA -= indexB;
console.log(indexA);
indexA *= indexB;
console.log(indexA);
indexA /= indexB;
console.log(indexA);
indexA %= indexB;
console.log(indexA);

// 2. Comparison operator

const A = 5;
const B = 5;

let hitung = A == B;
let tidaksama = A != B;
console.log(hitung);
console.log(tidaksama);
// ---
const indexOne = 5;
const indexSec = '5';
let identik = indexOne === indexSec;
let identiktidaksama = indexOne !== indexSec;
console.log(identik);//False karena walaupun nilainya sama tapi type data nya berbeda
console.log(identiktidaksama);

const Y = 10;
const X = 5;
console.log(Y>X);
console.log(Y<X);

const Ya = 10;
const Xa = 10;
console.log(Ya >= Xa);
console.log(Ya <= Xa);

// 3. Logical Operator

console.log( 15 < 10 && 20 > 15  );
console.log( 15 < 10 || 20 > 15  );
console.log( !(15 < 10 || 20 > 15)  );

