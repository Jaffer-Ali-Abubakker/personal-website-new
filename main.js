let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let Name = id("name"),
  Email = id("email"),
  form = id("contactform"),
  phoneNo = id("phone")
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(Name, 0, "Username cannot be blank");
  engine(Email, 1, "Email cannot be blank");
  engine(phoneNo,2, "at list 10 charater")
});

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
  } else {
    errorMsg[serial].innerHTML = "";
  }
};
