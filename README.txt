# Java Maroon 3D — Wedding Invitation

Template undangan digital statis berbasis HTML, CSS, dan JavaScript. Siap untuk dicoba secara lokal atau di-deploy ke Vercel.

## Cara menjalankan
1. Ekstrak ZIP.
2. Buka `index.html` di browser, atau jalankan server lokal.
3. Untuk Vercel: upload folder ini ke GitHub, lalu import repository di Vercel. Framework preset: Other. Build command: kosongkan. Output directory: `.`.

## Bagian yang perlu diganti
- Nama pasangan: cari `Ani` dan `Rama` di `index.html`.
- Tanggal acara: ubah tanggal di `index.html` dan `script.js`.
- Nama orang tua, alamat, lokasi Google Maps, rekening: ubah di `index.html`.
- Foto: ganti URL gambar Unsplash di `index.html` dengan foto sendiri.
- Musik: letakkan file audio milik Anda sebagai `assets/music.mp3`.
- Countdown calendar link: sesuaikan tanggal pada tautan Google Calendar.

## Catatan penting
- RSVP pada versi ini adalah DEMO: data disimpan di localStorage browser yang digunakan. Data tidak terkirim ke pemilik undangan dan tidak tersinkron ke perangkat lain.
- Untuk RSVP online sungguhan, hubungkan form ke Supabase atau backend/API dan aktifkan validasi server-side serta kebijakan keamanan.
- Font dan foto contoh memerlukan koneksi internet. Ganti dengan aset berlisensi/yang Anda miliki untuk penggunaan produksi.
- Data undangan telah diisi untuk Ani & Rama: Minggu, 22 November 2026. Akad 09.00 WIB dan resepsi 10.00 WIB.

Alamat pengiriman kado belum dicantumkan, sehingga tidak ditampilkan. Barcode/QR pembayaran tidak disertakan karena belum ada file QR resmi yang diberikan.

MUSIK PENGIRING: Safira Inema - Ketaton Cerita, diputar melalui YouTube IFrame Player. Pengunjung dapat memutar/jeda dengan tombol musik atau pemutar video di bagian footer. Koneksi internet diperlukan; autoplay dapat dibatasi oleh browser, sehingga pengunjung mungkin perlu menekan tombol putar.
