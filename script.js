function getFormvalue() {
	 // Get the form element using its ID
    const form = document.getElementById("form1");
    // Get the values of the first and last name from the form elements
//form.elements = gives access to collection of all form controls (like input fields, buttons, etc.) within that form
    const firstName = form.elements["fname"].value;//getting particular fname formControl & itsValue
    const lastName = form.elements["lname"].value;
	const fullName = firstName + " " + lastName;
	alert(fullName)   
}
   
