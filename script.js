function calculateGrade(){

let name=document.getElementById("name").value
let score=document.getElementById("score").value

if(score>=90){
grade="A"
}

else if(score>=80){
grade="B"
}

else if(score>=70){
grade="C"
}

else if(score>=60){
grade="D"
}

else{
grade="F"
}

document.getElementById("result").innerText=name+" grade is "+grade

}

function clearData(){

document.getElementById("name").value=""
document.getElementById("score").value=""

}
