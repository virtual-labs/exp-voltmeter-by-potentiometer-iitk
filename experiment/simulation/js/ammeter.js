let rotation = 0;
let circuita = true;
let counter = 0;
let counter1 = 0;
let circuit2a = true ;


// for the movemnt of arrow on scale
const moveline1 = document.getElementById("extent1");
const arrow1 = document.getElementById('arrow1');
const needle1 = document.getElementById("needle1");


const rightbutton1 = document.getElementById("right-button1");
function rightShift1() {
    x = x + 5;
    
    moveline1.setAttribute("x1", parseInt(moveline1.getAttribute("x1")) + 5);
    arrow1.setAttribute("transform", `translate(${x}, 0)`);}
    
    
    
const button1 = document.getElementById("left-button1");
function leftShift1(){
  
    x = x - 5;
    moveline1.setAttribute("x1", parseInt(moveline1.getAttribute("x1")) - 5);
    arrow1.setAttribute("transform", `translate(${x}, 0)`);}

//end


// all the switch
const image = document.getElementById("switch1A");
const rotateBtna = document.getElementById("switch1btnA");
const textBtn = document.getElementById("switch1btntextA");
function switchonoff1A() {
    rotation = 35;
    if (circuita == true && counter == 0) {
        console.log('ds');
        image.style.transform = `rotate(${rotation}deg)`;
        image.style.transformOrigin = "442.65px 310.71px";
        document.getElementById("switch1btnA").style.fill = "green";
        document.getElementById("switch1btntextA").innerHTML = "On";
        circuita = false;
    }
    else if (circuita == false && counter == 0) {
        rotateBtna.style.fill = "red";
        image.style.transform = `rotate(${-rotation}deg)`;
        document.getElementById("switch1btntextA").innerHTML = "Off";
        circuita = true;
        counter1 = 1;
        circuit2a = false;
    }
}

const image1a = document.getElementById("switch2A");
const rotateBtn1a = document.getElementById("switch2btnA");
const textBtn1 = document.getElementById("switch2btntextA");
function switchonoff2A() {
    console.log("abc")
    if (circuita == true && counter1 == 1) {
        image1a.style.transform = `rotate(${rotation}deg)`;
        image1a.style.transformOrigin = "441.97px 365.79px";
        document.getElementById("switch2btnA").style.fill = "green";
        document.getElementById("switch2btntextA").innerHTML = "On";
        counter = 1;
        circuita = false;
    }
    else if (circuita == false && counter1 == 1) {
        rotateBtn1a.style.fill = "red";
        image1a.style.transform = `rotate(${-rotation}deg)`;
        document.getElementById("switch2btntextA").innerHTML = "Off";
        counter = 0;
        circuita = true;
    }
}



const image11 = document.getElementById("switch11");
const rotateBtn11 = document.getElementById("switch11btn");
const textBtn11 = document.getElementById("switch11btntext");
function switchonoff11(){
    console.log("switchonoff11");
    if (circuit2a == true && counter == 0) {
        image11.style.transform = `rotate(${rotation}deg)`;
        image11.style.transformOrigin = "340.99px 58.69px";
        document.getElementById("switch11btn").style.fill = "green";
        document.getElementById("switch11btntext").innerHTML = "On";
        counter = 1;
        circuit2a = false;
    }
    else if (circuit2a == false && counter1 == 0) {
        rotateBtn11.style.fill = "red";
        image11.style.transform = `rotate(${-rotation}deg)`;
        document.getElementById("switch11btntext").innerHTML = "Off";
        counter = 0;
        circuit2a= true;
    }
}


const image22= document.getElementById("switch22");
const rotateBtn22 = document.getElementById("switch22btn");
const textBtn22 = document.getElementById("switch22btntext");
function switchonoff22(){
    // console.log("switchonoff11");
    if (circuita == true && counter1 == 1) {
        console.log("switchonoff11");
        image11.style.transform = `rotate(${rotation}deg)`;
        image11.style.transformOrigin = "342.28px 538.36px";
        document.getElementById("switch22btn").style.fill = "green";
        document.getElementById("switch22btntext").innerHTML = "On";
        counter = 1;
        circuit2a= false;
    }
    else if (circuita == false && counter1 == 1) {
        rotateBtn11.style.fill = "red";
        image11.style.transform = `rotate(${-rotation}deg)`;
        document.getElementById("switch22btntext").innerHTML = "Off";
        counter = 0;
        circuit2a = true;
    }

}

//end


//for showing resistance when u more the resistance 1 and resistance 2 silder.

var resistance1 = 0;
function getResistance1(id) {
  // let resistance=0;

  if (id === 'resistance1a') {


    resistance1 = document.getElementById(id).value;
    document.getElementById("resistance-1a-display").innerText = resistance1 + " " + "ohm";

    document.getElementById("resistance-1a-display-svg").innerHTML = resistance1 + " " + "ohm";
  }
}
var resistance1a = 0;
function getResistance12a(id) {
  // let resistance=0;
  if (id === 'resistance2a') {


    resistance1a = document.getElementById(id).value;
    document.getElementById("resistance-2a-display").innerText = resistance1a + " " + "ohm";

    document.getElementById("resistance-2a-display-svg").innerHTML = resistance1a + " " + "ohm";
    document.getElementById("voltmeter").innerHTML = ((12 / (4 + +resistance1a)) * 4) + +0.05 + " " + "V";



  
}
}

//end