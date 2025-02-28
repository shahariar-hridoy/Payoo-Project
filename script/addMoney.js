document.getElementById('btn-add-money').addEventListener('click', function (event) {
event.preventDefault();
    const amount = document.getElementById('amount').value; 
    const convertedAmount = parseFloat(amount);

    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if(convertedAmount){
        if( convertedPin === 1234){
            const totalBalance = convertedMainBalance + convertedAmount;
            const mainBalance = document.getElementById('main-balance').innerText = totalBalance;
        }
        else{
            alert('Enter valid pin')
        }
    }
    else{
        alert('Enter amount')
    }
})