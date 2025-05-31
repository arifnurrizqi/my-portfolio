# 🚀 Arif Nur Rizqi - Personal Portfolio Website

Situs web ini merupakan template **portofolio pribadi** yang dibuat dengan **HTML + Tailwind CSS**, cocok untuk kamu yang ingin menunjukkan profil, pengalaman, proyek, dan keterampilan secara profesional.

## ✨ Fitur

* Responsive dan ringan (mobile-friendly)
* Navigasi smooth scroll
* Formulir kontak terhubung ke Netlify
* Struktur modular: About, Certificate, Experience, Skills, Projects, Contact
* Tombol download CV dan tautan sosial media

---

## 👶 Untuk Pemula (Tanpa Koding)

### 1. Unduh Zip Project

1. Klik tombol **Download ZIP** dari GitHub (atau link yang disediakan)
2. Ekstrak isi file ZIP ke dalam folder di komputer kamu

### 2. Buka di Teks Editor

Gunakan aplikasi teks editor seperti:

* [Visual Studio Code](https://code.visualstudio.com/) (**disarankan**)
* Sublime Text
* Notepad++

Buka file `index.html` lalu lakukan pengeditan:

### 3. Edit Konten Website

* **Nama dan profesi** (sekitar baris 55):

  ```html
  <h1 class="text-4xl md:text-5xl font-bold mb-4">Arif Nur Rizqi</h1>
  <h2 class="text-2xl md:text-3xl font-semibold mb-6">
    Electrical Engineer | Weak Current Systems & Control
  </h2>
  ```

* **Ganti foto profil** di folder `img/`, ubah di baris:

  ```html
  <img src="./img/me rev-compress.jpg" alt="" />
  ```

* **Tambahkan sertifikat atau pengalaman** di bagian `<section>` terkait

### 4. Download CV Otomatis

Pastikan tombol memiliki atribut `download`:

```html
<a href="./CV ATS_Arif Nur Rizqi_FG.pdf" download>Download CV</a>
```

### 5. Sembunyikan Bagian (Opsional)

Gunakan komentar HTML untuk menyembunyikan:

```html
<!--
<section id="projects">
  ...
</section>
-->
```

> 💡 Cocok untuk fresh graduate, mahasiswa, freelancer yang ingin tampil profesional secara online tanpa perlu coding rumit.

---

## 🧠 Untuk Pengguna Lanjutan (Dengan NodeJS & Tailwind CLI)

Jika kamu ingin melakukan **customisasi lebih dalam** (seperti mengganti warna Tailwind, membuat komponen Tailwind baru, atau fitur interaktif lain), kamu bisa gunakan CLI.

### Langkah-langkah:

```bash
# Install dependency
npm install

# Jalankan Tailwind CLI Watch Mode
npm run tail-dev
```

> `tail-dev` akan meng-*compile* Tailwind ke dalam `output.css` setiap kali kamu menyimpan file.

Setelah dijalankan, kamu bisa:

* Ubah tema, warna, font di `tailwind.config.js`
* Tambah class Tailwind di HTML atau CSS
* Tulis aturan CSS sendiri di `input.css`

---

## 📂 Struktur Folder

```
.
├── public
|   └──index.html
|   └── output.css
|   └── CV ATS_Arif Nur Rizqi_FG.pdf
|   └──/certificate
|   |  └──[file sertifikat dan paklaring]
|   └── /img
|      └── me rev-compress.jpg
|      └── favicon.png
├── src
|   └── input.css
├── tailwind.config.js
├── package.json

```

---

## ☁️ Hosting Gratis di Netlify (Langkah Mudah)

1. Buka [https://app.netlify.com/](https://app.netlify.com/)
2. Klik **"Add new site" → "Import an existing project"**
3. Pilih opsi **"Deploy manually"**
4. Drag & drop semua file ke halaman Netlify
5. Selesai! Web portofolio kamu akan langsung online 🎉

> Netlify secara otomatis membaca file `index.html` di root folder.

---

## 📩 Form Kontak Aktif

Formulir sudah terhubung dengan Netlify, tinggal pakai. Kamu bisa melihat pesan dari pengunjung di dashboard Netlify (Form submissions).

```html
<form name="contact" method="POST" data-netlify="true">
```

---

## ✅ Teknologi yang Digunakan

* HTML5
* Tailwind CSS (via CDN atau CLI)
* Font Awesome
* Netlify Forms

---

## 📬 Kontak

Untuk bantuan atau pertanyaan, hubungi:

* Email: [arifnurrizqi@gmail.com](mailto:arifnurrizqi@gmail.com)
* LinkedIn: [linkedin.com/in/arifnurrizqi](https://www.linkedin.com/in/arifnurrizqi)

---

## 📄 Lisensi

Proyek ini bebas digunakan untuk keperluan personal dan edukasi. Cantumkan kredit ke pembuat jika dipublikasi.
