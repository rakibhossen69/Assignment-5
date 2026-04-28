const signBtn = document.getElementById("sign-btn");
signBtn.addEventListener("click", () => {
  const inputForm = document.getElementById("input");
  const name = inputForm.value;
  const password = document.getElementById("password-form").value;
  if( !password || !name){
    alert("please provide  email and password")

  }
   else if (name === "admin" && password =="admin123") {
    alert ("Login successful")
    window.location.href="../html/home.html"
  } else {
    alert("does not match");
  }
});
