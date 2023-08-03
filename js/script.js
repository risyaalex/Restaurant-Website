
document.addEventListener("DOMContentLoaded", function () {
    // Mobile menu show
    document.querySelector(".navbar-toggle").addEventListener("click", function () {
      var links = document.querySelectorAll(".navbar-menu");
      for (var i = 0; i < links.length; i++) {
        links[i].classList.toggle("active");
      }
    });
    // Mobile menu closes on click
    var menuItems = document.querySelectorAll(".navbar-menu");
        for (var i = 0; i < menuItems.length; i++) {
            menuItems[i].addEventListener("click", function () {
            var links = document.querySelectorAll(".navbar-menu");
            for (var i = 0; i < links.length; i++) {
                links[i].classList.remove("active"); 
        }
        });
    }
    // Active menu item on click
    var menuLinks = document.querySelectorAll(".navbar-menu a");
    menuLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
        menuLinks.forEach(function(link) {
            link.classList.remove("mark");
            });
        this.classList.add("mark");
        });
    });
    
});