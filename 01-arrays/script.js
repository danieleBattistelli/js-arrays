const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 0. Per ogni insegnante stampa in console la frase:
// [Nome insengante] è l'insegnante in posizione [i]
console.log("------------------")
console.log("Esercizio 0")
for (let i = 0; i<teachers.length; i++){
  console.log(teachers[i], i);
}

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
  console.log("------------------")
  console.log("Esercizio 1")
  console.log(fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
  console.log("------------------")
  console.log("Esercizio 2")
  teachers[4]="Patrick"
  console.log(teachers[4])

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
console.log("------------------")
console.log("Esercizio 3")
const lastTeacher = teachers.pop();
console.log(lastTeacher);
console.log(teachers.length);

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
console.log("------------------")
console.log("Esercizio 4")
const firstTeacher = teachers.shift();
console.log(firstTeacher);
console.log(teachers.length);

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
console.log("------------------")
console.log("Esercizio 5")
teachers.push("Vanessa")
for (let i = 0; i<teachers.length; i++){
  console.log(teachers[i], i);
}

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
console.log("------------------")
console.log("Esercizio 6")
teachers.unshift("Sarah")
for (let i = 0; i<teachers.length; i++){
  console.log(teachers[i], i);
}

// 7. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
console.log("------------------")
console.log("Esercizio 7")
const isFabioPresent = teachers.includes("Fabio");
console.log(isFabioPresent);

// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
console.log("------------------")
console.log("Esercizio 8")
const lewisIndex = teachers.indexOf("Lewis");
console.log(lewisIndex, teachers[lewisIndex]);

// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString
console.log("------------------")
console.log("Esercizio 9")
const teachersString = teachers.join[","];
console.log(teachers)

// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
console.log("------------------")
console.log("Esercizio 10")
const isTeachersEmpty = (teachers === 0);
console.log(isTeachersEmpty);