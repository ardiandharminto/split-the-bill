---

# **Split Bill App**

Aplikasi **Split The Bill** adalah aplikasi sederhana berbasis web untuk membantu Anda membagi tagihan dengan teman secara adil. Aplikasi ini memungkinkan pengguna untuk menambahkan teman, menghitung pengeluaran masing-masing, dan menentukan siapa yang membayar tagihan.

## **Fitur**

- **Daftar Teman**: Menampilkan daftar teman yang telah ditambahkan.
- **Form Tambah Teman**: Menambahkan teman baru ke dalam daftar.
- **Form Split Bill**: Menghitung pembagian tagihan dengan input seperti total bill, pengeluaran pribadi, dan menentukan siapa yang membayar.
- **Antarmuka Interaktif**: Desain sederhana dan responsif untuk pengalaman pengguna yang nyaman.

---

## **Struktur Komponen**

1. **`FriendList`**

   - Menampilkan daftar teman.
   - Memiliki fitur untuk memilih teman untuk proses pembagian tagihan.

2. **`AddFriendForm`**

   - Formulir untuk menambahkan teman baru.
   - Input nama teman yang akan ditambahkan.

3. **`SplitBillForm`**
   - Formulir utama untuk membagi tagihan.
   - Fitur:
     - Input total tagihan.
     - Input pengeluaran pengguna.
     - Perhitungan otomatis pengeluaran teman.
     - Dropdown untuk memilih siapa yang membayar tagihan.

---

## **Teknologi yang Digunakan**

- **Frontend**: React.js
- **CSS**: Konvensi BEM untuk penamaan class CSS.
- **State Management**: Menggunakan state bawaan React (`useState`).

---

## **Cara Menggunakan**

1. **Clone Repository**

   ```bash
   git clone https://github.com/ardiandharminto/split-the-bill.git
   cd split-the-bill
   ```

2. **Install Dependencies**
   Pastikan Anda memiliki Node.js dan npm/yarn terinstal di sistem Anda. Kemudian jalankan:

   ```bash
   npm install
   ```

   atau

   ```bash
   yarn install
   ```

3. **Jalankan Aplikasi**
   Jalankan aplikasi di development server:

   ```bash
   npm start
   ```

   atau

   ```bash
   yarn start
   ```

   Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat aplikasi.

4. **Gunakan Aplikasi**
   - Tambahkan teman menggunakan form **Add Friend**.
   - Pilih teman dari daftar untuk memulai pembagian tagihan.
   - Masukkan detail tagihan di form **Split Bill**.
   - Klik **Split bill** untuk melihat hasil pembagian.

---

## **Struktur Direktori**

```plaintext
src/
├── components/
│   ├── FriendList.js       // Komponen untuk menampilkan daftar teman
│   ├── FriendItem.js       // Komponen untuk menampilkan informasi teman dan tagihan
│   ├── AddFriendForm.js    // Komponen untuk form tambah teman
│   └── SplitBillForm.js    // Komponen untuk form pembagian tagihan
├── App.js                  // Komponen utama
├── styles.css              // CSS global
└── index.js                // Entry point aplikasi
```

---

## **Tata Nama Class CSS (BEM)**

Aplikasi ini menggunakan konvensi **BEM (Block Element Modifier)** untuk penamaan class CSS. Contoh:

- **Block**: `split-bill-form` (Mewakili form pembagian tagihan).
- **Element**: `split-bill-form__field` (Field dalam form).
- **Modifier**: `split-bill-form__button--secondary` (Variasi tombol).

---

## **Pengembangan**

### **Menambahkan Fitur Baru**

1. Buat komponen baru di dalam folder `components/`.
2. Tambahkan styling di folder `styles/` dengan penamaan BEM.
3. Perbarui file `App.js` untuk memasukkan komponen baru.

---

## **Kontribusi**

Kontribusi selalu diterima! Silakan buat pull request atau buka issue di repository.

---

## **Lisensi**

Proyek ini menggunakan lisensi [MIT](LICENSE). Silakan gunakan dan modifikasi sesuai kebutuhan.
