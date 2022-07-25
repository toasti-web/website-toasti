Pedoman Kontributor
======================
1. Pastikan bahwa setiap nama file berhubungan dengan isi file tersebut, tanpa tambahan yang tidak diperlukan.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contoh: 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅ navbar.js 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❌ navbar-semoga-final-amin.js

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❌ askdjasdhajsdhaskdad.js

2. Push setiap perubahan ke branch fitur yang relevan. Jika kamu baru mulai mengerjakan suatu fitur sehingga belum ada branch untuk fitur tersebut, kamu dapat membuatnya dengan cara menjalankan `git checkout -b <nama-branch-baru>` diikuti dengan proses add & commit seperti biasa, kemudian jalankan `git push origin <nama-branch-baru>` pada terminal lokalmu.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contoh (jika kamu mengerjakan fitur artikel): 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅ `git push origin feature-article`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❌ `git push origin article-and-homepage`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❌ `git push origin main`

3. Jalankan `git pull origin staging` **setiap kamu mulai mengerjakan sesuatu**, kecuali kamu diminta secara eksplisit untuk tidak melakukannya. Jika kamu membuat pull request dengan perubahan yang tidak didasarkan pada commit terakhir di branch staging, pull request tersebut tidak akan diterima.

4. **JANGAN** melakukan push langsung ke branch staging/main. Perubahan yang di-push langsung ke kedua branch tersebut akan dihapus.

5. Jika menurutmu perubahan yang kamu buat sudah siap untuk diuji, silakan buat pull request dari branch fiturmu ke branch staging. Perubahan tersebut akan di-review, diterima, dan di-merge jika sudah siap. Jika perubahan yang kamu buat dianggap belum siap untuk di-merge, kamu akan dikabari dengan feedback yang sesuai dari reviewer.

6. Buatlah commit yang seminimal mungkin. Jangan memasukkan banyak perubahan yang tidak berhubungan dengan satu sama lain ke dalam 1 commit. Akan lebih baik jika setiap perubahan tersebut disimpan dalam commit yang berbeda.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contoh sebuah commit:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Baik: Membuat search bar di halaman artikel

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bisa diterima: Membuat halaman artikel

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Buruk: Membuat halaman artikel & halaman hasil pencarian artikel

7. Buatlah commit message yang singkat dan jelas. Kamu bisa menggunakan bahasa Indonesia/Inggris.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contoh commit message:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅ Membuat search bar di halaman artikel

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❌ Membuat search bar di halaman artikel semoga final gaada bug

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❌ AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

8. Masukkan nama-nama file yang tidak penting untuk web app ini (seperti file-file spesifik IDE) di `.gitignore`.

9. Buatlah kode yang sebersih mungkin. Lihat [halaman ini](https://refactoring.guru/refactoring/what-is-refactoring "Clean code") untuk lebih banyak informasi mengenai kode yang bersih.

10. Hapus semua `console.log()` dan kode-kode debugger lain sebelum kamu mengumpulkan kode melalui pull request untuk di-review. Pastikan bahwa kamu hanya mengumpulkan kode yang berhubungan dengan fungsionalitas yang kamu kerjakan.

11. Jaga jumlah package yang ter-install seminimal mungkin. Jangan meng-install package yang tidak diperlukan. Jika di masa lalu kamu meng-install suatu package yang sudah tidak dibutuhkan di saat ini, uninstall package tersebut.

12. Jika ada pertanyaan, langsung tanyakan saja. Kamu sudah tahu bisa bertanya di mana.



Contributor Guidelines
======================
1. Make sure that every file name is relevant to the contents of the file, with no unnecessary additions.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Example: 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅ navbar.js 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❌ navbar-pls-be-final.js

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❌ askdjasdhajsdhaskdad.js

2. Only push changes to relevant feature branches. If you've just started working on the feature and the feature branch does not exist yet, you can create one by running `git checkout -b <new-branch-name>` followed by the usual add, commit, and `git push origin <new-branch-name>` on your local terminal.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Example (if you are working on the article feature): 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅ `git push origin feature-article`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❌ `git push origin article-and-homepage`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❌ `git push origin main`

3. Run `git pull origin staging` **everytime you start working**, unless you are told explicitly not to do it. If you create a pull request with changes that are not based on the latest commit on the staging branch, the pull request will not be merged.

4. **NEVER** push directly to the staging/main branch. Changes pushed to those branches directly will be reverted.

5. If you think that the changes you've made are ready to be tested, create a pull request from your feature branch to the staging branch. Your changes will then be reviewed & merged if it's ready to merge. If it's considered not ready to be merged, you will be notified & given feedbacks from the reviewer.

6. Keep each commits as minimal as possible. Do not commit multiple irrelevant changes at once. Instead, commit them separately.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Example of a single commit:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Good: Create search bar in article page

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acceptable: Create article page

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bad: Create article page and article search result page

7. Keep each commit message as clear and concise as possible. You can use Indonesian/English.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Example of a commit message:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅ Create search bar in article page

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❌ Create search bar in article page pls be final no more bugsss

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❌ AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

8. List all names of the files that are unnecessary for the web app (like IDE-specific files) in the `.gitignore`.

9. Keep your code as clean as possible. Refer [here](https://refactoring.guru/refactoring/what-is-refactoring "Clean code") to get more information on what makes your code "clean".

10. Remove all `console.log()` and other debugger codes before you submit your code for review through a pull request. Make sure that all the codes you submit are related to the functionality that you're working on.

11. Keep the number of installed packages minimal. Do not install a package if you don't need it. If you've installed a package in the past but you no longer need it, uninstall it.

12. If you have any questions, feel free to reach out to me. You know where to find me.
