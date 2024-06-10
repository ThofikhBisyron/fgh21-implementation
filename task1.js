function cekPalindrom(kata){
    let panjangkata = kata.length
    let hasil = ''
        for ( let i = panjangkata - 1; i >= 0; i-- ){
            hasil = hasil + kata[i]
        }
        if (kata === hasil){
            console.log('palindrom')
        }

}
cekPalindrom('malam')
// function cekPalindrom(kata) {
//     let split = kata.split('')
//     let reverse = split.reverse('')
//     let join = reverse.join("")

//     if (join === kata){
//         return ('palindrom')
//     }
//     if(join != kata)
//         return ('bukan palindrom')
    
// }
// console.log(cekPalindrom('kodok'))
