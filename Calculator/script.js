let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let four = document.querySelector(".four")
let five = document.querySelector(".five")
let six = document.querySelector(".six")
let seven = document.querySelector(".seven")
let eight = document.querySelector(".eight")
let nine = document.querySelector(".nine")
let zero = document.querySelector(".zero")
let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")
let div = document.querySelector(".divide")
let mlt = document.querySelector(".multiply")
let equal = document.querySelector(".equal")
let ac = document.querySelector(".ac")
// let t = document.querySelector(".seven").value
let sol=0
let solve =[]
// t = parseInt(t)
let panel = document.querySelector(".panel");
one.addEventListener("click", () => {
    let t = one.value
    // t=parseInt(t)
    solve.push(t)
    let ele = document.createElement("span")
    ele.innerHTML = t;
    panel.append(ele)
})
two.addEventListener("click", () => {
    let t = two.value
    // t=parseInt(t)
    solve.push(t)
    let ele = document.createElement("span")
    ele.innerHTML = t;
    panel.append(ele)
})
three.addEventListener("click", () => {
    let t = three.value
    // t=parseInt(t)
    solve.push(t)
    let ele = document.createElement("span")
    ele.innerHTML = t;
    panel.append(ele)
})
four.addEventListener("click", () => {
    let t = four.value
    // t=parseInt(t)
    solve.push(t)
    let ele = document.createElement("span")
    ele.innerHTML = t;
    panel.append(ele)
})
five.addEventListener("click", () => {
    let t = five.value
    // t=parseInt(t)
    solve.push(t)
    let ele = document.createElement("span")
    ele.innerHTML = t;
    panel.append(ele)
})
six.addEventListener("click", () => {
    let t = six.value
    // t=parseInt(t)
    solve.push(t)
    let ele = document.createElement("span")
    ele.innerHTML = t;
    panel.append(ele)
})
seven.addEventListener("click", () => {
    let t = seven.value
    // t=parseInt(t)
    solve.push(t)
    let ele = document.createElement("span")
    ele.innerHTML = t;
    panel.append(ele)
})
eight.addEventListener("click", () => {
    let t = eight.value
    // t=parseInt(t)
    solve.push(t)
    let ele = document.createElement("span")
    ele.innerHTML = t;
    panel.append(ele)
})
nine.addEventListener("click", () => {
    let t = nine.value
    // t=parseInt(t)
    solve.push(t)
    let ele = document.createElement("span")
    ele.innerHTML = t;
    panel.append(ele)
})
zero.addEventListener("click", () => {
    let t = zero.value
    // t=parseInt(t)
    solve.push(t)
    let ele = document.createElement("span")
    ele.innerHTML = t;
    panel.append(ele)
})
plus.addEventListener("click", () => {
    let t = plus.value
    // t=parseInt(t)
    solve.push(t)
    let ele = document.createElement("span")
    ele.innerHTML = t;
    panel.append(ele)
})
minus.addEventListener("click", () => {
    let t = minus.value
    // t=parseInt(t)
    solve.push(t)
    let ele = document.createElement("span")
    ele.innerHTML = t;
    panel.append(ele)
})
div.addEventListener("click", () => {
    let t = div.value
    // t=parseInt(t)
    solve.push(t)
    let ele = document.createElement("span")
    ele.innerHTML = t;
    panel.append(ele)
})
mlt.addEventListener("click", () => {
    let t = mlt.value
    // t=parseInt(t)
    solve.push(t)
    let ele = document.createElement("span")
    ele.innerHTML = t;
    panel.append(ele)
})
equal.addEventListener("click", () => {
    let string=" "
    for (const i of solve) {
        string=string+i
    }
    sol=eval(string)
    panel.innerHTML = sol;
})
ac.addEventListener("click", () => {
    panel.innerHTML = " ";
    
    solve=[]
})
console.log(t)