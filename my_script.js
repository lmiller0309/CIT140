$(document).ready(function () {
    
    $.getJSON('https://raw.githubusercontent.com/lmiller0309/CIT140/main/cit5students.json', function (data) {
        
        const students = data;

        
        $('#citButton').on('click', function () {
            displayStudentsByMajor(students, 'CIT');
        });

        
        $('#busButton').on('click', function () {
            displayStudentsByMajor(students, 'BUS');
        });
    });

    
    function displayStudentsByMajor(students, major) {
        const filteredStudents = students.filter(student => student.major === major);
        
        
        const source = $('#students-template').html();
        const template = Handlebars.compile(source);
        const html = template({ students: filteredStudents });

        
        $('#display').html(html);
    }
});
