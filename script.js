// EXO 1
// const star = "*";
// let pyramide = "";

// for (let i = 0; i < 6; i += 1) {
//     pyramide += star
//     console.log(pyramide  + '\n');
// }

// EXO 1 opti/refacto
// let star = '*';

// for (let i = 0; i < 6; i += 1) {
//     console.log(star + '\n');
//      star += star[i];     
// }

// EXO 2
// const supersHeros = ["Jessica Jones", "DrStrange", "Batman", "Daredevil"];
// supersHeros.forEach(
//     (superHero) => {
//         console.log("Je suis fan de " + superHero)
//     }
// );

// EXO 3
// let a = 10;
// while (a >= 0) {
//      console.log(a);
//      a -= 1;    
// }
// console.log("Décollage !");

// EXO 4
// const friendsList = ["Olivier", "Laouïg", "Stéphane"];
// let a = 0;
// for (let i = 0; i < friendsList.length; i += 1) {
//      while (a <= i) {
//           a += 1;
//           console.log(friendsList[i]);
//      }
//      a = 0;
// };

// EXO 5.1
// let aNumber = Number(prompt('Tapez un nombre entre 1 et 3'));
// while (aNumber > 3 || aNumber < 1) {
//    aNumber = Number(prompt('Tapez un nombre entre 1 et 3'));
// };

// EXO 5.2
// let aNumber = Number(prompt('Tapez un nombre compris entre 10 et 20'));
// while (aNumber > 20 || aNumber < 10) {
//     if (aNumber > 20) {
//         window.alert('Plus petit !')
//     }
//     else if (aNumber < 10) {
//         window.alert('Plus grand !')
//     }
//     aNumber = Number(prompt('Tapez un nombre compris entre 10 et 20'));
// };

// EXO 5.3
// let aNumber = Number(prompt('Tapez un nombre'));
// let suiteNombres = "";
// let a = 0;

// while (a < 10){
//     aNumber = aNumber + 1;
//     suiteNombres += aNumber + " ";
//     a += 1;
// };
// window.alert(suiteNombres);

// EXO 5.4
// let aNumber = Number(prompt('Tapez un nombre'));
// let suiteNombres = "";
// for (let i = 0; i < 10; i += 1){
//     aNumber = aNumber + 1;
//     suiteNombres += aNumber + " ";
// };
// window.alert(suiteNombres);

// EXO 5.5
// const aNumber = Number(prompt('Tapez un nombre'));
// let multiplication = "";
// let multiTabl = "";
// for (let i = 1; i<= 10; i +=1){
//     multiplication = aNumber * i;
//     multiTabl += aNumber + " x " + i + " = " + multiplication + '\n' ;
// };
// window.alert(multiTabl);

// EXO 5.6 
// const aNumber = Number(prompt('Tapez un nombre'));
// function add (a){
//     let sum = 0 ;
//     for (let i = 0; i <= a; i += 1){
//         sum += i;
//     };
//     return sum;
// };

// window.alert(add(aNumber));