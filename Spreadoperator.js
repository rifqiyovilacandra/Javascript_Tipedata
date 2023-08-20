// 1. Spread operator
// digunakan untuk melebur item pada array.
// Simbolya adalah = ...variabel (titik tiga)
const user = ["rifqi","bekasi","bina insani", 20 ];

console.log(...user);

// 2. spread + join array

const user_a = ["rifqi","mahasiswa"];
const user_b = ["bogor",20,"ciketing"];

console.log(...user_a,...user_b);

// 3.  spread + object

const mhs = {
    nama   : "udin",
    alamat : "bogor",
};

const matkul = {
    id : 0221,
    nama_matkul : "pkn",
};

const all = {...mhs,...matkul};

console.log(all);