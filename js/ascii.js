(function(){
"use strict";
let timer = null;
const SPEED = 250;
const TURBO = 50;
let text = "";
let currentFrame = 0;

window.onload = function(){
    document.getElementById("start").onclick = startAnimation;
    document.getElementById("stop").onclick = stopAnimation;
    document.getElementById("selectAnim").onchange = selectAnimation;
    document.getElementById("selectSize").onchange = selectSize;
    document.getElementById("speed").onchange = changeSpeed;

    document.getElementById("stop").disabled = true;
    document.getElementById("selectAnim").value = "Blank";
    document.getElementById("selectSize").value = "12pt";

};
let animate = function(){
    currentFrame++;
    if(currentFrame > frames.length-1){
        currentFrame = 0;
    }
    document.getElementById("textbox").value = frames[currentFrame];
};

let startAnimation = function(){
    text = document.getElementById("textbox").value;
    frames = text.split("=====\n");
    document.getElementById("start").disabled = true;
    document.getElementById("selectAnim").disabled = true;
    document.getElementById("stop").disabled = false;
    if(document.getElementById("speed").checked){
        timer = setInterval(animate , TURBO);
    }
    else{
        timer = setInterval(animate , SPEED);
    }
};

let stopAnimation = function(){
    document.getElementById("textbox").value = text;
	document.getElementById("start").disabled = false;
	document.getElementById("selectAnim").disabled = false;
	document.getElementById("stop").disabled = true;
	clearInterval(timer);
	timer = null;
};

let selectAnimation = function(){
    let selected = document.getElementById("selectAnim").value;
	document.getElementById("textbox").value = ANIMATIONS[selected];
};

let selectSize = function(){
    document.getElementById("textbox").style.fontSize = document.getElementById("selectSize").value;
};

let changeSpeed = function(){
    if (timer!==null) {
		if (document.getElementById("speed").checked)
		{
			clearInterval(timer);
			timer = setInterval(animate,TURBO);
		} else {
			clearInterval(timer);
			timer = setInterval(animate,SPEED);
		}
	}
};

}) ();