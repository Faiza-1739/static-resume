// const button = document.getElementById('toggle') as HTMLButtonElement;
// const skills = document.getElementById('skills') as HTMLElement;
// button.addEventListener("click",() =>{
//     if(skills.style.display == "none"){
//         skills.style.display = "block";
//     }
//     else{
//         skills.style.display = "none";
//     }
// })
function printCV() {
    window.print(); // CV Print Functionality
}
// Attach Event Listener
var printBtn = document.getElementById("toggle");
printBtn === null || printBtn === void 0 ? void 0 : printBtn.addEventListener("click", printCV);
