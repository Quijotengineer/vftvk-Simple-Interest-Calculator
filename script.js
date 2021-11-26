function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);

    validatePrincipal();

    document.getElementById("result").innerHTML="\<br\>If you deposit " +
    "<span class='highlight'>" + principal + "</span>" +
    ",\<br\>at an interest rate of " +
    "<span class='highlight'>"+ rate + "</span>" +
    "%\<br\>You will receive an amount of " +
    "<span class='highlight'>" + interest + "</span>" +
    ",\<br\>in the year " + "<span class='highlight'>" + year + "</span>" + "\<br\>"
}
        
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}

function validatePrincipal()
{
    var principal = document.getElementById("principal").value;
    // check if principal exists, is defined and a positive number
    if (!(principal > 0) || !principal) {
        alert("Enter a positive number");
        fprincipal.focus();
        return false;
      }
    return true;  
}