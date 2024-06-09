// function reverseWords(kata) {
//     let split = kata.split(' ')
//     let reverse = split.reverse('')
//     let join = reverse.join(" ")
//     return join
   
// }
// console.log(reverseWords('apakah sudah malam'))

function reverseWords(kata){
    let panjangkata = kata.length
    let hasil = ''
    let akhirkata = panjangkata


        for ( let i = panjangkata - 1; i >= 0; i-- ){
            if (kata[i] === ' ' || i === 0){
                let awalkata
                if (i === 0){
                     awalkata = i
                }else{
                    awalkata = i + 1
                }
                
            for ( let j = awalkata; j < akhirkata; j++){
                hasil = hasil + kata[j]
            }
            if (i > 0){
                hasil = hasil + ' '  
            }
            akhirkata = i
            }
            
        }
        return hasil
    }
       


console.log(reverseWords('Aku Adalah Saya'))

