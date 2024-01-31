// Напишите функцию, которая вернет строку с именами студентов, у которых оценка больше 50

function goodMarks(students) {
    let goodStudents = students.filter(elem => +elem.mark > 50);
    return goodStudents.map(elem => elem.name).join()
}