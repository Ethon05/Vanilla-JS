function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value; 
    var interest = principal * years * rate / 100;
    var amount = parseInt(principal) + parseFloat(interest);
    var result = document.getElementById("result");
    var year = new Date().getFullYear() + parseInt(years);
    if (principal <= 0) {
      alert("Please enter a positive number!");
      document.getElementById("principal").focus();
    }
    else {
     result.innerHTML = "If you deposit $" + principal + ",\<br\>at an interest rate of " + rate + "%\<br\>You will receive an amount of $" + amount + ",\<br\>in the year " + year + "</mark>"+"\<br\>";
    }
}
function updateRate() {
  var rate_val = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = `${rate_val}%`;
}
