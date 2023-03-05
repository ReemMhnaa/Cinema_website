/*
var count=0; 
var current=0;
var play=0;
var pt;
var t,loadT,op=0;
/*لاحظ كيف بحط صور مصفوفة
var Imageslist =new Array(); 
/*لما انا بحمل الصفحة هاد رح يتنفذ
 function LoadImages(){ addImage ('img1/b2.png');        
                        addImage ('img1/b3.jpg');        
						addImage ('img1/b4.jpg');        
						addImage ('img1/b5.jpg');        
						addImage ('img1/b6.jpg'); 
                        addImage ('img1/b7.jpg');   
                        addImage ('img1/b8.jpg');   
                        addImage ('img1/b9.jpg');   
                        addImage ('img1/b10.jpg');   						
						setImage();     } 
 /*كل صورة عنصر مصفوفة
 function addImage(url){ Imageslist[count]=url;
                         count++;         } 
						 


function setImage()
    /*عرفت انو هي الصورة هي الاولى
        document.getElementById("tmpImg").src=Imageslist[current];
		/*الصورة الاولى صارت بمتغير
		var tmpImg=document.getElementById("tmpImg");
		if(tmpImg.complete && !(op >0 && op < 100))
		{/*حددت الصورة لبدا تظهر انو الاولى
			document.getElementById("img").src=Imageslist[current];
			ImgOpen();
			document.getElementById("loadImg").width="0";
			clearTimeout(loadT);
			
		}else{
			loadT=setTimeout("setImage()",10);
			document.getElementById("loadImg").width="35";
		}
		
    }


function ImgOpen()
{
op++;
img=document.getElementById("img");
setOpacity(img,op);
/*تنفيذ وظيفة بعد فترة زمنية محددة (بالميلي ثانية).
مقدار الوقت بالمللي ثانية التي يجب أن تنتظرها الوظيفة قبل تنفيذها.
 بإرجاع قيمة معرف فريدة (تسمى "معرف المؤقت") التي تمثل المؤقت الذي تم تعيينه للتوتقوم طريقة setTimeOut () .

t=setTimeout("ImgOpen()",10);
if(op >=100)
{
op=0;
/*هذا يلغي المؤقت ، ويمنع تنفيذ الوظيفة.
clearTimeout(t);
}
}

function setOpacity(obj, opacity) {/*تمرق الصورة الاولى ورقم واحد
// This is because some browsers, such as Internet Explorer, have a bug that causes elements with an opacity of 100 to not be fully transparent.
opacity = (opacity == 100)?99.999:opacity;
//By using these different statements, the function is able to set the opacity of an element in a cross-browser compatible way.
// IE/Win
obj.style.filter = "alpha(opacity:"+opacity+")";
// Safari<1.2, Konqueror
obj.style.KHTMLOpacity = opacity/100;
// Older Mozilla and Firefox
obj.style.MozOpacity = opacity/100;
// Safari 1.2, newer Firefox and Mozilla, CSS3
obj.style.opacity = opacity/100;
}

function playSlideShow()
{
pt=setTimeout("playSlideShow()",3000);
next();
}

function next()
{
if(current >= (Imageslist.length-1))
current=0;
else
current ++;
setImage();
}

function PlayPause()
	{
		if(play==0)
			{
				play=1;
				document.getElementById("plypus").src="stuff/pause.png";
				pt=setTimeout("playSlideShow()",3000);
			}else
			{
				play=0;
				document.getElementById("plypus").src="stuff/play.png";
				clearTimeout(pt);
			}
	}


function prev()
{
if(current <= 0)
current = Imageslist.length-1;
else
current --;
setImage();
}

function MouseOver(id)
{
if(id=="plypus" )
{
if(play==0)
document.getElementById(id).src= "stuff/overplay.png";
else
document.getElementById(id).src= "stuff/overpause.png";
}else{
document.getElementById(id).src= "stuff/over" + id + ".png";
}
}


function MouseOut(id)
{
if(id=="plypus" )
{
if(play==0)
document.getElementById(id).src= "stuff/play.png";
else
document.getElementById(id).src= "stuff/pause.png";
}else{
document.getElementById(id).src= "stuff/" + id + ".png";
}
}
*/


var count=0; 
var current=0;
var play=0;
 var pt;
 var t,loadT,op=0;

var Imageslist =new Array(); 
 function LoadImages(){ addImage ('img1/b2.png');        
                        addImage ('img1/b3.jpg');        
						addImage ('img1/b4.jpg');        
						addImage ('img1/b5.jpg');        
						addImage ('img1/b6.jpg'); 
                        addImage ('img1/b7.jpg');   
                        addImage ('img1/b8.jpg');   
                        addImage ('img1/b9.jpg');   
                        addImage ('img1/b10.jpg');   						
						setImage();     } 
 
 function addImage(url){ Imageslist[count]=url;
                         count++;         } 


//1
function PlayPause()
	{
		if(play==0)
			{
				play=1;
				document.getElementById("plypus").src="stuff/pause.png";
				pt=setTimeout("playSlideShow()",3000);
			}else
			{
				play=0;
				document.getElementById("plypus").src="stuff/play.png";
				clearTimeout(pt);//لولاه حتى لو وقفت كانت كملت لان 
				//playslideshow نفس الاسمpt
				//رح يتكرر كل 3000ثا
			}
	}
//2
function playSlideShow()
{
pt=setTimeout("playSlideShow()",3000);//note: pt
next();
}//3
function next()
{
if(current >= (Imageslist.length-1))
current=0;
else
current ++;
setImage();
}
//4
function setImage()
    {
        document.getElementById("tmpImg").src=Imageslist[current];
		var tmpImg=document.getElementById("tmpImg");
		if(tmpImg.complete && !(op >0 && op < 100))
		{
			document.getElementById("img").src=Imageslist[current];
			ImgOpen();
			document.getElementById("loadImg").width="0";
			clearTimeout(loadT);
			
		}else{
			loadT=setTimeout("setImage()",10);
			document.getElementById("loadImg").width="35";
		}
		
    }
//5
function ImgOpen()
{
op++;
img=document.getElementById("img");
setOpacity(img,op);
t=setTimeout("ImgOpen()",10);
if(op >=100)
{
op=0;
clearTimeout(t);
}
}
//6
function setOpacity(obj, opacity) {
opacity = (opacity == 100)?99.999:opacity;
// IE/Win
obj.style.filter = "alpha(opacity:"+opacity+")";
// Safari<1.2, Konqueror
obj.style.KHTMLOpacity = opacity/100;
// Older Mozilla and Firefox
obj.style.MozOpacity = opacity/100;
// Safari 1.2, newer Firefox and Mozilla, CSS3
obj.style.opacity = opacity/100;
}

function nextt()
{
if(current >= (Imageslist.length-1))
current=0;
else
current ++;
setImagee();
}

	//لما كنت مشغلو وحط التالي في صور متقلب بسرعة رغم عدم فقس الزر لان شغلتو ومشت الحلقة فوقفتا بهي الطريقة
function setImagee()
    {clearTimeout(pt);
        document.getElementById("img").src=Imageslist[current];
		var img=document.getElementById("img");
		
		
		
    }

function prev()
{
if(current <= 0)
current = Imageslist.length-1;
else
current --;
setImagee();
}