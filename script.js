//Hamburger Button
(function() {
  var hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('nav'),

    doToggle: function(e) {
      e.preventDefault();
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    }
  };
  hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
  hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });
}());


//Dark-Light Mode
const toggleSwitch = document.querySelector("input[type='checkbox']");
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("icon");
const darkTheme = "dark";
const lightTheme = "light";

// toggle light / dark mode
function changeToDarkMode(isDark) {
  nav.style.backgroundColor = isDark
    ? "rgb(0 0 0 / 50%)"
    : "rgb(255 255 255 / 50%)";
  toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
  isDark
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
}

// Switch theme
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", darkTheme);
    localStorage.setItem("theme", darkTheme);
    changeToDarkMode(true);
  } else {
    document.documentElement.setAttribute("data-theme", lightTheme);
    localStorage.setItem("theme", lightTheme);
    changeToDarkMode(false);
  }
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === darkTheme) {
    toggleSwitch.checked = true;
    changeToDarkMode(true);
  }
}