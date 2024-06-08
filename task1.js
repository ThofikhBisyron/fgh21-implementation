function cekPalindrom(kata) {
    let split = kata.split('')
    let reverse = split.reverse('')
    let join = reverse.join("")

    if (join === kata){
        return ('palindrom')
    }
    if(join != kata)
        return ('bukan palindrom')
    
}
console.log(cekPalindrom('malam'))