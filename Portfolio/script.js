async function main() {
    let arr=["Hello, It's Pratham Mishra👋<br>","A Youtuber,Programmer,Gamer and Student<br>",
        "Welcome to My Portfolio<br>","in Which I Shared<br>","My Achievements,Skills and Projects!","I Really Hope You Would Like to Review<br>"]
        let intro=document.querySelector(".intro1");
        const delay=async()=>{
            return new Promise((resolve,reject)=>{
                setTimeout(() => {
                    resolve();
                }, 3000);
            })
        }
        const add = async(i)=>{
            let div=document.createElement("div");
            await delay();
            div.innerHTML=i;
            intro.append(div);
        }
        for(const i of arr){
            await add(i);
        }
}
main();

let d2=document.querySelectorAll(".Nl");
const anim=()=>{
    let wh=window.innerHeight;
    d2.forEach((it)=>
        {
        let th=it.getBoundingClientRect().top;
        if(th<wh)
        {
            it.classList.add("ani");
        }
        else
        {
            it.classList.remove("ani");
        }
    })
}
window.addEventListener("scroll",anim)
