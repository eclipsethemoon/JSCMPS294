function checkempty() {
	var errormessage = "";
	var name = document.getElementById('name').value;
	var company = document.getElementById('company').value;
	var email = document.getElementById('email').value;
	var phoneNum = document.getElementById('phoneNumber').value;
	var website = document.getElementById('website').value;
	if(name == ""){
		errormessage += "Enter your Name \n";
		document.getElementById('name').style.borderColor = "red";
	}
	if(email == ""){
		errormessage += "Enter your email \n";
		document.getElementById('email').style.borderColor = "red";
	}
	if(website == ""){
		errormessage += "Enter your website \n";
		document.getElementById('website').style.borderColor = "red";
	}
	if (errormessage != "") {
		alert(errormessage);
		return false;

	}

	if(!validateEmail(email)){
		errormessage +="Email address is not valid \n";
		document.getElementById('email').style.borderColor = "red";
	}
	if(!validatePhoneNumber(phoneNum)){
		errormessage += "Phone number is not valid \n";
		document.getElementById('phoneNumber').style.borderColor = "red";
	}
	if(!validateWebsite(website)){
		errormessage += "Website is not valid \n";
		document.getElementById('website').style.borderColor = "red";

	}
	if (errormessage != "") {
		alert(errormessage);
		return false;

	}
}
function validateEmail(inputvalue){
	var emailRegExp = /[\w\.\S]+@\w+\.\S+/igm;
	return emailRegExp.test(inputvalue);
}
function validatePhoneNumber(inputvalue) {
	var phoneRegExp =/\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}/igm;
	return phoneRegExp.test(inputvalue);
}
function validateWebsite(inputvalue){
	var websiteRegExp = /www\.(\S+).(com|edu|org|net)/igm;
	return websiteRegExp.test(inputvalue);
}
