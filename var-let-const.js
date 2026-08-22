
// const browserName = "Chrome";


// function getBrowserName() {
//     if (browserName === "Chrome") {
        
//         var browserName = "Firefox";
//     }
//     console.log("Inside function with var:", browserName);
// }


// getBrowserName();

// console.log("Global browserName:", browserName);



// 1. Declare a global constant
const browserName = "Chrome";

// 2. Create a function
function getBrowserName() {
    if (browserName === "Chrome") {
        // Using let → block-scoped
        let browserName = "Firefox";
        console.log("Inside block with let:", browserName);
    }
    console.log("Inside function with let:", browserName);
}

// Call the function
getBrowserName();

console.log("Global browserName:", browserName);

