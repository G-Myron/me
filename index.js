const body = document.querySelector("body");
const pages = document.querySelectorAll(".page");

window.addEventListener("scroll", myScroll);
//window.addEventListener('wheel', (event)=>{wheelScroll(event)});


myScroll();



function myScroll(){
    const s = (body.scrollHeight - window.innerHeight) / (pages.length - 1);

    pages.forEach((li, ix) => {
        const ang = (window.scrollY / s - ix) * 180;

        li.style.setProperty( "--ang",  Math.max(-180, Math.min(180, ang)) + "deg");
    });
}

function wheelScroll(event){

    const delta = event.deltaY;
    const s = (body.scrollHeight - window.innerHeight) / (pages.length - 1);

    pages.forEach((li, ix) => {
        const check = Math.round(window.scrollY / s - ix);
        if (check!==0) return;

        let ang = parseInt(li.style.getPropertyValue("--ang").split("deg")[0]);
        if(delta<0) ang -= 180/4;
        if(delta>0) ang += 180/4;
        console.log(ix, ang);

        li.style.setProperty( "--ang",  ang + "deg");
    });
}
