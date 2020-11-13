let s1 = prompt('Nhập vào chuỗi 1');
let s2 = prompt('Nhập vào chuỗi 2');
function merge2String(s1,s2) {
    var merge = '';
    for (let i=0; i<s1.length; i++){
        for (let j=i; j<s2.length; j++){
            merge += s1[i]+s2[j]
            break;
        }
    }
    alert(merge);
}
merge2String(s1,s2);



