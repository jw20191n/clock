//use query selector to target the hour arm of the clock,
//and save it in a JS variable of your choice
var hourarm = document.querySelector("#hour");


//use query selector to target the minute arm of the clock,
//and save it in a JS variable of your choice
var minutearm = document.querySelector("#minute");

var secondarm = document.querySelector("#second");

//look at the following reference, and understand how to declare system JS object, Date
//https://www.w3schools.com/jsref/jsref_obj_date.asp


//look at the following reference under object method section,
//and understand how to extract hourse, minutes and seconds into
//three seperate variables, sec, min, and hr.
//https://www.w3schools.com/jsref/jsref_obj_date.asp
var now = new Date();
console.log(now);

var sec = now.getSeconds();
var min = now.getMinutes();
var hr = now.getHours()%12;


//set up three variables, secPoistion, miPosition, and hrPosition
//use the three variables from above, perform mathmatic calculations
//to change their numeric values into rotation angles.
var secangle = sec*6;//the second hand rotates 360/6 degrees /sec
var minangle = min*6 + (sec*6/60);
var hrangle = (hr*30) + (min*6/12);//hr hand turn 360/12 per hour plus minute rotate

//for every passing second, update the second, miniute, and hour angles.
function runClock(){
  hrangle = hrangle + 1/120; // (360/12)*(1/60)*(1/60)
  secangle = secangle + 360/60;//sec hand rotate 360/60 per second
  minangle = minangle + 6/60;//min hand rotate 6 degree/min, so /second will be 6/60

    hourarm.style.transform = "rotate(" + hrangle + "deg)";
    minutearm.style.transform = "rotate(" + minangle + "deg)";
    secondarm.style.transform = "rotate(" + secangle + "deg)";

}

//consulte with the following link, and call the update function
//from the step above to update every new second
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_setinterval1
var interval = setInterval(runClock, 1000);
