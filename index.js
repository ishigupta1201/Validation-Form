document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('validationForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      if (validateForm()) {
        // Form is valid, you can proceed with submission or other actions
        alert('Form is valid! Submitting...');
        form.reset(); // Reset the form after successful submission
      }
    });
  
    // Check if the form is valid or not 
    function validateForm() {
      let isValid = true;
  
      // Validate Full Name
      const fullNameInput = document.getElementById('fullName');
      if (fullNameInput.value.length < 5) {
        fullNameInput.classList.add('is-invalid');
        isValid = false;
      } else {
        fullNameInput.classList.remove('is-invalid');
      }
  
      // Validate Email
      const emailInput = document.getElementById('email');
      if (!isValidEmail(emailInput.value)) {
        emailInput.classList.add('is-invalid');
        isValid = false;
      } else {
        emailInput.classList.remove('is-invalid');
      }
  
      // Validate Phone Number
      const phoneInput = document.getElementById('phone');
      if (!isValidPhoneNumber(phoneInput.value)) {
        phoneInput.classList.add('is-invalid');
        isValid = false;
      } else {
        phoneInput.classList.remove('is-invalid');
      }
  
      // Validate Password
      const passwordInput = document.getElementById('password');
      const confirmPasswordInput = document.getElementById('confirmPassword');
      if (passwordInput.value.length < 8 || passwordInput.value.toLowerCase() === 'password' || passwordInput.value.toLowerCase() === fullNameInput.value.toLowerCase() || passwordInput.value !== confirmPasswordInput.value) {
        passwordInput.classList.add('is-invalid');
        confirmPasswordInput.classList.add('is-invalid');
        isValid = false;
      } else {
        passwordInput.classList.remove('is-invalid');
        confirmPasswordInput.classList.remove('is-invalid');
      }
  
      return isValid;
    }
  
    // Funtion to check if the email is valid
    function isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    }
  
    // Funtion to check if the phone number is valid
    function isValidPhoneNumber(phone) {
      return /^\d{10}$/.test(phone) && phone !== '1234567890';
    }
  });
  