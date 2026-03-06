let attandance = 75;
let marks = 85;
// Nested if-else statement to determine eligibility and grade based on attendance and marks
if(attandance >= 70) {
    console.log("You are eligible to take the exam.");
    if(marks >= 90) {
        console.log("Grade: +A");
    }   
    else if(marks >= 80) {
        console.log("Grade: A");
    }   
    else if(marks >= 70) {
        console.log("Grade: B");
    }
    else {
        console.log("Grade: C");
    }
}
else if(attandance >= 50) {
    console.log("Call Your parents Then you can elegible to take the exam.");
}
else {
    console.log("You are not eligible to take the exam.");
}