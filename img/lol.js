
//充值话费
var select=document.getElementById("select");
var yuan=document.getElementById("yuan");
select.onchange=function(){
	yuan.innerHTML="￥"+select.value;
}

window.onload = function(){

	var box = document.getElementsByClassName('box')[0];
	var aa = document.getElementById('aa');
	window.onscroll = function(){
		var st=document.documentElement.scrollTop||document.body.scrollTop;
		if(st>180){
			box.style.position = 'fixed';
			box.style.top = "0px";
			aa.style.height = "180px";


		}else{
			box.style.position = 'static';
			aa.style.height = "0px";
		}
	}
}

function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}

function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}

var c1 = document.getElementById('c1');
var oNavlist = document.getElementById('nav').children;
var slider = document.getElementById('slider');
var left=document.getElementById('left');
var right=document.getElementById('right');
var index = 1;
var timer;
var isMoving = false;
c1.onmouseover = function(){
	animate(left,{opacity:50})
	animate(right,{opacity:50})
	clearInterval(timer)
}
c1.onmouseout = function(){
	animate(left,{opacity:0})
	animate(right,{opacity:0})
	timer = setInterval(next, 3000);
}
right.onclick=next;
left.onclick=prev;
for( var i=0; i<oNavlist.length; i++ ){
	(function(i){
		oNavlist[i].onclick = function(){
			index = i+1;
			navmove();
			animate(slider,{left:-800*index});
		}
	})(i);
}
function next(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index++;
	navmove();
	animate(slider,{left:-800*index},function(){
		if(index==7){
			slider.style.left = '-800px';
			index = 1;
		}
		isMoving = false;
	});
}
function prev(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index--;
	navmove();
	animate(slider,{left:-800*index},function(){
		if(index==0){
			slider.style.left = '4800px';
			index = 6;
		}
		isMoving = false;
	});
}
function navmove(){
	for( var i=0; i<oNavlist.length; i++ ){
		oNavlist[i].className = "";
	}
	if(index >6 ){
		oNavlist[0].className = "active";
	}else if(index<=0){
		oNavlist[5].className = "active";
	}else {
		oNavlist[index-1].className = "active";
	}
}
timer = setInterval(next, 3000);


var gonggao=document.getElementById('gonggao');
var pp=document.getElementById('pp');
var pp1=document.getElementById('pp1');
pp1.innerHTML=pp.innerHTML;
function scrollUp(){
	if(gonggao.scrollTop>=pp.offsetHeight){
		gonggao.scrollTop=0;
	}else{
		gonggao.scrollTop++;
	}
}
var time=50;
var mytimer=setInterval(scrollUp,time);
gonggao.onmouseover=function(){
	clearInterval(mytimer);
}
gonggao.onmouseout=function(){
	mytimer=setInterval(scrollUp,time);
}
/*
gonggao.innerHTML+=gonggao.innerHTML;
var liHeight=24;
gonggao.scrollTop=0;
var delay=2000;
var speed=50;
var time;
var Moving=true;
function starMove(){
	gonggao.scrollTop++;
	time=setInterval("scrollUp()",speed);
}
function scrollTop(){
	if(gonggao.scrollTop%liHeight==0){
		clearInterval(time);
		setTimeout("starMove()",delay);
	}else{
		gonggao.scrollTop++;
		if(gonggao.scrollTop>=gonggao.offsetHeight/2){
			gonggao.scrollTop=0;
		}
	}
}
setTimeout("starMove()",delay);
*/
/*
var time=setInterval(function(){
	if(!Moving){
		return;
	}
	var now=parseInt(getStyle(gonggao,'top'));
	gonggao.style.top=now-1+"px";
	if(now===-370){
		gonggao.style.top="0px";
	}
},20);
gonggao.onmouseover=function(){
	Moving=false;
}
gonggao.onmouseout=function(){
	Moving=true;
}
*/
