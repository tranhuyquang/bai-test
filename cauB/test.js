// function timso(e){
//     let bt=document.getElementById('bt');
//     if(bt.value==='1'{
//         alert('bạn đã chon đúng')
//     }
//     else alert('sai')
// }


function welcome(e, t) {
    console.log(e);
    let inputNumber = document.getElementById('inputNumber');
   
    // console.dir(inputName.value);
    // alert('Xin chào: ' + inputName.value);
    if (inputNumber.value === '1') {
        alert('bạn chon đúng');
        
    } else {
        alert('bạn chon sai');
 
    }
}