let btn=document.querySelector(".one");
let btn2=document.querySelector(".two");
let inp=document.querySelector("#num");
let span=document.querySelector(".empty");
let arr=[1,2,3,4,5,6,7,8,9,0];

btn.addEventListener("click",(event)=>{
    btn.style .backgroundColor="blue";
    btn2.style.backgroundColor="";
    inp.setAttribute("placeholder","jio number");
})

btn2.addEventListener("click",(event)=>{
    btn2.style.backgroundColor="blue";
     btn.style.backgroundColor="";
      inp.setAttribute("placeholder","jio fiber number");
})

let recharge=document.querySelector(".recharge");

recharge.addEventListener("click",(event)=>{
    if(inp.value.length<arr.length || inp.value==false){
         span.innerText="please enter valid jio number";
        event.preventDefault();
    }
    else if(inp.value.length>arr.length){
         span.innerText="please enter valid jio number";
        event.preventDefault();
    }
    else{
        inp.value="";
    }
})

let r2=document.querySelector(" tickbox #r2");

// r2.addEventListener("load",(event)=>{
    
//     let newEle=document.createElement("input");
//  newEle.setAttribute("placeholder","$ enter amount");
//   newEle.setAttribute("type","text");
//   newEle.setAttribute("name","postpaid");
//  inp.appendChild(newEle);
// });
setTimeout(() => {
    recharge.innerText="Pay Bill Now";
}, 10000);