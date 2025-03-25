const form = document.querySelector("form");
form.addEventListener("submit", (e) => {

    e.preventDefault();

  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    phone: e.target.phone.value,
    reason: e.target.reason.value,
    message: e.target.message.value,
  };

  renderConfirmation(formData);
});

const renderConfirmation = (formData) => {
    const h2 = document.createElement("h2");
    h2.textContent = "Submission Confirmation";
  
  const nameP = document.createElement("p");
  nameP.textContent = formData.name;
  
  const emailP = document.createElement("p");
  emailP.textContent = formData.email;
  
  const phoneP = document.createElement("p");
  phoneP.textContent = formData.phone;
  
  const reasonP = document.createElement("p");
  reasonP.textContent = formData.reason;
  
  const messageP = document.createElement("p");
  messageP.textContent = formData.message;
  
  const section = document.querySelector("section");
  section.innerHTML = "";
  
  section.append(h2, nameP, emailP, phoneP, reasonP, messageP);
  };
  
  