const issues = document.querySelectorAll('.issue');
const footer = document.querySelector('.footer');

let issuesheights =[];
issues.forEach(issue =>{
    const height = issue.scrollHeight;
    issuesheights.push(height);
});
// function calculate(num1,num2,per){
//     result = Math.sumPrecise(issuesheights.slice(num1,num2));
//     if (per != 0 ){
//         const d=((result * per) / 100);
//         return result - d;
//     }
//     else{
//         return result;
//     }
// }
// const scrollFunction = () => {
//  if (window.scrollY < calculate(0,1,10)){
//     issues.forEach(issue=>{
//         issue.style.backgroundColor = "#F6E0A4";
//         footer.style.backgroundColor = "#F6E0A4";
//     });
// }if (window.scrollY > calculate(0,1) && window.scrollY < calculate(0,2))                {    
//     issues.forEach(issue=>{
//         issue.style.backgroundColor = "#FF608C";
//         footer.style.backgroundColor = "#FF608C";
//     });
// }if (window.scrollY > calculate(0,2) && window.scrollY < calculate(0,3)){
//     issues.forEach(issue=>{
//         issue.style.backgroundColor = "#FFFFFF";
//         footer.style.backgroundColor = "#FFFFFF";
//     });
// }if (window.scrollY > calculate(0,3) && window.scrollY < calculate(0,4)){    
//     issues.forEach(issue=>{
//         issue.style.backgroundColor = "#2FCCC3";
//         footer.style.backgroundColor = "#2FCCC3";
//     });
// }if (window.scrollY > calculate(0,4) && window.scrollY < calculate(0,5)){
//     issues.forEach(issue=>{
//         issue.style.backgroundColor = "#DE712D";
//         footer.style.backgroundColor = "#DE712D";
//     });
// }if (window.scrollY > calculate(0,5) && window.scrollY < calculate(0,6)){
//     issues.forEach(issue=>{
//         issue.style.backgroundColor = "#FFBE00";
//         footer.style.backgroundColor = "#FFBE00";
//     });
// }if (window.scrollY > calculate(0,6) && window.scrollY < calculate(0,7)){    
//     issues.forEach(issue=>{
//         issue.style.backgroundColor = "#1D3FBB";
//         footer.style.backgroundColor = "#1D3FBB";
//     });
// }if (window.scrollY > calculate(0,7,0)){   
//     issues.forEach(issue=>{
//         issue.style.backgroundColor = "#E30512";
//         footer.style.backgroundColor = "#E30512";
//     });
// }
// else{};
// }
function calculate(num1,num2){
    result = Math.sumPrecise(issuesheights.slice(num1,num2));
    return result;
}
const scrollFunction = () => {
 if (window.scrollY < calculate(0,1)){
    issues.forEach(issue=>{
        issue.style.backgroundColor = "#F6E0A4";
        footer.style.backgroundColor = "#F6E0A4";
    });
}if (window.scrollY > calculate(0,1) && window.scrollY < calculate(0,2))                {    
    issues.forEach(issue=>{
        issue.style.backgroundColor = "#FF608C";
        footer.style.backgroundColor = "#FF608C";
    });
}if (window.scrollY > calculate(0,2) && window.scrollY < calculate(0,3)){
    issues.forEach(issue=>{
        issue.style.backgroundColor = "#FFFFFF";
        footer.style.backgroundColor = "#FFFFFF";
    });
}if (window.scrollY > calculate(0,3) && window.scrollY < calculate(0,4)){    
    issues.forEach(issue=>{
        issue.style.backgroundColor = "#2FCCC3";
        footer.style.backgroundColor = "#2FCCC3";
    });
}if (window.scrollY > calculate(0,4) && window.scrollY < calculate(0,5)){
    issues.forEach(issue=>{
        issue.style.backgroundColor = "#DE712D";
        footer.style.backgroundColor = "#DE712D";
    });
}if (window.scrollY > calculate(0,5) && window.scrollY < calculate(0,6)){
    issues.forEach(issue=>{
        issue.style.backgroundColor = "#FFBE00";
        footer.style.backgroundColor = "#FFBE00";
    });
}if (window.scrollY > calculate(0,6) && window.scrollY < calculate(0,7)){    
    issues.forEach(issue=>{
        issue.style.backgroundColor = "#1D3FBB";
        footer.style.backgroundColor = "#1D3FBB";
    });
}if (window.scrollY > calculate(0,7)){   
    issues.forEach(issue=>{
        issue.style.backgroundColor = "#E30512";
        footer.style.backgroundColor = "#E30512";
    });
}
else{};
}
scrollFunction();
window.addEventListener('scroll',()=>{
    scrollFunction();
});






