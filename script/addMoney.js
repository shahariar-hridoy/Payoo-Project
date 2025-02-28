document.getElementById('cashout').style.display = 'none';

// document.getElementById('btn-add-money').addEventListener('click', function (event) {
// event.preventDefault();
//     const accountNumber = document.getElementById('Account-number').value;
//     const amount = document.getElementById('amount').value; 
//     const convertedAmount = parseFloat(amount);
//     const pin = document.getElementById('pin').value;
//     const convertedPin = parseInt(pin);
//     const mainBalance = document.getElementById('main-balance').innerText;
//     const convertedMainBalance = parseFloat(mainBalance);
//     if(accountNumber.length ===11){
//         if(convertedAmount<0){
//             alert('Enter valid amount.')
//         }
//         else{
//             if( convertedPin === 1234){
//                 const totalBalance = convertedMainBalance + convertedAmount;
//                 const mainBalance = document.getElementById('main-balance').innerText = totalBalance;
//             }
//             else{
//                 alert('Enter valid pin.')
//             }
//         }
//     }
//     else{
//         alert('Incorrect account number.')
//     }
// })



document.getElementById('btn-add-money').addEventListener('click', function (event) {
event.preventDefault();
const amount = getInputValueByID('amount');
const pin = getInputValueByID('pin');
const mainBalance = getInnerTextByID('main-balance');

const accountNumber = document.getElementById('Account-number').value;
    if(accountNumber.length ===11){
        if(amount < 0){
            alert('Enter valid amount.')
        }
        else{
            if( pin === 1234){
                const totalBalance = mainBalance + amount;
                setInnerTextByIDAndValue('main-balance',totalBalance);
            }
            else{
                alert('Enter valid pin.')
            }
        }
    }
    else{
        alert('Incorrect account number.')
    }

})