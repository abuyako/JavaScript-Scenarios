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
}