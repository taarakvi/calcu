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

// sect4
let cont4 = document.querySelector(".cont4")
let discount = document.querySelector(".discount")
discount.addEventListener("click",()=>{
     cont4.style.display ="block"
    sect2.style.display = "none"
})
let priceIn = document.querySelector(".priceInput")
let offerIn = document.querySelector(".offerInput")
let dCount = document.querySelector(".d-countB")
dCount.addEventListener("click",()=>{
    // console.log("yy")
    let x = priceIn.value*offerIn.value/100
    let y = priceIn.value-x;
    let final = document.querySelector(".inOB")
    final.textContent = "Final-Price : "+y;
    console.log("final price : ",y)
})
// backBB
let sect4BB = document.querySelector(".sect4BB")
sect4BB.addEventListener("click",()=>{
     cont4.style.display ="none"
    sect2.style.display = "block"
})

// cont 5 section
let cont5 = document.querySelector(".cont5")
let timeContainer = document.querySelector(".timeC")
timeContainer.addEventListener("click",()=>{
    cont5.style.display = "block"
    sect2.style.display = "none"
})
// backButton
let sect5BB = document.querySelector(".sect5BB")
sect5BB.addEventListener("click",()=>{
     cont5.style.display ="none"
    sect2.style.display = "block"
})
// FOR SELECT OPTIONS
// inputSection1
let timeArr = ["year","month","week","day","hour","minut","second","millisecond"]
// console.log(timeArr)
let timeOption1 = document.querySelector(".timeOp1")
timeArr.forEach(y =>{
    let option = document.createElement("option")
    option.value = y
    option.textContent = y
    timeOption1.appendChild(option)
    // console.log(option)
})
// inputSection2
let timeOption2 = document.querySelector(".timeOp2")
timeArr.forEach(y =>{
    let option = document.createElement("option")
    option.value = y
    option.textContent = y
    timeOption2.appendChild(option)
    // console.log(option)
})
let timeNinput = document.querySelector(".timeInput")
let result = function(){
    let y = ""
    // hours
    if(timeOption1.value === "hour" && timeOption2.value === "hour"){
            y = "hour : "+(timeNinput.value);
            console.log("Hour : ",y)
    }
    else if(timeOption1.value === "hour" && timeOption2.value === "minut"){
            y = "Minut : "+(timeNinput.value*60);
            console.log("Minut : ",y)
    }
    else if(timeOption1.value === "hour" && timeOption2.value === "second"){
            y = "Second : "+(timeNinput.value*120);
            console.log("Second : ",y)
    }
    else if(timeOption1.value === "hour" && timeOption2.value === "Millisecond"){
            y = "MilliSecond : "+(timeNinput.value*3600);
            console.log("MilliSecond : ",y)
    }
//     // year
    else if(timeOption1.value === "year" && timeOption2.value === "year"){
            y = "year : "+(timeNinput.value);
            console.log("year : ",y)
    }
    else if(timeOption1.value === "year" && timeOption2.value === "month"){
            y = "month : "+(timeNinput.value*12);
            console.log("month : ",y)
    }
    else if(timeOption1.value === "year" && timeOption2.value === "week"){
            y = "week : "+(timeNinput.value*52);
            console.log("week : ",y)
    }
    else if(timeOption1.value === "year" && timeOption2.value === "day"){
            y = "days : "+(timeNinput.value*365);
            console.log("days : ",y)
    }
//     // month
    else if(timeOption1.value === "month" && timeOption2.value === "month"){
            y = "month : "+(timeNinput.value);
            console.log("month : ",y)
    }
    else if(timeOption1.value === "month" && timeOption2.value === "week"){
            y = "week : "+(timeNinput.value*4);
            console.log("week : ",y)
    }
    else if(timeOption1.value === "month" && timeOption2.value === "day"){
            y = "days : "+(timeNinput.value*30);
            console.log("days : ",y)
    }
// week
    else if(timeOption1.value === "week" && timeOption2.value === "week"){
            y = "week : "+(timeNinput.value);
            console.log("week : ",y)
    }
    else if(timeOption1.value === "week" && timeOption2.value === "day"){
            y = "days : "+(timeNinput.value*7);
            console.log("days : ",y)
    }
//     // days
//     else if(timeOption1.value === "day" && timeOption2.value === "day"){
//             y = "days : "+(timeNinput.value*1);
//             console.log("days : ",y)
//     }
//     if(timeOption1.value === "day" && timeOption2.value === "hour"){
//             y = "hour : "+(timeNinput.value*12);
//             console.log("Hour : ",y)
//     }
//     else if(timeOption1.value === "day" && timeOption2.value === "minut"){
//             y = "Minut : "+(timeNinput.value*1440);
//             console.log("Minut : ",y)
//     }
//     else if(timeOption1.value === "day" && timeOption2.value === "second"){
//             y = "Second : "+(timeNinput.value*86400);
//             console.log("Second : ",y)
//     }
//     else if(timeOption1.value === "day" && timeOption2.value === "Millisecond"){
//             y = "MilliSecond : "+(timeNinput.value*43200000);
//             console.log("MilliSecond : ",y)
//     }

    else{
        y = "invalid"
        console.log("invalid expresion")
    }
    return y;
} 

// sect5-BUTTON
let convertorB = document.querySelector(".convertorB") 
let timeValueBox = document.querySelector(".timeValueBox")
convertorB.addEventListener("click",()=>{
    timeValueBox.innerText = result()
    // console.log("wlcom")
})


// let fun = function(){
// let op = document.querySelectorAll(".operator")
// let Aop = Array.from(op)
// Aop.forEach((elmnt)=>{
//     console.log(elmnt)
// })  
// }





