let inputT = document.querySelector(".inputT")
let buttons = document.querySelectorAll(".btn")

let string = "";
let arr = Array.from(buttons)
arr.forEach(button =>{
    // console.log(button)
   button.addEventListener("click",(e)=>{
    // let x = -10;
    if(e.target.innerHTML === '='){
        string = eval(string)
        inputT.value = string
        console.log(string)
    }else if(e.target.innerHTML === 'C'){
        string = "";
        inputT.value = string;
    }else if(e.target.innerHTML === 'DEL'){
        string = string.slice(0,string.length-1)
        inputT.value = string;
    }
    else{
         string += e.target.innerHTML
         console.log(string)
         inputT.scrollLeft = inputT.scrollWidth
        inputT.value = string
    }
}) 
})

// block hardware key input
inputT.addEventListener("keydown", (e) => {
  e.preventDefault();
  e.target.blur();
});
//clickbale option
let mOP = document.querySelector("#m-op")
let sect1 = document.querySelector(".container")
let sect2 = document.querySelector(".sect2")
let backB = document.querySelector(".backB1")
sect2.style.display ="none"
mOP.addEventListener("click",()=>{
    sect2.style.display ="block"
    sect1.style.display = "none"
})
backB.addEventListener("click",()=>{
    sect2.style.display ="none"
    sect1.style.display = "block"
})

// age event
let age = document.querySelector(".age")
let backB2 = document.querySelector(".c3B2")
let container3 = document.querySelector(".cont3")
age.addEventListener("click",()=>{
    container3.style.display ="block"
    sect2.style.display = "none"
})
backB2.addEventListener("click",()=>{
    container3.style.display ="none"
    sect2.style.display = "block"
})


//AGE form
//days
let number = function(){
    let arr = [];
    for(let i = 1; i<=31; i++){
    // console.log(i);
    arr[i]= i
}return arr;
}
let select = document.querySelector(".day")
number().forEach(element =>{
    // console.log(element)
    let option = document.createElement("option")
    // option.classList.add("N-OP")
    option.value = element;
    option.textContent = element
    select.appendChild(option)
    
})
//days2
let select2 = document.querySelector(".dayX")

// let date = new Date()
// let ddy = document.querySelector(".ddy").value = date.getDate()
// let ddd = document.querySelector(".ddd").value = date.getMonth()
// let yyy = document.querySelector(".yyy").value = date.getFullYear()
// console.log(date)

number().forEach(element =>{
    // console.log(element)
    let option = document.createElement("option");
    option.value = element;
    option.textContent = element;
    select2.appendChild(option)
})

//mont
let mont = function(){
    let arr = []
    for(let i = 1; i<=12; i++){
        arr[i] = i;
    }
    return arr;
}
let Mselect = document.querySelector(".month")
mont().forEach(element =>{
    let option = document.createElement("option")
    option.value = element;
    option.textContent = element;
    Mselect.appendChild(option)
})
//MONTH2
let Mselect2 = document.querySelector(".monthX")
mont().forEach(element =>{
    let option = document.createElement("option")
    option.value = element;
    option.textContent = element;
    Mselect2.appendChild(option)
})

//YEAR
let year = function(){
    let arr = []
     for(let i = 1947; i<=2050; i++){
        arr[i] = i;
     }
     return arr;
}
let yr = document.querySelector(".year")
year().forEach(element =>{
    let option = document.createElement("option")
    option.value = element;
    option.textContent = element;
    yr.appendChild(option)
})
//YEAR2
let yr2 = document.querySelector(".year2")
year().forEach(element =>{
    let option = document.createElement("option")
    option.value = element;
    option.textContent = element;
    yr2.appendChild(option)
})

// calculate
let calcu = document.querySelector(".c3B")
calcu.addEventListener("click",()=>{
    // age
    let yy = document.querySelector(".yy")
    let mm = document.querySelector(".mm")
    let dd = document.querySelector(".dd")

    let sprY = yr2.value-yr.value;
    let sprM = Mselect2.value-Mselect.value;
    let sprD = select2.value-select.value;

    if(Mselect2.value<Mselect.value || select2.value<select.value){
    yy.textContent = "Year  :   " +(sprY-1);
    mm.textContent = "Month :   " +(sprM+11);
    dd.textContent = "days  :   " +(sprD+31);

       let obj = {
        year: sprY,
        month: 12*(sprY),
        days: 365*(sprY)
    }
    let rslt = ` Year = ${obj.year}\n Month = ${obj.month}\n  Days = ${obj.days}`
    let summary = document.querySelector(".summary")
    summary.textContent = rslt;
    }
    
    else{ 
    yy.textContent = "Year  :   " +(sprY);
    mm.textContent = "Month :   " +(sprM);
    dd.textContent = "days  :   " +(sprD);
    }
    // summary
    let obj = {
        year: sprY,
        month: 12*(sprY),
        days: 365*(sprY)
    }
    let rslt = ` Year = ${obj.year}\n Month = ${obj.month}\n  Days = ${obj.days}`
    let summary = document.querySelector(".summary")
    summary.textContent = rslt;

    // Birthday
    let birthday = new Date(yr.value,Mselect.value-1,select.value)
    // console.log(birthday.toDateString())
    let today = new Date(yr2.value,Mselect2.value-1,select2.value);
    let nextBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate())
    if(nextBirthday<today){
        nextBirthday.setFullYear(today.getFullYear()+1)
    }
    let total = nextBirthday-today
    let xx = total/(1000*60*60*24)
    let cMM = (Math.ceil(xx/30))
    let cDD = xx%30
    // birthday display
    let birth = document.querySelector(".B-date")
    birth.textContent = nextBirthday.toDateString()
    // day and month
    let bm = document.querySelector(".Bm")
    let bd = document.querySelector(".Bd")
    if(Mselect.value-1 === Mselect2.value-1 && select.value === select2.value){
        bm.textContent = "Happy"
        bd.textContent = "Birthday"
    }
    else{
      bm.textContent = (cMM-1) + "  month";
    bd.textContent = (cDD) + "  days";
    console.log(cMM, cDD)
    console.log(nextBirthday.toDateString())   
    }
   
})



// let fun = function(){
// let op = document.querySelectorAll(".operator")
// let Aop = Array.from(op)
// Aop.forEach((elmnt)=>{
//     console.log(elmnt)
// })  
// }





