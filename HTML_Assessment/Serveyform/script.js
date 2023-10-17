function submitForm() {
  // Get form data
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const dob = document.getElementById("dob").value;
  const country = document.getElementById("country").value;
  const gender = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
  const profession = document.getElementById("profession").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;

  // Check if all fields are filled
  if (firstName && lastName && dob && country && gender.length > 0 && profession && email && mobile) {
    // Create a string with the collected data
    const dataString = `
      First Name: ${firstName}
      Last Name: ${lastName}
      Date of Birth: ${dob}
      Country: ${country}
      Gender: ${gender.join(', ')}
      Profession: ${profession}
      Email: ${email}
      Mobile Number: ${mobile}
    `;

    // Display the collected data in a popup
    const popupData = document.getElementById("popupData");
    popupData.innerHTML = dataString;
    document.getElementById("popup").style.display = "block";

    // Reset the form
    resetForm();
  } else {
    alert("Please fill in all the required fields.");
  }
}

function resetForm() {
  const form = document.getElementById("surveyForm");
  form.reset();
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
