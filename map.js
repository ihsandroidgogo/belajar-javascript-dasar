// Contoh 1

const stok = new Map();

stok.set('kopi', 10);
stok.set('teh', 0);
stok.set('roti', 5);

console.log(stok.get('kopi'));   // 10
console.log(stok.get('susu'));   // undefined
console.log(stok.has('teh'));    // true
console.log(stok.size);          // 3 (pakai .size, bukan .length)

stok.delete('teh');
stok.clear(); // hapus semua

// Contoh 2

const pesanan = ['kopi', 'teh', 'kopi', 'roti', 'kopi', 'teh'];

const hitung = new Map();
for (const item of pesanan) {
  hitung.set(item, (hitung.get(item) ?? 0) + 1);
}

console.log(hitung); // Map { 'kopi' => 3, 'teh' => 2, 'roti' => 1 }