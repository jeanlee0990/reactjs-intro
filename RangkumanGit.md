Rangkuman Materi Git

1. Konfigurasi Awal Git
   - Perintah:
     bash
     git config --global user.name "jeanlee0990"
     git config --global user.email "jeanlee0990@gmail.com"
     ```
   - Penjelasan: Perintah ini mengatur konfigurasi global untuk username dan email, yang akan digunakan di setiap commit untuk mengidentifikasi pembuat commit.

2. Membuat Repositori Lokal
   - Perintah:
     bash
     git init
    
   - Penjelasan: Inisialisasi repositori Git lokal di folder yang sedang dibuka. Perintah ini membuat direktori `.git` untuk menyimpan semua informasi tentang repositori Git.

3. Mengecek Status Repositori
   - Perintah:
     bash
     git status
     ```
   - Penjelasan: Perintah ini menampilkan status repositori, seperti perubahan yang belum ditambahkan ke staging area, branch aktif, dan file yang sedang dilacak oleh Git.

4. Menambahkan File ke Staging Area
   - Perintah:
     bash
     git add <nama-file>
     ```
   - Contoh:
     bash
     git add README.md
     ```
   - Penjelasan: Memindahkan file tertentu ke staging area. File yang berada di staging area siap untuk di-commit.

   - Catatan Khusus: Jika muncul peringatan seperti `LF will be replaced by CRLF`, ini terkait dengan perbedaan format newline antara sistem operasi. Git akan menangani perubahan ini secara otomatis untuk kompatibilitas lintas platform.

5. Membuat Commit
   - Perintah:
     bash
     git commit -m "Pesan commit"
     
   - Contoh:
     bash
     git commit -m "Initial commit"
     ```
   - Penjelasan: Menyimpan snapshot dari perubahan yang ada di staging area dengan pesan deskriptif untuk memudahkan identifikasi perubahan.

6. Melihat Riwayat Commit
   Perintah:
    bash
    git log
     ```
   - Penjelasan: Menampilkan riwayat commit yang ada di repositori, lengkap dengan informasi seperti ID commit, penulis, tanggal, dan pesan commit.

7. Membuat Branch Baru
   -Perintah:
    bash
    git branch <nama-branch-baru>
     ```
   - Contoh:
     bash
     git branch materi-branch
     ```
   - Penjelasan: Membuat branch baru dari branch yang sedang aktif. Branch memungkinkan bekerja pada versi kode terpisah tanpa mengganggu branch utama.

8. Berpindah ke Branch Lain
   -Perintah:
     ```bash
     git checkout <nama-branch>
     ```
   - Contoh:
     ```bash
     git checkout materi-branch
     ```
   - Penjelasan: Berpindah ke branch lain di repositori. Jika branch belum ada, akan muncul error. Pastikan branch sudah dibuat sebelum menggunakan perintah ini.

9. Menggabungkan Branch dengan Branch Lain (Merge)
   - Perintah:
     bash
     git merge <nama-branch>
     ```
   - Contoh:
     bash
     git merge materi-branch
     ```
   - Penjelasan: Menggabungkan perubahan dari branch tertentu ke branch aktif saat ini. Jika branch yang ingin digabungkan sudah diperbarui, hasilnya akan menyatakan "Already up to date.

10. Menambahkan Semua File ke Staging Sekaligus
   - Perintah:
     bash
     git add .
     ```
   - Penjelasan: Menambahkan semua perubahan di direktori kerja ke staging area, termasuk file baru atau yang telah diubah. Ideal untuk commit besar yang melibatkan banyak file.

