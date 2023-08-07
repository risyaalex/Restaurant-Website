document.addEventListener('DOMContentLoaded', function () {
    // Change background (.section2, index.html)
  const section2 = document.querySelector('.section-2');
  const headingOne = document.getElementById('headingOne');
  const headingTwo = document.getElementById('headingTwo');
  const headingThree = document.getElementById('headingThree');

  headingOne.addEventListener('click', function() {
    section2.style.background = 'url(../images/wine.jpg) center/cover no-repeat';
  });

  headingTwo.addEventListener('click', function() {
    section2.style.background = 'url(../images/jazz.jpeg) center/cover no-repeat';
  });

  headingThree.addEventListener('click', function() {
    section2.style.background = 'url(../images/meal.jpg) center/cover no-repeat';
  });

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
