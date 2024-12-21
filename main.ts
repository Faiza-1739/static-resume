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
function printCV(): void {
    window.print(); // CV Print Functionality
}

// Attach Event Listener
const printBtn = document.getElementById("toggle");
printBtn?.addEventListener("click", printCV);