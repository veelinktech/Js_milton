class Student1
{
    constructor(stuid, stuname, dept)
    {
        this.stuid = stuid;
        this.stuname = stuname;
        this.dept = dept;
    }

    study()
    {
        console.log("The student" , this.stuid , "and his name is" , this.stuname , "is studying in" , this.dept)
    }
}

const s1 = new Student1(1,"Ram","CSE")
s1.study()

const s2 = new Student1(2,"Siva",'Mech')
s2.study()

const s3 = new Student1(3,"Ramesh",'ECE')
s3.study()