function publishResult(){
    const Maths = document.getElementById("Maths").value 
    const Chemistry = document.getElementById("Chemistry").value 
    const History = document.getElementById("History").value 
    const English = document.getElementById("English").value 
    const ComputerScience = document.getElementById("ComputerScience").value 
    const Spanish = document.getElementById("Spanish").value 
    const PE = document.getElementById("PE").value 

    let total = parseFloat(Maths)+parseFloat(Chemistry)+parseFloat(History)+parseFloat(English)+parseFloat(ComputerScience)+parseFloat(Spanish)+parseFloat(PE)

    document.getElementById("sum").innerHTML = "The total marks is: " + total

    let gpa = 0
    let percentage = (total*100)/700
    document.getElementById("percentage").innerHTML = "The Percentage is: " + percentage

    if(percentage>=90){
        gpa = 4.0
        document.getElementById("grade").innerHTML = "The grade you got is an A"
        document.getElementById("gpa").innerHTML = "Your gpa is: " + gpa
    } 
    else if(percentage>=87 && percentage<=89){
        gpa = 3.3
        document.getElementById("grade").innerHTML = "The grade you got is an B+"
        document.getElementById("gpa").innerHTML = "Your gpa is: " + gpa
    }
    else if(percentage>=80 && percentage<=86){
        gpa = 3.0
        document.getElementById("grade").innerHTML = "The grade you got is an B"
        document.getElementById("gpa").innerHTML = "Your gpa is: " + gpa
    }
    else if(percentage>=77 && percentage<=79){
        gpa = 2.3
        document.getElementById("grade").innerHTML = "The grade you got is an C+"
        document.getElementById("gpa").innerHTML = "Your gpa is: " + gpa
    }
    else if(percentage>=70 && percentage<=76){
        gpa = 2.0
        document.getElementById("grade").innerHTML = "The grade you got is an C"
        document.getElementById("gpa").innerHTML = "Your gpa is: " + gpa
    }
    else if(percentage>=67 && percentage<=69){
        gpa = 1.3
        document.getElementById("grade").innerHTML = "The grade you got is an D+"
        document.getElementById("gpa").innerHTML = "Your gpa is: " + gpa
    }
    else if(percentage>=60 && percentage<=66){
        gpa = 1.0
        document.getElementById("grade").innerHTML = "The grade you got is an D"
        document.getElementById("gpa").innerHTML = "Your gpa is: " + gpa
    }
    else{
        gpa = 0.0
        document.getElementById("grade").innerHTML = "The grade you got is an F"  
        document.getElementById("gpa").innerHTML = "Your gpa is: " + gpa 
    }

}

function empty () {

    const Maths = document.getElementById("Maths").value = ""
    const Chemistry = document.getElementById("Chemistry").value = ""
    const History = document.getElementById("History").value = ""
    const English = document.getElementById("English").value  = ""
    const ComputerScience = document.getElementById("ComputerScience").value = ""
    const Spanish = document.getElementById("Spanish").value = ""
    const PE = document.getElementById("PE").value = ""

   // span.reset()
}



