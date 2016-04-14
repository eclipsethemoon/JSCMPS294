function checkempty() {
	var errormessage = "";
	if(document.getElementById('name').value == ""){
		errormessage += "Enter your Name \n";
		document.getElementById('name').style.borderColor = "red";
	}
	if(document.getElementById('email').value == ""){
		errormessage += "Enter your email \n";
		document.getElementById('email').style.borderColor = "red";
	}
	if(document.getElementById('website').value == ""){
		errormessage += "Enter your website \n";
		document.getElementById('website').style.borderColor = "red";
	}
	if (errormessage != "") {
		alert(errormessage);
		return false;

	}
}
function validateEmail(email){
	var emailRegExp = /[\w\.\S]+@\w+\.\S+/igm;
	return
}
function validatePhoneNumber() {
	var phoneRegExp =/\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}/igm;
}
function validateWebsite(){
	var websiteRegExp = /www\.(\S+).(com|edu|org|net)/igm;
}
