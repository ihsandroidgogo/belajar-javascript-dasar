// Contoh Dasar

const buah = ['apel', 'jeruk', 'mangga'];

console.log(buah[0]);          // "apel"
console.log(buah.at(-1));      // "mangga" (index negatif, cara modern)
console.log(buah.length);      // 3

// Array dari rentang angka
const satuSampaiLima = Array.from({ length: 5 }, (_, i) => i + 1); // [1, 2, 3, 4, 5]

console.log(satuSampaiLima)

// Destructuring Array 
const [pertama, kedua, ...sisanya] = [10, 20, 30, 40];
console.log(pertama, kedua, sisanya); // 10 20 [30, 40]

// Tukar nilai
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x)