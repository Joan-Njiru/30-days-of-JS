//Print the odd numbers less than 100
// for(i=0;i<100;i++){
//     if(i%2!==0){
//         console.log(i);
//     }
// }
let i=0
while(i<100){
    if(i%2!==0){
console.log(i);
    }
    i++
}

//Given a string reverse each word in the sentence
let welcome="welcome to Javascript class"
let reversed = welcome.split(' ').map(w =>w.split('').reverse().join('')).join(',')
 console.log(reversed);

 //write a js 
let words="The quick brown fox"
let titlecase=words.split(' ').map(w=>w[0].toUpperCase()+w.substring(1).toLowerCase()).join(' ')
console.log(titlecase);

//