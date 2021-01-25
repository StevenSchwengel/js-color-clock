//const heading document.querySelector('h2');
//console.log("hi");

//  Normal Clock time part is above

let isHovering = false;



function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}


function display_ct6() {
  var x = new Date()
  var ampm = x.getHours() >= 12 ? ' PM' : ' AM';
  hours = x.getHours() % 12;
  hours = hours ? hours : 12;

  lminutes = x.getMinutes();
  lseconds = x.getSeconds();

  // Is the user hovering?

  /*  console.log(lhours, lminutes, lseconds); */

  if (hours < 10) {
    hours = hours.toString().padStart(2, 0);
  }

  if (lminutes < 10) {
    lminutes = lminutes.toString().padStart(2, 0);
  }

  if (lseconds < 10) {
    lseconds = lseconds.toString().padStart(2, 0);
  }


  if(!isHovering) {
    var x1 = hours.toString(16) + ":" + lminutes.toString(16) + ":" + lseconds.toString(16);
  } else {
    var x1 = hours + ":" + lminutes + ":" + lseconds;

  }



  //console.log(hexTime);


  //  Percentage of Clock time part is below


  var boxProgress = (lseconds / 60 * 14);
  console.log("boxProgress", boxProgress.toFixed(2));

  function move() {
    var width = 1;
    var bary = document.querySelector("#progress-bar");
    bary.style.width = boxProgress + "%";
    console.log("vary", bary);
  }

  move(boxProgress);



  //
  // function hexaTime() {
  //   var date = new Date();
  //   // we convert in the 0 .. 255 range
  //   var hSeconds = parseInt(date.getSeconds() * 255 / 59);
  //   var hMinutes = parseInt(date.getMinutes() * 255 / 59);
  //   var hHours = parseInt(date.getHours() * 255 / 23);
  //   return +hHours + hMinutes + hSeconds;
  //   //
  // }
  // console.log("hexaTime",hexaTime());




  // function toHex(sec) {
  function toHex(sec) {
   var date = new Date();
    var sec = parseInt(date.getSeconds() * 255 / 59);
    var hex = ("0" + (Number(sec).toString(16))).slice(-3).toUpperCase();
    var clock = document.querySelector(".clock");
    clock.style.backgroundColor = "#" + hex;
  //  clock.style.backgroundColor = "#CCC";

//    style.backgroundColor = "red";

    console.log("returning hex",hex);
  //    return hex;
  }

    toHex();


  //  yourNumber = 100000;
  //
  // hexString = yourNumber.toString();
  //
  //    yourNumber=parseInt(hexString, 16);
  //    console.log("yourNumber",yourNumber);

  document.querySelector(".clock-display").innerHTML = x1;
  //document.getElementById('ct7').innerHTML = hexTime;
  display_c6();




}

function display_c6() {
  var refresh = 1000; // Refresh rate in milli seconds
  mytime = setTimeout('display_ct6()', refresh)
}
display_c6()

// console.log('testing');

//document.getElementById("datetime").innerHTML = dt.toLocaleString();
