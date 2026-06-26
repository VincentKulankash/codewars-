function lineupStudents(students){
  //your code here
  const studentsArray = students.sort();
  console.log (studentsArray);
  return studentsArray
}


const lst = ['Takehiko',
          'Takayuki',
          'Takahiro',
          'Takeshi',
          'Takeshi',
          'Takashi',
          'Tadashi',
          'Takeo',
          'Takao']
const result = lineupStudents(lst)