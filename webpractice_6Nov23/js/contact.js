document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Perform form validation
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields");
      return;
    }
  
    // Perform form submission (you can replace this with your own logic)
    alert("Form submitted successfully!");
  
    // Reset form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  });
  