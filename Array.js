// 1. Array

let Arrayku = ["rifqi","Bekasi",20,"INDONESIA"];

console.log(Arrayku);
console.log(Arrayku.length);   // 4
console.log(Arrayku[0]);
console.log(Arrayku[1]);
console.log(Arrayku[3]);

// 2. Array + push
// Untuk menambah item array diakhir

let usera = ["rifqi","striker",20];
usera.push("bekasi");
console.log(usera);

// output: rifqi,striker,20,bekasi.

// 3. Array + pop
//  Pop digunakan untuk menghapus item akhir array.

let userb = ["rifqi","striker",20,"bekasi"];
userb.pop();
console.log(userb);
// output: rifqi,striker,20
//  Item bekasi dihapus

// 4. Array + shift&Unshift
//  shift digunakan untuk menghapus data awal pada array.
//  unshift untuk menambah item di awal array.

let userc = ["rifqi","striker",20,"bekasi"];

userc.shift();
userc.unshift("mahasiswa");
console.log(userc);
// Bekasi dihapus jadi tempat mahasiswa
// output: mahasiswa , striker, 20,bekasi.

// 5. Array + delete +splice

let user_a = ["rifqi","striker",20,"bekasi"];
delete user_a[1];
console.log(user_a);

//  dengan delete yang ke hapus adaalah data di index nya : <1 empty item>
//  Untuk menghapus elemen gunakan splice.

let user_b = ["rifqi","striker",20,"bekasi"];
user_b.splice(1,2);  // Menghapus dari index 1 sebanyak 2 elemen
console.log(user_b);
// output : rifqi, bekasi.


// 6. Array + Splice update

let nameStudent = ["jono","ilham","samsul","dwi"];
//  2 = mulai index ditambahkan  . 0=tidak ada yang dihapus.
nameStudent.splice(2, 0, "Waluyo","bambang");
console.log(nameStudent);
// output :jono,ilham, waluyo, bambang, samsul ,dwi


// 7. array +slice

let data = ["udin","gharna","sabil","lala"];

let dataNew =data.slice(1,3);
console.log(dataNew);

dataNew[1] = "garaga";

console.log(dataNew);
console.log(data);