document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    let errorMessage = document.getElementById('error-msg');
    errorMessage.style.display = 'none';
    
    
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    
    
    if (email === '' || password === '') {
      errorMessage.textContent = 'Email and password are required.';
      errorMessage.style.display = 'block';
      return; 
    }
    
    if (password.length < 8) {
      errorMessage.textContent = 'Password must be at least 8 characters long.';
      errorMessage.style.display = 'block';
      return;
    }
    
    
    let loginData = {
      email: email,
      password: password
    };
    
    console.log('Login data:', loginData);
    

    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    
    
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';
  });