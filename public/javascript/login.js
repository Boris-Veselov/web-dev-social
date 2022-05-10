async function loginFormHandler(event) {
    event.preventDefault();
  
    const user = document.querySelector('#user').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (user && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          user,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
}
  
document.querySelector('.login').addEventListener('submit', loginFormHandler);
  