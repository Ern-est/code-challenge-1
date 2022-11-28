function studentgrade(marks){
    //This function uses else if to grade the marks
if (marks>=0 && marks<=39) {
    console.log("GRADE E");
    //this grades 0 to 39 marks as "E"
}else if(marks>=40 && marks<=49){
    console.log("GRADE D");
    //this grades 40 to 49 as "D"
}else if(marks>=50 && marks<=59){
    console.log("GRADE C");
    //this grades 50 to 59 as "C"
}else if(marks>=60 && marks<=79){
    console.log("GRADE B");
    //this grades 60 to 79 as "B"
}else if(marks>=80 && marks<=100){
    console.log("GRADE A")
    //this grades 80 to 100 as"A"
}else{
    console.log("INVALID MARKS!");
}
}