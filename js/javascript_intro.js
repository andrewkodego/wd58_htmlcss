function onLoad(target1, target2){
    console.log(document.getElementById(target1).innerText);

    document.getElementById(target2).innerHTML = "Hello Javascript!!!";
    document.getElementById(target1).innerHTML += "<br/>Hello from KodeGo WD58P!!!";

}

function doHello(target, source){
    var firstName = document.getElementById(source).value;
    document.getElementById(target).innerHTML = "Hello from Mars to " + firstName + "!!!";
}