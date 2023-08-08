
// Change background (.section2, index.html)

if (window.location.href.includes("/index.html")) {

  document.addEventListener('DOMContentLoaded', function () {
    const section2 = document.querySelector('.section-2');
    const headingOne = document.getElementById('headingOne');
    const headingTwo = document.getElementById('headingTwo');
    const headingThree = document.getElementById('headingThree');

    if (section2) {
      headingOne.addEventListener('click', function () {
        section2.style.background = 'url(../images/wine.jpg) center/cover no-repeat';
      });

      headingTwo.addEventListener('click', function () {
        section2.style.background = 'url(../images/jazz.jpeg) center/cover no-repeat';
      });

      headingThree.addEventListener('click', function () {
        section2.style.background = 'url(../images/meal.jpg) center/cover no-repeat';
      });
    }

  });
  
}


// Gallery (gallery.html)

if (window.location.href.includes("/gallery.html")) {


  function toggleFullScreen() {
    this.classList.toggle("full");
  }

  document.addEventListener('DOMContentLoaded', function () {
    const galleryImages = document.querySelectorAll(".gallery-image");
    for (let i of galleryImages) {
      i.onclick = toggleFullScreen;
    }
  });
  
}


// Form validation (reservations.html)

if (window.location.href.includes("/reservations.html")) {


  const userNameInput = document.getElementById("name")
  const userDateInput = document.getElementById("date")
  const userTimeInput = document.getElementById("time")
  const userGuestsInput = document.getElementById("guests")
  const submitButton = document.getElementById("submit")
  const resetButton = document.getElementById("reset")
  const reservationsResultElement = document.getElementById("reservationsresult")

  submitButton.addEventListener('click', function () {

    reservationsname.textContent = ""
    reservationsdate.textContent = ""
    reservationstime.textContent = ""
    reservationsguests.textContent = ""
    reservationsresult.textContent = ""
    reservationsResultElement.classList.remove("reservationsresult");
    console.log("Button CLicked")

    let userName = userNameInput.value.trim()
    let userDate = userDateInput.value
    let userTime = userTimeInput.value
    let userGuests = userGuestsInput.value
    console.log(userName)
    console.log(userDate)
    console.log(userTime)
    console.log(reservationsResultElement)

    switch (true) {
      case userName === "":
        reservationsname.textContent = "Please enter your name!"
        break;
      case userName.length <= 2:
        reservationsname.textContent = "Please enter 3 or more characters!"
        break;
      case /\d/.test(userName):
        reservationsname.textContent = "Name must contain letters only. Please check spelling!"
        break;
      case userDate === "":
        reservationsdate.textContent = "Please select a date!"
        break;
      case userTime === "":
        reservationstime.textContent = "Please select a time!"
        break;
      case userGuests === "":
        reservationsguests.textContent = "Please select number of guests!"
        break;
      case userGuests == 0:
        reservationsguests.textContent = "The number of guests must be greater than 0. Please check the entered value!"
        break;
      default:
        switch (true) {
          case userGuests == 1:
            reservationsResultElement.classList.add("reservationsresult");
            reservationsresult.textContent = `${userName}, thanks for your reservation!
          We will be happy to meet you on ${userDate} at ${userTime}`
            break;
          case userGuests > 1:
            reservationsResultElement.classList.add("reservationsresult");
            reservationsresult.textContent = `${userName}, thanks for reservation!
          We will be happy to meet your company of ${userGuests} people on ${userDate} at ${userTime}`
            break;
        }
        break;
    }
  });

  resetButton.addEventListener("click", function () {
    console.log("Button reset CLicked")
    reservationsname.textContent = ""
    reservationsdate.textContent = ""
    reservationstime.textContent = ""
    reservationsguests.textContent = ""
    reservationsresult.textContent = ""
    reservationsResultElement.classList.remove("reservationsresult");
    userNameInput.value = ""
    userDateInput.value = ""
    userTimeInput.value = ""
    userGuestsInput.value = ""
  });

}


// Form validation (contacts.html)

if (window.location.href.includes("contacts.html")) {

  const userNameInput = document.getElementById("name")
  const userEmailInput = document.getElementById("email")
  const userMessageInput = document.getElementById("message")
  const submitButton = document.getElementById("submit")
  const resetButton = document.getElementById("reset")
  const contactsResultElement = document.getElementById("contactsresult")

   submitButton.addEventListener('click', function () {

    contactsname.textContent = ""
    contactsemail.textContent = ""
    contactsmessage.textContent = ""
    contactsresult.textContent = ""
    contactsResultElement.classList.remove("contactsresult");
    console.log("Button CLicked")

    let userName = userNameInput.value.trim()
    let userEmail = userEmailInput.value
    let userMessage = userMessageInput.value
     
    const ValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     
    console.log(userName)
    console.log(userEmail)
    console.log(userMessage)
    console.log(contactsResultElement)

    switch (true) {
      case userName === "":
        contactsname.textContent = "Please enter your name!"
        break;
      case userName.length <= 2:
        contactsname.textContent = "Please enter 3 or more characters!"
        break;
      case /\d/.test(userName):
        contactsname.textContent = "Name must contain letters only. Please check spelling!"
        break;
      case userEmail === "":
        contactsemail.textContent = "Please enter your email!"
        break;
      case !(ValidEmail.test(userEmail)):
        contactsemail.textContent = "Please enter valid email!"
        break;
      case userMessage === "":
        contactsmessage.textContent = "Please enter your message!"
        break;
     case userMessage.length < 10 || userMessage.length > 300:
        contactsmessage.textContent = "Your message is too short or too long. Allowed number of characters - from 10 to 300"
        break;
      default:
        contactsResultElement.classList.add("contactsresult");
        contactsResultElement.textContent = `${userName}, thank you for your message! We will answer you as soon as possible to your email: ${userEmail}`
        break;
    }
  });

  resetButton.addEventListener("click", function () {
    console.log("Button reset CLicked")
    contactsname.textContent = ""
    contactsemail.textContent = ""
    contactsmessage.textContent = ""
    contactsresult.textContent = ""
    contactsResultElement.classList.remove("contactsresult");
    userNameInput.value = ""
    userEmailInput.value = ""
    userMessageInput.value = ""
  });

}