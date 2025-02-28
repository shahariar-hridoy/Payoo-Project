document.getElementById('btn-cashout').addEventListener('click', function (event) {
    event.preventDefault();
    const pin = document.getElementById('cashout-pin').value;
    const convertedPin = parseInt(pin);
    const cashoutAmount =  document.getElementById('cashout-amount').value;
    const convertedAmount = parseFloat(cashoutAmount);

    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if(cashoutAmount){
        if(convertedPin === 1234){
            const totalBalance = mainBalance - cashoutAmount;
            if(totalBalance < 0){
                alert("Insufficient Balance");
            }
            else{
                document.getElementById('main-balance').innerText = totalBalance;         
            }
        }
    }
    else{
        alert("Enter valid amount")
    }
})