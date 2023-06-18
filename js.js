document.querySelector(".h1").innerHTML = "绘制";
document.querySelector(".h2").innerHTML = "瞄准";
document.querySelector(".h3").innerHTML = "内存";
document.querySelector(".h4").innerHTML = "公告";


var slider = document.querySelector('.cic');
var sliderValue = document.querySelector('.cv');
slider.addEventListener('input',function(){
  sliderValue.textContent = slider.value;
});



var xxG = document.querySelector('.xxG');
var xxGG = document.querySelector('.xxGG');
xxG.addEventListener('input',function(){
  xxGG.textContent = xxG.value;
});



var aaG = document.querySelector('.aaG');
var aaGG = document.querySelector('.aaGG');
aaG.addEventListener('input',function(){
  aaGG.textContent = aaG.value;
});



var wwG = document.querySelector('.wwG');
var wwGG = document.querySelector('.wwGG');
wwG.addEventListener('input',function(){
  wwGG.textContent = wwG.value;
});


let h1= document.querySelector(".h1");
h1.onclick=function (){
var sop = document.getElementById("sop");
sop.style.display = "block";
var soo = document.getElementById("soo");
soo.style.display = "none";
var soi = document.getElementById("soi");
soi.style.display = "none";
var sou = document.getElementById("sou");
sou.style.display = "none";
};

let h2 = document.querySelector(".h2");
h2.onclick=function (){
var sop = document.getElementById("sop");
sop.style.display = "none";
var soo = document.getElementById("soo");
soo.style.display = "block";
var soi = document.getElementById("soi");
soi.style.display = "none";
var sou = document.getElementById("sou");
sou.style.display = "none";
};

let h3 = document.querySelector(".h3");
h3.onclick=function (){
var sop = document.getElementById("sop");
sop.style.display = "none";
var soo = document.getElementById("soo");
soo.style.display = "none";
var soi = document.getElementById("soi");
soi.style.display = "block";
var sou = document.getElementById("sou");
sou.style.display = "none";
};

let h4 = document.querySelector(".h4");
h4.onclick=function (){
var sop = document.getElementById("sop");
sop.style.display = "none";
var soo = document.getElementById("soo");
soo.style.display = "none";
var soi = document.getElementById("soi");
soi.style.display = "none";
var sou = document.getElementById("sou");
sou.style.display = "block";
};


document.getElementById("div1").innerHTML = "假的假的~，开启没有效果了";