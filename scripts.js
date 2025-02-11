const adminCredentials = {
  username: "admin", // Set your desired admin username
  password: "password", // Set your desired admin password
};

document.getElementById("admin-link").addEventListener("click", function () {
  document.getElementById("admin-login-modal").classList.remove("hidden");
});

document
  .getElementById("admin-link-mobile")
  .addEventListener("click", function () {
    document.getElementById("admin-login-modal").classList.remove("hidden");
  });

function closeAdminLoginModal() {
  document.getElementById("admin-login-modal").classList.add("hidden");
}

document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("admin-username").value;
    var password = document.getElementById("admin-password").value;

    // Check against the defined admin credentials
    if (
      username === adminCredentials.username &&
      password === adminCredentials.password
    ) {
      document.getElementById("admin-login-modal").classList.add("hidden");
      window.location.href = "admin-dashboard.html"; // Admin Dashboard page
    } else {
      alert("Invalid username or password");
    }
  });

document.getElementById("menu-button").addEventListener("click", function () {
  var menu = document.getElementById("mobile-menu");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
document.getElementById("admin-link").addEventListener("click", function () {
  document.getElementById("admin-login-modal").classList.remove("hidden");
});

document
  .getElementById("admin-link-mobile")
  .addEventListener("click", function () {
    document.getElementById("admin-login-modal").classList.remove("hidden");
  });

function closeAdminLoginModal() {
  document.getElementById("admin-login-modal").classList.add("hidden");
}

document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("admin-username").value;
    var password = document.getElementById("admin-password").value;

    // Simple authentication check (replace with real authentication logic)
    if (username === "admin" && password === "password") {
      document.getElementById("admin-login-modal").classList.add("hidden");
      document.getElementById("admin").classList.remove("hidden");
    } else {
      alert("Invalid username or password");
    }
  });

function sendEmail(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var mailtoLink =
    "mailto:info@expertpestcontrolsydney.com?subject=Contact%20Form%20Submission&body=" +
    "Name: " +
    encodeURIComponent(name) +
    "%0A" +
    "Email: " +
    encodeURIComponent(email) +
    "%0A" +
    "Message: " +
    encodeURIComponent(message);
  window.location.href = mailtoLink;
}

let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");
const dots = document.querySelectorAll(".carousel-dot");
const totalItems = items.length;

function updateCarousel() {
  document.querySelector(".carousel-inner").style.transform = `translateX(-${
    currentIndex * 100
  }%)`;
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

function showNextItem() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
}

function showPrevItem() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
}

function goToItem(index) {
  currentIndex = index;
  updateCarousel();
}

setInterval(showNextItem, 100000);
