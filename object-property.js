const students = [
    {id: 21, name: 'Suleiman'},
    {id: 31, name: 'Mashud'},
    {id: 41, name: 'Marhava'},
    {id: 21, name: 'Deepjol'}
]
const names = [];
for(let i = 0; i < students.length; i++){
    const element = students[i].name;
    names.push(element);
}

const persons = students.map(s => s.name); 
const id = students.map(s => s.id);
const bigger = students.filter(s => s.name > 20);
const biggerOne = students.find(s => s.id > 20);
console.log(biggerOne);