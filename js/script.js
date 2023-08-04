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