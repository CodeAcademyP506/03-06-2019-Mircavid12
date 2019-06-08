var university ={
    students:[
        {
            name:"Mircavid",
            lastName:"Elekberov",
            score:100,
            group:"p506",
            getInfo: function(){
                return this.name + " " + this.lastName + " " + this.score
            },
            getTeacherName:function(){
                for(var t in university.teachers){
                    if(university.teachers[t].group() == this.group){
                        return university.teachers[t].getInfo()
                    }   
                }
            }
          

        },
        {
            name:"Nurlan",
            lastName:"Huseynov",
            score:99,
            group:"p507",
            getInfo: function(){
                return this.name + " " + this.lastName + " " + this.score
            },
            getTeacherName:function(){
                for(var t in university.teachers){
                    if(university.teachers[t].group() == this.group){
                        return university.teachers[t].getInfo()
                    }   
                }
            }
        },
        {
            name:"Lale",
            lastName:"Hummetova",
            score:101,
            group:"p506",
            getInfo: function(){
                return this.name + " " + this.lastName + " " + this.score
            },
            getTeacherName:function(){
                for(var t in university.teachers){
                    if(university.teachers[t].group() == this.group){
                        return university.teachers[t].getInfo()
                    }   
                }
            }
          

        },
    ],

    teachers:[
        {
            name: "Ismayil",
            lastname:"Ismayilov",
            group:function(){
                for(var s = 0; s<university.students.length; s++){
                    if(university.students[s].group == "p506"){
                        return university.students[s].group
                    }
                }
            },
            getInfo:function(){
                return this.name + " " + this.lastname
            },
            countOfStudents:function(){
                var studentCount = 0;
                for(var stu in university.students){
                    if(university.students[stu].group == this.group()){
                        studentCount++;
                    }
                }
                return studentCount

            }
        },
        {
            name: "Samir",
            lastname:"Dadashzade",
            group:function(){
                for(var s = 0; s<university.students.length; s++){
                    if(university.students[s].group == "p507"){
                        return university.students[s].group
                    }
                }
            },
            getInfo:function(){
                return this.name + " " + this.lastname
            },
            countOfStudents:function(){
                var studentCount = 0;
                for(var stu in university.students){
                    if(university.students[stu].group == this.group()){
                        studentCount++;
                    }
                }
                return studentCount
            }
        }
    ]
}

console.log(university.teachers[0].countOfStudents())