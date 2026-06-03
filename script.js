function calculate() {
   var bill = parseFloat(document.getElementById("bill").value);
  var tip = parseFloat (document.getElementById("tip").value);
  var people = parseFloat(document.getElementById("people").value);

 
  var tipAmount = bill *(tip/100);
  var total = bill + tipAmount;
  var perPerson = total/people;
 
document.getElementById("result").innerHTML =
    "tip: £" + tipAmount.toFixed(2) +"<br>" +
    "total: £" + total.toFixed(2) +"<br>" +
    "each person pays: £" + perPerson.toFixed(2);


}



  
  
  
  
  
  
  
  
  
  
