// 1. Switch Else

let negara = "indonesia";
let Sapa = null;

switch (negara) {

    case "French": 
    Sapa = "bonjour";
    break;
         
        case "indonesia":
         Sapa = "Selamat pagi";
        break;


        case "English":
            Sapa = "Good morning";
        break;

    default:
        Sapa = "Tidak diketahui";
        break;
}

console.log(Sapa);

let nilai = 80;

switch (nilai) {
    case 90:
        console.log("bagus");
        break;

        case 80:
            console.log("cukup");
            break;

    default:
        console.log("remed");
        break;
}
