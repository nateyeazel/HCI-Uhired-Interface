

			


$(document).ready(function() {
	$("#navigation ul a li").click(function(event) {
		$("#navigation li").removeClass("selected");
		$(this).addClass("selected");
	});
	/*$(function(){
	$("#workStudyFilter").on('click',function(){
		if($(this).prop('checked')) {
			$(".workstudy").display = "block";
		}
		else {
			$(".workstudy").display = "none";
		}
	})
});*/
});
function getElementsByClassName(classname, node)  {
    if(!node) node = document.getElementsByTagName("body")[0];
    var a = [];
    var re = new RegExp('\\b' + classname + '\\b');
    var els = node.getElementsByTagName("*");
    for(var i=0,j=els.length; i<j; i++)
        if(re.test(els[i].className))a.push(els[i]);
    return a;
}

function filterWorkStudy() {
	var elements = new Array();
	elements = getElementsByClassName('workstudy');
	if(document.getElementById('workStudyFilter').checked) {
		for(i in elements ){
		elements[i].style.display = "none";
		};
	}
	else {
	for(i in elements ){
		elements[i].style.display = "block";
		};
	}
}

function filterNonWorkStudy() {
	var elements = new Array();
	elements = getElementsByClassName('nonworkstudy');
	if(document.getElementById('nonWorkStudyFilter').checked) {
		for(i in elements ){
		elements[i].style.display = "none";
		};
	}
	else {
	for(i in elements ){
		elements[i].style.display = "block";
		};
	}
}
function createlightboxregister() {
	document.getElementById('lightreg').style.display='block';
	document.getElementById('fade').style.display='block';
}

function closelightbox() {
	document.getElementById('lightreg').style.display='none';
	document.getElementById('lightlogin').style.display='none';
	document.getElementById('fade').style.display='none';
}

function createlightboxlogin() {
	document.getElementById('lightlogin').style.display='block';
	document.getElementById('fade').style.display='block';
}



function createJobDesc(characteristic) {
	document.getElementById(characteristic).style.display='block';
	document.getElementById('fade').style.display='block';
}

function closeJobDesc(characteristic) {
	document.getElementById(characteristic).style.display='none';
	document.getElementById('fade').style.display='none';
}



$(window).click(function(){
  $(".popupdescription").stop().animate({"marginTop": ($(window).scrollTop()) - 15 + "px"});
});

