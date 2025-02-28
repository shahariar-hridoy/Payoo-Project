// document.getElementById('btn-cashout').addEventListener('click', function (event) {
//     event.preventDefault();
//     const pin = document.getElementById('cashout-pin').value;
//     const convertedPin = parseInt(pin);
//     const cashoutAmount =  document.getElementById('cashout-amount').value;
//     const convertedAmount = parseFloat(cashoutAmount);

//     const mainBalance = document.getElementById('main-balance').innerText;
//     const convertedMainBalance = parseFloat(mainBalance);

//     if(cashoutAmount){
//         if(convertedPin === 1234){
//             const totalBalance = mainBalance - cashoutAmount;
//             if(totalBalance < 0){
//                 alert("Insufficient Balance");
//             }
//             else{
//                 document.getElementById('main-balance').innerText = totalBalance;         
//             }
//         }
//     }
//     else{
//         alert("Enter valid amount")
//     }
// })



document.getElementById('btn-cashout').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = getInputValueByID('cashout-amount');
    const pin = getInputValueByID('cashout-pin');
    const mainBalance = getInnerTextByID('main-balance');

    const accountNumber = document.getElementById('Account-number').value;
    if (accountNumber.length === 11) {
        if (amount < 0) {
            alert('Enter valid amount.')
        }
        else {
            if (pin === 1234) {
                const totalBalance = mainBalance - amount;
                if (totalBalance < 0) {
                    alert('Insufficient Balance')
                }
                else {
                    setInnerTextByIDAndValue('main-balance', totalBalance);

                    const container = document.getElementById('transaction-container');
                    const div = document.createElement('div');
                    div.classList.add('bg-red-300', 'p-3')
                    div.innerHTML = `
                <h1 class="text-yellow-300">Cashout Money</h1>
                <h3>${amount}</h3>
                <p>Account Number: ${accountNumber}</p>
                `
                    container.appendChild(div);
                }
            }
            else {
                alert('Incorrect PIN!')
            }


        }
    }
    else {
        alert('Incorrect account number!')
    }

})