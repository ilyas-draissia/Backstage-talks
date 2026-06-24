const issues = document.querySelectorAll('.issue');
const footer = document.querySelector('.footer');
const colors =["#F6E0A4","#FF608C","#FFFFFF","#2FCCC3","#DE712D","#FFBE00","#1D3FBB","#E30512"];

const observer = new IntersectionObserver(((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            const index = [...issues].indexOf(entry.target);
            const color = colors[index];
            issues.forEach((issue)=>{issue.style.backgroundColor = color});
            footer.style.backgroundColor = color;
        }});
}),{threshold : 0.6});
issues.forEach((issue)=>{
    observer.observe(issue);
})
const initial = [...issues].findIndex((issue)=>{
    const rec = issue.getBoundingClientRect();
    return rec.top >= 0 && rec.top < window.innerHeight;
});
if (initial !== -1){
    const color = colors[initial];
    issues.forEach((issue)=>{
        issue.style.backgroundColor = color;
        footer.style.backgroundColor = color;
    })
}





