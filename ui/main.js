function startSlideShow(){
  var interval1 = setInterval(changeImage1,2000);
  var interval2 = setInterval(changeImage2,1700);
  var interval3 = setInterval(changeImage3,1800);
  var interval4 = setInterval(changeImage4,1900);
  var interval5 = setInterval(changeImage5,1750);
}

function stopSlideShow(){
clearInterval("/ui/school/" + (Number(changeImg)+1) + ".jpg");
}

function changeImage1(){
var imageSrc=document.getElementById("slideShow1").getAttribute("src");
var changeImg=imageSrc.substring(imageSrc.lastIndexOf("/")+1 , imageSrc.lastIndexOf("/")+2);
     if(changeImg > 10){
	     changeImg=0;
	 }
document.getElementById("slideShow1").setAttribute("src","/ui/school/" + (Number(changeImg)+1) + ".jpg");
}

function changeImage2(){
var imageSrc=document.getElementById("slideShow2").getAttribute("src");
var changeImg=imageSrc.substring(imageSrc.lastIndexOf("/")+1 , imageSrc.lastIndexOf("/")+2);
     if(changeImg > 4){
	     changeImg=0;
	 }
document.getElementById("slideShow2").setAttribute("src","/ui/leadership/" + (Number(changeImg)+1) + ".jpg");
}

function changeImage3(){
var imageSrc=document.getElementById("slideShow3").getAttribute("src");
var changeImg=imageSrc.substring(imageSrc.lastIndexOf("/")+1 , imageSrc.lastIndexOf("/")+2);
     if(changeImg > 4){
	     changeImg=0;
	 }
document.getElementById("slideShow3").setAttribute("src","/ui/sports/" + (Number(changeImg)+1) + ".jpg");
}

function changeImage4(){
var imageSrc=document.getElementById("slideShow4").getAttribute("src");
var changeImg=imageSrc.substring(imageSrc.lastIndexOf("/")+1 , imageSrc.lastIndexOf("/")+2);
     if(changeImg > 10){
	     changeImg=0;
	 }
document.getElementById("slideShow4").setAttribute("src","/ui/college/" + (Number(changeImg)+1) + ".jpg");
}

function changeImage5(){
var imageSrc=document.getElementById("slideShow5").getAttribute("src");
var changeImg=imageSrc.substring(imageSrc.lastIndexOf("/")+1 , imageSrc.lastIndexOf("/")+2);
     if(changeImg > 4){
	     changeImg=0;
	 }
document.getElementById("slideShow5").setAttribute("src","/ui/home/" + (Number(changeImg)+1) + ".jpg");
}
