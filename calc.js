const display=document.querySelector(".mycalc");
const mykeys=[["1","2","3","+"],["4","5","6","-"],["7","8","9","*"],["C","0","=","/"]];
const myoperator=["+","-","*","/"]
let output;


document.addEventListener("DOMContentLoaded",function(){
output=document.createElement("div");
output.classList.add("output");
output.innerText="0";
display.appendChild(output);

let container=document.createElement("div");
container.classList.add("container");

for(let a=0;a<mykeys.length;a++){
  const btncontainer=document.createElement("div");
  btncontainer.classList.add("row");
  for(let b=0;b<mykeys[a].length;b++){
    let btn=document.createElement("div");
    btn.classList.add("btn");
    btn.innerText=mykeys[a][b];
    container.appendChild(btn);
    btn.addEventListener("click",btnfunc)
    }
    display.appendChild(container);
}
});


function btnfunc(e){

let keyvalue=e.target.innerText;
let calc=output.innerText;

if(calc==="0"){
  calc="";
}

let laschar=calc.substring(calc.length-1);
console.log(laschar);

if(keyvalue==="=") {
  calc=eval(calc);
}
else {
if(myoperator.includes(keyvalue)){
  if(myoperator.includes(laschar)){
    calc=calc.substring(0,calc.length-1);
  }
  else {
  calc=eval(calc);
  }

}
calc=calc+keyvalue;
}

if(keyvalue==="C"){
  calc=0;
}


output.innerText=calc;

}
