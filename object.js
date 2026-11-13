// Contoh Simple
const user = {
    nama : "Ihsan",
    umur : 31
}

console.log(user.nama)
console.log(`Halo ${user.nama} sekarang umur kamu ${user.umur}`)

// Contoh yang sering dipakai
const transaksi = [
  { id: 1, produk: 'Kopi', total: 50000, status: 'lunas' },
  { id: 2, produk: 'Teh', total: 36000, status: 'pending' },
  { id: 3, produk: 'Roti', total: 15000, status: 'lunas' },
];

// Filter
const lunas = transaksi.filter((t) => t.status === 'lunas');

// Total pendapatan
const pendapatan = lunas.reduce((sum, t) => sum + t.total, 0);

// Grouping berdasarkan status
const perStatus = transaksi.reduce((hasil, t) => {
  (hasil[t.status] ??= []).push(t);
  return hasil;
}, {});

// Cari berdasarkan id
const trx = transaksi.find((t) => t.id === 2);