const form = document.querySelector("form");


 let firstName = document.querySelector("#name");
 let email = document.querySelector("#email");
 let phone = document.querySelector("#phone");
 

 
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nameVale = firstName.value;
  let emailVale = email.value;
  let phoneVale = phone.value;
  

  if(nameVale == ""){
    firstName.classList.remove("int")
    firstName.classList.add("inp")

  }else{
    firstName.classList.remove("inp")
    firstName.classList.add("int")
  }

  if(emailVale == ""){
    email.classList.remove("int")
    email.classList.add("inp")

  }else{
    email.classList.remove("inp")
    email.classList.add("int")
  }

  if(phoneVale == ""){
    phone.classList.remove("int")
    phone.classList.add("inp")

  }else{
    phone.classList.remove("inp")
    phone.classList.add("int")
  }
 
});

