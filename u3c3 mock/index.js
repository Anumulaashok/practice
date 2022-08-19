
var form=document.querySelector("form")

form.addEventListener("submit",function(event){
  event.preventDefault();

  var data={
      month:form.month.value,
      income:form.income.value,
      expense:form.expense.value
  }
output(data)

})

function output(data){

var box=document.createElement("div");

var headmonth=document.createElement("h1");
headmonth.innerText=data.month

var pincome=document.createElement("p");
pincome.innerText=Number(data.income)

var pexpence=document.createElement("p");
pexpence.innerText=Number(data.expense);

var headd=document.createElement("h3");

if(pincome.innerText  < pexpence.innerText){
  headd.innerText="DEBT"
  headd.style.color="red"
}
else if(pincome.innerText>pexpence.innerText){
  headd.innerText="SAVE"
  headd.style.color="green"
  
}
else
{
  headd.innerText="BREAKEVEN"
  headd.style.color="orange"
 }
 
var delet=document.createElement("button");
delet.innerText="delete"
delet.addEventListener("click",function(event){
 event.target.parentNode.remove();
})

box.append(headmonth,pincome,pexpence,headd,delet)
console.log(box)
console.log(data)

var repo=document.querySelector("#report")
repo.append(box)

}