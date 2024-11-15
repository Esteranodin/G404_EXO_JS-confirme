// console.log("");
// let variable1;
// let variable2;

// variable1 = 9;
// variable2 = 5;

// let stockage = variable1;
// variable1 = variable2;


// console.log(stockage, variable2);


// let h = 'h';
// let e = 'e';
// let l = 'l';
// let o = 'o';
// let w = 'w';
// let r = 'r';
// let d = 'd';


// console.log (h + '\n' + e + '\n' + l + '\n' + l + '\n' + o + '\n\n' + w + '\n' + o + '\n' + r + '\n' + l + '\n' + d);


// let age = 12;
// let majeur = 18;

// if (age >= majeur) {
//     console.log("majeur ok");
// } else {
//     console.log("badaboum");
// }

// for (let nombre = 15; nombre >= 0; nombre = nombre -2) {
//     console.log(nombre);
// }

// chercher dans un tableau

// const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

// let letterToFind = 'A'
// for (let i = 0; i < 26; i = i + 1) {
//     if (alphabet[i] === letterToFind) {
// console.log (i);
//     }
// }

// correction

// const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// let letter = "D";

// for(let index = 0; index < 26; index = index + 1){

//   if(alphabet[index] === letter){
//     console.log("J'ai trouvé la lettre " + letter + ", c'est la " + (index+1) + " ème lettre de l'alphabet"); 
//     break;
//   }
  
// }

//meme exo en fonction

// function findLetterPositionInAlphabet(letter){
//     const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
//     for(let index = 0; index < 26; index = index + 1){
  
//       if(alphabet[index] === letter){
//         return "J'ai trouvé la lettre " + letter + ", c'est la " + (index+1) + " ème lettre de l'alphabet"; 
//       }
//     }
//   }
  
  
//   console.log(findLetterPositionInAlphabet("D"));
//   console.log(findLetterPositionInAlphabet("S"));
//   console.log(findLetterPositionInAlphabet("Y"));

//ex fonction

function mama(a, b) {

    if (a === b) {
        console.log('oui c\'est un carré !')
    }
    return a * b;
 
}

let res = mama(5, 5);

console.log(res);



