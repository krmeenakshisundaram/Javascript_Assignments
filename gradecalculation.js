// 1. Create a function that takes a student's score as a parameter
function evaluateGrade(score) {    
    let grade;
    switch (true) {
        case (score >= 90 && score <= 100):
            grade = "A";
            break;
        case (score >= 80 && score < 90):
            grade = "B";
            break;
        case (score >= 70 && score < 80):
            grade = "C";
            break;
        case (score >= 60 && score < 70):
            grade = "D";
            break;
        case (score >= 0 && score < 60):
            grade = "F";
            break;
        default:
            grade = "Invalid score";
    }
    return grade;
}
// 5. Call the function and print the result
console.log("Score: 95 → Grade:", evaluateGrade(95));  // A
console.log("Score: 83 → Grade:", evaluateGrade(82));  // B
console.log("Score: 76 → Grade:", evaluateGrade(76));  // C
console.log("Score: 65 → Grade:", evaluateGrade(65));  // D
console.log("Score: 40 → Grade:", evaluateGrade(40));  // F
console.log("Score: -5 → Grade:", evaluateGrade(-5));  // Invalid score