const siswa = ['Anas', 'Bayu', 'Feby', 'Omar', 'Pradnya'];

console.log('Array Siswa Shortclass Webdev', siswa);

// Array methods
// 1. Push
siswa.push('Asraf');
console.log('Array Siswa Shortclass Webdev setelah push', siswa);

// 2. Length
console.log('Jumlah siswa di Shortclass Webdev', siswa.length);

// 3. Indexing
console.log('Siswa ke-3 di Shortclass Webdev', siswa[2]);
console.log('Siswa ke-6 di Shortclass Webdev', siswa[5]);

// 4. Update value index
siswa[0] = 'Anas Aprilian';
console.log('Array Siswa Shortclass Webdev setelah update index ke-0', siswa);

// 5. Delete
delete siswa[5];
console.log('Array Siswa Shortclass Webdev setelah delete index ke-5', siswa);
// siswa.pop();
// console.log('Array Siswa Shortclass Webdev setelah menggunakan pop', siswa);
siswa.push('Asraf baru');
console.log('Array Siswa Shortclass Webdev setelah menggunakan push', siswa);

siswa[2] = 'Feby baru';
console.log('Array Siswa Shortclass Webdev setelah update index ke-2', siswa);

// 6. Find
const cariSiswa = siswa.find((siswa) => siswa === 'Anas Aprilian');
console.log('Siswa yang dicari:', cariSiswa);

// 7. Filter
const cariSiswa2 = siswa.filter((siswa) => siswa.includes('a'));
console.log('Siswa yang namanya mengandung huruf a:', cariSiswa2);

const [bayu, anas] = siswa; // destructuring array
console.log('Siswa Anas:', anas);
console.log('Siswa Bayu:', bayu);

// 8. Map
const siswaMap = siswa.map((siswa) => siswa.toUpperCase());
console.log('Siswa dengan huruf kapital:', siswaMap);

// 9. memasukkan elemen baru di tengah array
console.log('Array Siswa Shortclass Webdev sebelum menggunakan splice', siswa);
siswa.splice(5, 0, 'Caca');
console.log('Array Siswa Shortclass Webdev setelah menggunakan splice', siswa);

siswa.splice(5, 1, 'Caca Baru');
console.log(
  'Array Siswa Shortclass Webdev setelah menggunakan splice dan delete count: 1',
  siswa
);

siswa.splice(5, 2, 'Caca Baru 2');
console.log(
  'Array Siswa Shortclass Webdev setelah menggunakan splice dan delete count: 2',
  siswa
);

siswa.splice(5, 3, 'Caca Baru 3');
console.log(
  'Array Siswa Shortclass Webdev setelah menggunakan splice dan delete count: 3',
  siswa
);

siswa.splice(6, 1, 'Empty Baru');
console.log(
  'Array Siswa Shortclass Webdev setelah menggunakan splice dan delete count: 1',
  siswa
);

// Array 2 Dimensi
const siswa2 = [
  [
    'Anas', // index 0
    'Budi', // index 1
    'Caca', // index 2
  ], // index 0
  ['Dodi', 'Euis', 'Fafa'], // index 1
  ['Gaga', 'Hani', 'Ika'], // index 2
];
console.log(siswa2[0][0]);

const provinsi = [
  {
    nama: 'Jawa Barat',
    ibukota: 'Bandung',
    jumlahPenduduk: 5000000,
  },
  {
    nama: 'Jawa Tengah',
    ibukota: 'Semarang',
    jumlahPenduduk: 6000000,
  },
  {
    nama: 'Jawa Timur',
    ibukota: 'Surabaya',
    jumlahPenduduk: 7000000,
  },
];

// ambil provinsi jawa timur doang
console.log('Provinsi jawa timur', provinsi[2]);

// ambil provinsi jawa timur dan nama nya doang
console.log('Provinsi jawa timur namanya doang', provinsi[2].nama);
// console.log('Provinsi jawa timur jawaban mas omar',provinsi[2][0])
// console.log('Provinsi jawa timur jawaban mas bayu',provinsi[2][0])
// console.log('Provinsi jawa timur jawaban mas pradnya',provinsi[2][nama])
// console.log('Provinsi jawa timur jawaban mas anas',provinsi[3][0])
console.log('-------------');
console.log('Object');
const mobilFerrari = {
  warna: 'merah',
  tahun: 2021,
  harga: 1000000000,
  spesifikasi: {
    mesin: 'V8',
    kapasitas: 4000,
  },
};

console.log('Warna mobil ferrari', mobilFerrari.warna);
console.log('Tahun mobil ferrari', mobilFerrari.tahun);
console.log('Warna mobil ferrari pake kurung siku', mobilFerrari['warna']);
console.log('Tahun mobil ferrari pake kurung siku', mobilFerrari['tahun']);
console.log('Mesion mobil ferrari', mobilFerrari.spesifikasi.mesin);
console.log(
  'Mesion mobil ferrari pake kurung siku',
  mobilFerrari['spesifikasi']['mesin']
);

// shorthand property
// case sensitive
const { warna, tahun, harga, spesifikasi } = mobilFerrari; // destructuring object
const { mesin, kapasitas } = spesifikasi;
console.log('Warna mobil ferrari pake shorthand property', warna);
console.log('spesifikasi mobil ferrari pake shorthand property', spesifikasi);
console.log('harga mobil ferrari pake shorthand property', harga);
console.log('tahun mobil ferrari pake shorthand property', tahun);
console.log('mesin mobil ferrari pake shorthand property', mesin);
console.log('kapasitas mobil ferrari pake shorthand property', kapasitas);
