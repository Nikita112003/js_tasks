function goodMarks(students) {
    let goodStudents = [];
    students.forEach(student => {
        if (Number(student.mark) > 50)
        goodStudents.push(student.name);
    });
    return goodStudents.join()
}