var objCount = 0;
var starArray = new Array();
function addItem(){
	starArray[objCount]=0;
	var objID="objSpan"+objCount;
	var str="<div id='"+objID+"' class='objects'>";
	for(var i=1;i<=5;i++){

		str += "<img src='images/unlit-star.png' ";
		str += "id='star_"+i+"_"+objID+"' ";
		str += "name='star_"+i+"_"+objID+"' ";		
		str += "class='stars' ";
		str += "onclick='mouseClickStar(this)' ";
		str += "onmouseover='mouseEnterStar(this)' ";
		str += "onmouseout='mouseLeaveStar(this)' ";
		str += "alt='object_"+objCount+"_star"+i+"'>";
		str += "</img>";
	}
	str +="</div>";
	$('#objects').append(str);
	objCount++;
}
function mouseEnterStar(e){
	var str=e.name;
	var loc = str.indexOf('_objSpan');
	var starNum = str.substring(5,loc);
	var objNum = str.substring(loc+8);
	var src='images/lit-star.png';
	e.src = src;
	setStar(objNum,starNum);
}
function mouseLeaveStar(e){
	var str=e.name;
	var loc = str.indexOf('_objSpan');
	var starNum = str.substring(5,loc);
	var objNum = str.substring(loc+8);
	var src='images/unlit-star.png';
	e.src = src;
	setStar(objNum,starArray[objNum]);
}
function mouseClickStar(e){
	var str=e.name;
	var loc = str.indexOf('_objSpan');
	var starNum = str.substring(5,loc);
	var objNum = str.substring(loc+8);
	starArray[objNum]=starNum;
	setStar(objNum,starNum);
}
function setStar(objNum,starNum){
	for(var i=1;i<=5;i++){
		var str = '';
		if(i<=starNum){
			str = 'images/lit-star.png';
		}
		else{
			str = 'images/unlit-star.png';
		}
		var e = document.getElementById("star_"+i+"_objSpan"+objNum);
		e.src = str;
	}
}
