// 1. Object

// const user = {
//     nama   : "Budiman",
//     alamat : "Jakarta",
//     usia   :  20,
//     nid    : "ab009",
// };

// console.log(user);

// console.log(`Halo nama saya ${user.nama} tinggal di ${user.alamat}, Saya berusia ${user.usia} dengan nid ${user.nid} `);

// 2. Object + bracket notation

// kita bisa mengakses object dengan bracket. object["object"]

// const user = {
//     nama   : "Budiman",
//     alamat : "Jakarta",
//     usia   :  20,
//     nid    : "ab009",
// };

// //                             bracket                      bracket                         bracket                   bracket
// console.log(`Halo nama saya ${user["nama"]} tinggal di ${user["alamat"]}, Saya berusia ${user["usia"]} dengan nid ${user["nid"]} `);

// 3. Mengubah Object dengan assigment(=)

// const user = {
//     nama   : "Budiman",
//     alamat : "Jakarta",
//     usia   :  20,
//     nid    : "ab009",
// };

// // jika elemen-nya tidak ada, MAKA bisa menambah ketika kita sedang mengubah.

// user.nama = "Ilham";
// user["alamat"] = "Bogor";
// user.gelombang = "A";

// console.log(user)

// 4. Object delete

// const user = {
//     nama   : "Budiman",
//     alamat : "Jakarta",
//     usia   :  20,
//     nid    : "ab009",
// };

// delete user.nid;

// console.log(user)