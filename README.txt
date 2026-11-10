# Java Maroon 3D — Wedding Invitation

Template undangan digital statis berbasis HTML, CSS, dan JavaScript. Siap untuk dicoba secara lokal atau di-deploy ke Vercel.

## Cara menjalankan
1. Ekstrak ZIP.
2. Buka `index.html` di browser, atau jalankan server lokal.
3. Untuk Vercel: upload folder ini ke GitHub, lalu import repository di Vercel. Framework preset: Other. Build command: kosongkan. Output directory: `.`.

## Bagian yang perlu diganti
- Nama pasangan: cari `Arjuna` dan `Sekar` di `index.html`.
- Tanggal acara: ubah tanggal di `index.html` dan `script.js`.
- Nama orang tua, alamat, lokasi Google Maps, rekening: ubah di `index.html`.
- Foto: ganti URL gambar Unsplash di `index.html` dengan foto sendiri.
- Musik: letakkan file audio milik Anda sebagai `assets/music.mp3`.
- Countdown calendar link: sesuaikan tanggal pada tautan Google Calendar.

## Catatan penting
- RSVP pada versi ini adalah DEMO: data disimpan di localStorage browser yang digunakan. Data tidak terkirim ke pemilik undangan dan tidak tersinkron ke perangkat lain.
- Untuk RSVP online sungguhan, hubungkan form ke Supabase atau backend/API dan aktifkan validasi server-side serta kebijakan keamanan.
- Font dan foto contoh memerlukan koneksi internet. Ganti dengan aset berlisensi/yang Anda miliki untuk penggunaan produksi.
- Tanggal contoh: 28 Desember 2026 pukul 12.00 WIB.
