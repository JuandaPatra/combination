# combination Task

# Pertanyaan :
  A combination lock has three dials, each dial has eight letters. It is known that the following combination have been used :
  one, who, two, bob, add, owl, fab, den, mia and tat
  
  Which one of the following words is not possible to use on this combination lock?
  A. win
  B. deb
  C. hat
  D. men
  E. bad
  
 # bedah pertanyaan
    
    - jumlah lock ada 3 dial,
    - setiap dial terdapat 8 huruf
    - Kombinasi yang sudah ada adalah :
      [one, who, two, bob, add, owl, fab, den, mia, tat]
      panjang array berjumlah 10
      
 # requirement 
    - Buatkan function kombinasi
    - Bebas menggunakan function yang tersedia di Javascript
    - Output yang dihasilkan berupa "Possible" atau "Not-Possible"
    - Optional menggunakan unit test (Untuk kasus kali ini saya tidak menggunakan unit test)
    
 # bedah cara menjawab
    
    - buat 3 variable kosong(penampung) untuk menyimpan huruf untuk setiap dial 
      const first = []
      const second = []
      const third = []
      
    - Pisahkan string menjadi array 
      example : "one" => ["o" , "n" , "e"]
    
    - Karena ada 3 dial sehingga pisahkan setiap string kedalam variable yang sudah kita siapkan
      example :
              first = ["o"]
              second = ["n"]
              third = ["e"]
              
    - Setelah proses diatas selesai kita filter ketiga array untuk memfilter apakah ada huruf yang sama di setiap array, 
      sehingga tidak ada huruf yang sama di sebuah array
      example :
              first = ["o" , "w" , "t" , "b" , "a" , "o" , "f" , "d" , "m" , "t" ]  => newFirst = ["o" , "w" , "t" , "b" , "a"  , "f", "d", "m" ]
      
      newFirst = []
      newSecond = []
      newThird = []
    
    - Proses selanjutnya adalah kita looping ketiga variable baru diatas yang sudah terisi dengan huruf hasil filter, sehingga mendapatkan kombinasi kata
      yang akan kita bandingkan/compare dengan input yang kita masukkan dalam parameter
      
    - apabila dalam looping kombinasi terdapat kombinasi kata yang sama dengan parameter yang kita kirim maka proses looping berakhir dan output akan berubah
      menjadi Possible,
      
    - sedangkan jika tidak ada kombinasi yang sama dengan parameter maka output yang keluar menjadi Not-Possible. 
    
    Done
    
