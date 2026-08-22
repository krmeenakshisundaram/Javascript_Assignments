// function launchBrowser(browserName) {
//     if (browserName === "Chrome") {
//         console.log("Launching Chrome browser");
//     } else if (browserName === "Firefox") {
//         console.log("Launching Firefox browser");
//     } else if (browserName === "Edge") {
//         console.log("Launching Edge browser");
//     } else {
//         console.log("Browser not supported");
//     }
// }

// // Call the function with different browser names
// launchBrowser("Chrome");   // Output: Launching Chrome browser
// launchBrowser("Firefox");  // Output: Launching Firefox browser
// launchBrowser("Edge");     // Output: Launching Edge browser
// launchBrowser("Safari");   // Output: Browser not supported


function runTest(testName) {
switch (testName) {
    case "SmokeTest":
        console.log("Running Smoke Test");
        break;
    case "SanityTest":
        console.log("Running Sanity Test");
        break;
    case "RegressionTest":
        console.log("Running Regression Test");
        break;
    default:
        console.log("Default Smoke Test found");

}
}

runTest("SmokeTest"); // Output: Running Smoke Test
runTest("SanityTest"); // Output: Running Sanity Test
runTest("RegressionTest"); // Output: Running Regression Test
runTest("PerformanceTest"); // Output: Default Smoke Test found

