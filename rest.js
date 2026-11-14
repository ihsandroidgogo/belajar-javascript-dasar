// contoh 1 

const jumlah = (...angka) => {
  return angka.reduce((total, n) => total + n, 0);
};

console.log(jumlah(1, 2));          // 3
console.log(jumlah(1, 2, 3, 4, 5)); // 15

// contoh 2

const sapa = (salam, ...namaOrang) => {
  return `${salam}, ${namaOrang.join(' & ')}!`;
};

console.log(sapa('Halo', 'Budi', 'Sari', 'Andi'));
// Halo, Budi & Sari & Andi!

// contoh 3
const [pertama, kedua, ...sisanya] = [10, 20, 30, 40, 50];

console.log(pertama); // 10
console.log(kedua);   // 20
console.log(sisanya); // [30, 40, 50]

// contoh 4
const user = {
  id: 1,
  nama: 'Budi',
  email: 'budi@mail.com',
  kota: 'Tangerang',
};

const { id, nama, ...detail } = user;

console.log(id);     // 1
console.log(nama);   // 'Budi'
console.log(detail); // { email: 'budi@mail.com', kota: 'Tangerang' }