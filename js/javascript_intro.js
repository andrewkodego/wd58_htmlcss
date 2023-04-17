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

const addDisplayResult = (target, value, nexline='<br/>') => {
    document.getElementById(target).innerHTML += nexline +  value;
}


const dateFormatter = (date, format)=>{
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let milSec = date.getMilliseconds();    

    let formatedDate = format.replace('yyyy', year);
    formatedDate = formatedDate.replace('mm', month.toString().padStart(2, '0'));
    formatedDate = formatedDate.replace('dd', day.toString().padStart(2, '0'));
    formatedDate = formatedDate.replace('hh', hour.toString().padStart(2, '0'));
    formatedDate = formatedDate.replace('MM', minute.toString().padStart(2, '0'));
    formatedDate = formatedDate.replace('ss', second.toString().padStart(2, '0'));
    formatedDate = formatedDate.replace('ms', milSec.toString().padStart(2, '0'));

    return formatedDate;
}

const DAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const SHORT_DAYS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const SHORT_MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

