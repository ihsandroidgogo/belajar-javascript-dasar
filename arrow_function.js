// Contoh Simple

const kuadratKonsisten = (n) => n * n;
console.log(kuadratKonsisten(9,6))

// Contoh Dasar

const hitungDiskon = (harga, persen) => {
  const potongan = harga * (persen / 100);
  return harga - potongan;
};

const diskon = hitungDiskon(10000, 10)

console.log(diskon)

// Method Array (pemakaian yang umum)

const produk = [
  { id: 1, nama: 'Kopi', harga: 25000, stok: 10 },
  { id: 2, nama: 'Teh', harga: 18000, stok: 0 },
  { id: 3, nama: 'Roti', harga: 15000, stok: 5 },
];

const namaProduk = produk.map((p) => p.nama)

console.log(namaProduk[0])