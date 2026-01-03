function signup() {
  fetch("http://localhost:5000/api/auth/signup", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value
    })
  })
  .then(res => res.json())
  .then(data => {
    alert(data.message);
    if (data.message === "Signup successful")
      window.location.href = "login.html";
  });
}

function login() {
  fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      email: email.value,
      password: password.value
    })
  })
  .then(res => res.json())
  .then(data => alert(data.message));
}

function forgot() {
  fetch("http://localhost:5000/api/auth/forgot", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({ email: email.value })
  })
  .then(res => res.json())
  .then(data => alert(data.message));
}
