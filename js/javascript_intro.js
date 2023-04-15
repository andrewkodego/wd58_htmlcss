function onLoad(target1, target2){
    console.log(document.getElementById(target1).innerText);

    document.getElementById(target2).innerHTML = "Hello Javascript!!!";
    document.getElementById(target1).innerHTML += "<br/>Hello from KodeGo WD58P!!!";

}

function doHello(target, source){
    var firstName = document.getElementById(source).value;
    document.getElementById(target).innerHTML = "Hello from Mars to " + firstName + "!!!";
}

const getAreaOfCircle = (radius) => {
    const pi = 3.1416;
    let area = (pi * radius) ** 2;
    return area;
}

const checkOddOrEven = (number) => {
    if(number % 2 == 0){
        return 'EVEN';
    }else{
        return 'ODD';
    }
}

const getStaffCount = (list, prop, value, operator='==') =>{
    let count = 0;
    list.forEach((item) => {
        if(prop == 'age'){
            count += getAgeCount(item[prop], operator, value);
        }else if(prop == 'languages'){
            if(item[prop].includes(value)){
                count++;
            }
        }else{
            if(item[prop] == value){
                count++;
            }
        }
    });
    return count;
}

const getAgeCount = (value, operator, checkValue) => {
    let count = 0;
    switch(operator){
        case '>=':
            if(value >= checkValue){
                count++;
            }
            break;
        case '>':
            if(value > checkValue){
                count++;
            }
            break;
        case '<':
            if(value < checkValue){
                count++;
            }
            break;
        case '<=':
            if(value <= checkValue){
                count++;
            }
            break;
        case '!=':
            if(value != checkValue){
                count++;
            }
            break;
        default:
            if(value == checkValue){
                count++;
            }
            break;
    }

    return count;
}

const addDisplayResult = (target, value) => {
    document.getElementById(target).innerHTML += '<br/>' +  value;
}