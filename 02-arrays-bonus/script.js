const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

console.log('-----------------ES1------------')
// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

let temp = [];
for(let i = teachers.length - 1; i>=0; i--){
   temp.push(teachers[i]);
}
const reversedTeachers=temp
console.log(reversedTeachers);

// const reversedTeachers = teachers.reverse();
// console.log(reversedTeachers)

console.log('-----------------ES2------------')
// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

for(let i = 0; i<teachers.length; i++){
  if(teachers[i].length>=5){
    const longNames = teachers[i];
    console.log(longNames)
  }
}

console.log('-----------------ES3------------')
// 3. Rimuovi 'Ed' dall'array teachers

teachers.splice(1,1)
console.log(teachers)

console.log('-----------------ES4------------')
// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
for(let i = 0; i<teachers.length; i++){
  if(teachers[i] == 'Fabio'){
    const isFabioPresent = true;
    console.log('Fabio e\' presente nell\'array')
  }
}

console.log('-----------------ES5------------')
// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join(', ');
console.log(teachersString)