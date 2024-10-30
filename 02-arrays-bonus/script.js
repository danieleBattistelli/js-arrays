const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
console.log("------------------")
console.log("Esercizio 1")
console.log(teachers);
const reversedTeachers = teachers.reverse();
console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
console.log("------------------")
console.log("Esercizio 2")
const longNames = teachers.filter
(function(teachers){return teachers.length >= 5});
console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
console.log("------------------")
console.log("Esercizio 3")
console.log(teachers);
const arrayMenoEd = teachers.filter
(function(teachers){return teachers !== "Ed"})
console.log(arrayMenoEd);
