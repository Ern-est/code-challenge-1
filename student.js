function studentgrade(marks){
if (marks>=0 && marks<=39) {
    console.log("GRADE E");
}else if(marks>=40 && marks<=49){
    console.log("GRADE D");
}else if(marks>=50 && marks<=59){
    console.log("GRADE C");
}else if(marks>=60 && marks<=79){
    console.log("GRADE B");
}else if(marks>=80 && marks<=100){
    console.log("GRADE A")
}else{
    console.log("INVALID MARKS!");
}
}