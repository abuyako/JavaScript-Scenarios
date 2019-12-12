//Calculate tips
function CalculateTip() {
    var billAmt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;

    //Validate input 
    if (billAmt === "" || serviceQual == 0) {
        alert("Pleade enter the value");
        return;
    }

    //check to see if this input is empty or less or equal to 1
    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById("each").style.display = "none";
    }else {
        document.getElementById("each").style.display = "block";
    }

    //calculate Tips
    var total = (billAmt * serviceQual) / numOfPeople;
    //round to two decimal places
    total = Math.round(total * 100) /100;
    //Next line allows us to always have two digits after decimal points
    total = total.toFixed(2);
    //Display the tips
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}