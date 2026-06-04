class Student
{
    stuid = 1;
    stuName = "Ram"
    stuDept = "CSE"


    study()  // instance method 
    {
        console.log("Studying....")
    }

    writeExam()
    {
        console.log("Writing Exams")
    }

    play()
    {
        console.log("playing")
    }

    getStundentinfo()
    {
        console.log("Student Id = ", this.stuid)
        console.log("Student Name = ", this.stuName)
        console.log("Student Department =", this.stuDept)
        this.study()
        this.play()
        this.writeExam()
    }
}


const s1 = new Student()
s1.getStundentinfo()