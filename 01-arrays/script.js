const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca     '
]; // NON MODIFICARE QUESTA VARIABILE

console.log('-----------------ES1------------')
// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
console.log(fourthTeacher)

console.log('-----------------ES2------------')
// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers.splice(4,1,'Patrick')
console.log(teachers)

console.log('-----------------ES3------------')
// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers[teachers.length - 1];
teachers.pop();
console.log(lastTeacher);
console.log(teachers);

console.log('-----------------ES4------------')
// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers[0];
teachers.shift
console.log(firstTeacher);
console.log(teachers);

console.log('-----------------ES5------------')
// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push('Vanessa')
console.log(teachers)

console.log('-----------------ES6------------')
// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift('Sarah')
console.log(teachers)

console.log('-----------------ES7------------')
// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
for(let i = 0; i<teachers.length; i++){
  if(teachers[i] == "Lewis"){
    const lewisIndex = i;
    console.log(lewisIndex);
  }
}
console.log(teachers)

console.log('-----------------ES8------------')
// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
for(let i = 0; i<teachers.length; i++){
  if(teachers.length == 0){
    const isTeachersEmpty = true;
    console.log('array vuoto: ' + isTeachersEmpty)
  }
}


//const isTeachersEmpty = null;