// 1. For loop
// Pertama, variabel i sebagai index iterasi. Pada variabel ini kita menginisialisasi nilai awal dari perulangan.
// Kedua, operasi perbandingan. Pada bagian ini, JavaScript akan melakukan pengecekan kondisi apakah perulangan masih perlu dilakukan. Jika bernilai true, maka kode di dalam blok for akan dijalankan.
// Ketiga, increment/decrement. Di sini kita melakukan penambahan atau pengurangan variabel iterasi. Jadi, pada contoh di atas variabel i akan ditambah dengan 1 di setiap akhir perulangan. Perubahan nilai ini penting karena jika kita mengubah nilainya, proses perulangan dapat terus berjalan selama kondisinya terpenuhi.

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

let i;

for ( i = 0; i <= 10; i++) {
    console.log(i);
    
}

let j ;

for ( j = 5 ; j <= 10; j++) {
    console.log(j);
    
}

// 2. for of loop

let arrayBuah = ["mangga", "jeruk", "jambu", "Duren"];
let arrayMinuman = ["Kopi", "teh", "Susu", "jus"];

for (const arraysaya of arrayMinuman) {
    console.log(arraysaya);
}

// for (const arraysaya of arrayBuah) {
//     console.log(arraysaya);
// }

// // 3. While


// let x = 1;

while (x <= 5) {
    console.log(x);
    x++;
}


// // // 4. Do while

let H = 1;

do {
    console.log(H);
    H++;
} while (H < 10);


// 5. Contoh program

for(let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

