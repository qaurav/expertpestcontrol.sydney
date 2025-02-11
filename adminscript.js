let bookings = [
  {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    service: "Termite Control",
    date: "2025-02-10",
    status: "Pending",
  },
  {
    name: "Jane Smith",
    email: "janesmith@example.com",
    phone: "987-654-3210",
    service: "Residential Pest Control",
    date: "2025-02-12",
    status: "Pending",
  },
];

function loadBookings() {
  const bookingList = document.getElementById("booking-list");
  bookingList.innerHTML = "";
  bookings.forEach((booking, index) => {
    bookingList.innerHTML += `
                    <tr class="border">
                        <td class="p-3 border">${booking.name}</td>
                        <td class="p-3 border">${booking.email}</td>
                        <td class="p-3 border">${booking.phone}</td>
                        <td class="p-3 border">${booking.service}</td>
                        <td class="p-3 border">${booking.date}</td>
                        <td class="p-3 border">${booking.status}</td>
                        <td class="p-3 border">
                            ${
                              booking.status === "Pending"
                                ? `
                                <button class="bg-blue-500 text-white px-3 py-1 rounded" onclick="editBooking(${index})">Edit</button>
                                <button class="bg-red-500 text-white px-3 py-1 rounded" onclick="deleteBooking(${index})">Delete</button>
                                <button class="bg-green-500 text-white px-3 py-1 rounded" onclick="completeBooking(${index})">Complete</button>
                            `
                                : ""
                            }
                        </td>
                    </tr>
                `;
  });

  const bookingHistory = document.getElementById("booking-history");
  bookingHistory.innerHTML = "";
  bookings.forEach((booking, index) => {
    bookingHistory.innerHTML += `
                    <tr class="border">
                        <td class="p-3 border">${booking.name}</td>
                        <td class="p-3 border">${booking.email}</td>
                        <td class="p-3 border">${booking.phone}</td>
                        <td class="p-3 border">${booking.service}</td>
                        <td class="p-3 border">${booking.date}</td>
                        <td class="p-3 border">${booking.status}</td>
                    </tr>
                `;
  });

  document.getElementById("total-bookings").innerText = bookings.length;
  document.getElementById("upcoming-bookings").innerText = bookings.filter(
    (booking) => new Date(booking.date) > new Date()
  ).length;
  document.getElementById("completed-bookings").innerText = bookings.filter(
    (booking) => booking.status === "Completed"
  ).length;

  // Dummy data for website analytics
  document.getElementById("number-of-visits").innerText = 1500;
  document.getElementById("bookings-through-website").innerText = 1200;
  document.getElementById("bookings-by-admin").innerText = 300;
}

function deleteBooking(index) {
  bookings.splice(index, 1);
  loadBookings();
}

function editBooking(index) {
  const booking = bookings[index];
  document.getElementById("name").value = booking.name;
  document.getElementById("email").value = booking.email;
  document.getElementById("phone").value = booking.phone;
  document.getElementById("service").value = booking.service;
  document.getElementById("date").value = booking.date;
  document.getElementById("booking-index").value = index;
  showBookings();
}

function completeBooking(index) {
  bookings[index].status = "Completed";
  loadBookings();
}

function addOrUpdateBooking() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const index = document.getElementById("booking-index").value;

  if (name && email && phone && service && date) {
    if (index === "") {
      bookings.push({ name, email, phone, service, date, status: "Pending" });
    } else {
      bookings[index] = {
        name,
        email,
        phone,
        service,
        date,
        status: "Pending",
      };
    }
    loadBookings();
    alert("Booking saved successfully!");
    document.getElementById("booking-form").reset();
    document.getElementById("booking-index").value = "";
  } else {
    alert("Please fill in all fields.");
  }
}

function showDashboard() {
  document.getElementById("dashboard-section").classList.remove("hidden");
  document.getElementById("bookings-section").classList.add("hidden");
}

function showBookings() {
  document.getElementById("dashboard-section").classList.add("hidden");
  document.getElementById("bookings-section").classList.remove("hidden");
  loadBookings();
}

function logout() {
  window.location.href = "index.html";
}

window.onload = loadBookings;
