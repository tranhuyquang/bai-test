console.log("A. Problem Solving");
    console.log("1:");
    function findOppositeNumber(n, firstNum) {
        let oppositeNum;
        if (firstNum <= (n/2)){
            oppositeNum = firstNum + n/2
        }
        else {
            oppositeNum = firstNum - n/2
        }        
        return oppositeNum;
    }

    
    let n = prompt("Nhập số n: ");

    let firstNum = prompt("Nhập firstNum: ");
    n = parseInt(n);
    firstNum = parseInt(firstNum);
    
    console.log("Số đối diện là: ");
    console.log(findOppositeNumber(n,firstNum));