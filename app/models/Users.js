module.exports = {
    users:[
       {
            firstname: 'Derrick',
            lastname: 'Lord',
            teacher: true,
            student: false,
        },
       {
            firstname: 'Marga',
            lastname: 'Genova',
            teacher: true,
            student: false,
        },  
       {
            firstname: 'Helene',
            lastname: 'Adams',
            teacher: false,
            student: false,
        },
       {
            firstname: 'Gia',
            lastname: 'Baker',
            teacher: false,
            student: true,
        }        
    ],
    findStudents: function(){
        var foundStudents = [];
        this.users.forEach(function(user){
            if(user.student === true){
                foundStudents.push(user);
            }
        });
        return foundStudents;
    },
    findTeachers: function(){
        var foundTeachers = [];
        this.users.forEach(function(user){
            if(user.teacher === true){
                foundTeachers.push(user);
            }
        });
        return foundTeachers;
    },
    findStudentByLastName: function(name){
        var foundStudentsLast = [];
        this.users.forEach(function(user){
            if(user.lastname.indexOf(name) !== -1){
                if(user.student === true){
                    foundStudentsLast.push(user);
                }  
            }
        })
        return foundStudentsLast;
    },
    findTeacherByLastName: function(name){
        var foundTeachersLast = [];
        this.users.forEach(function(user){
            if(user.lastname.indexOf(name) !== -1){
                if(user.teacher === true){
                    foundTeachersLast.push(user);
                }  
            }
        })
        return foundTeachersLast;
    },    
    addStudent: function(student){
        this.users.push(
            {
                firstname:student.firstname,
                lastname: student.lastname,
                teacher: false,
                student: true
            }
        )
        return student;
    }
    
}