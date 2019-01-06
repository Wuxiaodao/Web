var immg2=document.getElementById("immg2");
var immg1=document.getElementById("immg1");
var box=document.getElementById("box");
var slider1=document.getElementById("slider1");
immg1.onmouseover=function(){
	slider1.style.display="block";
	immg2.style.display="block";
}
immg1.onmouseout=function(){
	slider1.style.display="none";
	immg2.style.display="none";
}
immg1.onmousemove=function(ev){
	var ev = ev || window.event;
	var scrTop=document.documentElement.scrollTop||document.body.scrollTop;

	var oL = ev.clientX - box.offsetLeft - 25 - slider1.offsetWidth / 2;
	var oT = ev.clientY - box.offsetTop - 60 + scrTop - slider1.offsetHeight / 2;

	var oMaxw = immg1.offsetWidth - slider1.offsetWidth;
	var oMaxh = immg1.offsetHeight - slider1.offsetHeight;

	oL = oL > oMaxw ? oMaxw : oL < 0 ? 0 : oL;
	oT = oT > oMaxh ? oMaxh : oT < 0 ? 0 : oT;

	slider1.style.left = oL + 'px';
	slider1.style.top = oT + 'px';

	var scale = immg2.offsetWidth / slider1.offsetWidth;
	Bimg.style.left = -scale * oL + slider1.offsetWidth + 'px';
	Bimg.style.top = -scale * oT + slider1.offsetHeight + 'px';
}

var little1=document.getElementById("img4");
var little2=document.getElementById("img5");
var zhutupic=document.getElementById('zhutupic')
var left1=document.getElementById("img2");
var left2=document.getElementById("img3");
var Bimg=document.getElementById("Bimg");
little1.style.border="2px solid rgb(255,144,3)";
little1.onmouseover=function(){
	little2.style.border="none";
	little1.style.border="2px solid rgb(255,144,3)";
	zhutupic.src="pp0.jpeg";
	Bimg.src="pp0.jpeg"
}
little2.onmouseover=function(){
	little1.style.border="none";
	little2.style.border="2px solid rgb(255,144,3)";
	zhutupic.src="pp1.jpeg";
	Bimg.src="pp1.jpeg";
}

left1.onclick=function(){
	if(little1.style.border=="2px solid rgb(255, 144, 3)"){
		little1.style.border="none";
		little2.style.border="2px solid rgb(255, 144, 3)";
		zhutupic.src="pp1.jpeg";
		Bimg.src="pp1.jpeg"
	}
	else{
		little1.style.border="2px solid rgb(255, 144, 3)";
		little2.style.border="none";
		zhutupic.src="pp0.jpeg";
		Bimg.src="pp0.jpeg";
	}
}
left2.onclick=function(){
	if(little1.style.border=="2px solid rgb(255, 144, 3)"){
		little1.style.border="none";
		little2.style.border="2px solid rgb(255, 144, 3)";
		zhutupic.src="pp1.jpeg";
		Bimg.src="pp1.jpeg";
	}
	else{
		little1.style.border="2px solid rgb(255, 144, 3)";
		little2.style.border="none";
		zhutupic.src="pp0.jpeg";
		Bimg.src="pp0.jpeg";
	}
}

//增加数量
var jian=document.getElementById("jian");
var biao=document.getElementById("biao");
var jia=document.getElementById("jia");
biao.value=1;
jian.style.cursor="pointer";
jia.style.cursor="pointer";
jia.onclick=function(){
	biao.value++;
	if(biao.value>=5){
		biao.value=5;
		jia.style.cursor="not-allowed";
	}
	else{
		if(biao.value>=1){
			jia.style.cursor="pointer";
		}
		jia.style.cursor="pointer";
	}
}
jian.onclick=function(){
	biao.value--;
	if(biao.value<=1){
		biao.value=1;
		jian.style.cursor="not-allowed";
	}
	else{
		if(biao.value<=5){
			biao.style.cursor="pointer";
		}
		jian.style.cursor="pointer";
	}
}

//购物车
var kuang8=document.getElementById("kuang8");
var kuang10=document.getElementById("kuang10");
var delete1=document.getElementById("delete1");
var che=document.getElementById("che");
var m=document.getElementById("m");
kuang8.onclick=function(){
	che.style.display="block";
	m.style.display="block";
}
kuang10.onclick=function(){
	che.style.display="none";
	m.style.display="none";
}
delete0.onclick=function(){
	che.style.display="none";
	m.style.display="none";
}
