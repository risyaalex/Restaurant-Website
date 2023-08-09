
// Change background (.section2, index.html)



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
  



// Gallery (gallery.html)




  function toggleFullScreen() {
    this.classList.toggle("full");
  }

  document.addEventListener('DOMContentLoaded', function () {
    const galleryImages = document.querySelectorAll(".gallery-image");
    for (let i of galleryImages) {
      i.onclick = toggleFullScreen;
    }
  });
  


// Form validation (reservations.html)

  const userNameInput = document.getElementById("name")
  const userDateInput = document.getElementById("date")
  const userTimeInput = document.getElementById("time")
  const userGuestsInput = document.getElementById("guests")
  const submitReservationsButton = document.getElementById("submitReservationsButton")
  const resetReservationsButton = document.getElementById("resetReservationsButton")
  const reservationsResultElement = document.getElementById("reservationsresult")
  
if (userGuestsInput) {

 // // Monday selection disabled

  userDateInput.addEventListener("change", function () {
    reservationsname.textContent = ""
    reservationsdate.textContent = ""
    let selectedDate = new Date(userDateInput.value)
    let day = selectedDate.getDay()

    console.log(day)

    if (day === 0) {
      reservationsdate.textContent = "Sorry we are closed on Monday :("
      userDateInput.value = ""
    }

  });
  // end

  // // Time selection disabled

  userTimeInput.addEventListener("change", function () {
    reservationstime.textContent = ""
    let selectedDate = new Date(userDateInput.value)
    let day = selectedDate.getDay()

    if (isNaN(day)) {
        reservationstime.textContent = `Sorry, visiting day not selected! `
      userTimeInput.value = ""
      return
    }

    let selectedTime = userTimeInput.value
    const selectedHour = new Date(`2000-01-01T${selectedTime}`).getHours();

    console.log(day)

    if (day == 1 || day == 2 || day == 3) {
      if (selectedHour >= 16 && selectedHour <= 22) {
        console.log(selectedHour)
      } else {
        reservationstime.textContent = `Sorry, our restaurant opening hours on this day are from 4pm to 11pm. Please select a valid time!`
        userTimeInput.value = ""
      }
    }
    if (day == 4 || day == 5 || day == 6) {
      if (selectedHour >= 13 && selectedHour <= 23) {
        console.log(selectedHour)
      } else {
        reservationstime.textContent = `Sorry, our restaurant opening hours on this day are from 1pm to 12am. Please select a valid time!`
        userTimeInput.value = ""
      }     
    }

  });

  // end

submitReservationsButton.addEventListener('click', function () {

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
    case userGuests <= 0:
      reservationsguests.textContent = "The number of guests must be greater than 0. Please check the entered value!"
      break;
    case userGuests >= 10:
      let reservationsGuestsHtml = "The maximum number of guests should be no more than 10. If you want to book our restaurant for a group of more than 10 people, please contact our administrator <a href=\"mailto:info@malmorestaurant.com.aa\">info@malmorestaurant.com.aa</a>"
      reservationsguests.innerHTML = reservationsGuestsHtml;
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

resetReservationsButton.addEventListener("click", function () {
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

  const userEmailInput = document.getElementById("email")
  const userMessageInput = document.getElementById("message")
  const submitContactsButton  = document.getElementById("submitContactsButton")
  const resetContactsButton = document.getElementById("resetContactsButton")
  const contactsResultElement = document.getElementById("contactsresult")
  
  if (userEmailInput) {

  submitContactsButton.addEventListener('click', function () {

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


  resetContactsButton.addEventListener("click", function () {
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