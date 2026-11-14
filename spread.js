// menyalin array

const asli = [1,2,3]
const salinan = [...asli]

salinan.push(4)
console.log(asli)
console.log(salinan)

// mengabbungkan array

const buah = ["Apel", "Jeruk", "Mangga"]
const sayur = ["Bayam","Wortel"]

const belanjaan = [...buah,...sayur]

console.log(belanjaan)

// Contoh pada object

const user = { nama: 'Budi', umur: 25, kota: 'Tangerang' };

const userBaru = { ...user, umur: 26 };
console.log(userBaru)

const dataDasar = { nama: 'Budi' };
const dataKontak = { email: 'budi@mail.com' };

const lengkap = { ...dataDasar, ...dataKontak };
console.log(lengkap)