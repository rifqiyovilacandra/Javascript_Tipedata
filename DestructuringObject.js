// 1. Destructing object

// Destrcting adalah sintaksis yang menegeluarkan nilai properti pada object dan nilai array ke sebuah satuan kecil.

const mahasiswa = {
    nama    : "udin",
    jurusan : "informatika",
    alamat  : "bogor",
    usia    : 20,
};

const {nama,alamat,jurusan,usia} = mahasiswa ; //destructur.

console.log(nama);
console.log(jurusan);
console.log(alamat);
console.log(usia);


// 2. Destructing Assignment


const pelanggan = {
    nama_pelanggan   : "rani",
    alamat_pelanggan : "bekasi",
    usia_pelanggan   : 20,
};

let nama_pelanggan = "dina";
let alamat_pelanggan = "bogor";

({nama_pelanggan,alamat_pelanggan,usia_pelanggan}=pelanggan);

console.log(nama_pelanggan,alamat_pelanggan,usia_pelanggan);
console.log(pelanggan);

// 3. Default destruction
// dimana kita bisa mengisi default jika nilai tidak ditemukan pada properti.


const login = {
    namaDepan: "John",
    namaBelakang: "Doe",
    age: 18
  }
   
   
  const { namaDepan, namaBelakang, isMale ="notfound" } = login;
   
  console.log(namaDepan)
  console.log(namaBelakang)
  console.log(isMale)
   




























