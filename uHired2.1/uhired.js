


$(document).ready(function() {
	$("#navigation ul a li").click(function(event) {
		$("#navigation li").removeClass("selected");
		$(this).addClass("selected");
	});
});

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