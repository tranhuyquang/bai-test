let btnroll = document.getElementById('btn_roll')
let inputNumber = document.getElementById('inputNumber')

let Count=0;

console.log( getRandomNumber())

function CheckNumber() {
    let number = inputNumber.value;
    while (true) {
        if (number == "") {
            alert('bạn chưa nhập');
            break;
        } else if (isNaN(number)) {
            alert('chỉ được nhập số');
            break;
        } else if (number < 1 || number > 10) {
            alert('Số cần nằm trong khoảng 0 đến 10');
            break;
        } else {
            Count++;
            return number ;
        }
    }
}

btnroll.addEventListener('click', () => {
    let number = CheckNumber();
    
    if (number == 5) {
        alert('bạn đã chọn đúng');
        Count = 0;
    }
    if 
    (!isNaN(number) && (number <= 10 && number >= 1)) {
        alert(`Số lần thử bạn còn lại ${3 - Count} `);
    }
    if (Count == 3) {
        alert(`Bạn chọn sai. Con số may mắn là: 5`);
        window.location.assign("cauB.html");
    }
});

let RandomNumber1 = getRandomNumber()
     function getRandomNumber() {
     randomNumber = 5;
     return randomNumber;
}