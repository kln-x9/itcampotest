function currenTime(){

    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();



    hours = plusZero(hours);
    minutes = plusZero(minutes);
    seconds = plusZero(seconds);

    document.getElementById("time").innerHTML = hours + ":" +  minutes + ":"+  seconds;
    setTimeout(currenTime,1000);
    

}

function plusZero(number){
    if(number < 10) {
        return "0" + number;
    }else return number
}
currenTime();
