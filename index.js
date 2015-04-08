//Load Express Module
var express = require('express');
var bodyParser = require('body-parser');
var Users  = require('./app/models/Users');


//Instance of Express App
var app = express();


//HTML Static file route
app.use(express.static(__dirname + '/public'));

//Load Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//Define Routes

app.get('/teachers', function(req, res){
    var data = Users.findTeachers();
    if(data){
         res.json(data);
    }else{
        res.json({'message': 'No Teachers Found'});
    }
   
});

app.post('/students/new', function(req, res){
    console.log(req.body);
    
    var newStudent = Users.addStudent(req.body);
    if(newStudent){
        res.json(newStudent);
    }else{
        res.json({'message':'No new student'});
    }
    
});

app.get('/students', function(req, res){
    var data = Users.findStudents();
    if(data.length > 0){
         res.json(data);
    }else{
        res.json({'message': 'No Students Found'});
    }
   
});

app.get('/students/:last', function(req, res){
    var data = Users.findStudentByLastName(req.params.last);
    if(data.length > 0){
        res.json(data);
    }else{
        res.json({'message': 'No Students Found with that Last Name'});
    }
});



//Listen for Requests
app.listen(3000, function(){
    console.log('Server running, listening on port 3000'); 
});


