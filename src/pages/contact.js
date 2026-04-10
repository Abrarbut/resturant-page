export function loadContact() {
  const contentDiv = document.getElementById("content");

  const section = document.createElement("div");
  section.classList.add("page-section");

  const heading = document.createElement("h1");
  heading.textContent = "Contact Us";

  const contactInfoDiv = document.createElement("div");
  contactInfoDiv.classList.add("contact-info");

  const phone = document.createElement("p");
  phone.innerHTML = "<strong>📞 Phone:</strong> (555) 123-4567";

  const email = document.createElement("p");
  email.innerHTML =
    '<strong>📧 Email:</strong> <a href="mailto:info@restaurant.com">info@restaurant.com</a>';

  const address = document.createElement("p");
  address.innerHTML =
    "<strong>📍 Address:</strong> 123 Main Street, Your City, ST 12345";

  const hours = document.createElement("p");
  hours.innerHTML =
    "<strong>🕐 Hours:</strong> Open daily. See About page for details.";

  contactInfoDiv.appendChild(phone);
  contactInfoDiv.appendChild(email);
  contactInfoDiv.appendChild(address);
  contactInfoDiv.appendChild(hours);

  const formHeading = document.createElement("h2");
  formHeading.textContent = "Send us a Message";

  const form = document.createElement("form");
  form.innerHTML = `
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
    </div>
    <div>
      <label for="message">Message:</label>
      <textarea id="message" name="message" required rows="5"></textarea>
    </div>
    <button type="submit">Send Message</button>
  `;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    form.reset();
  });

  section.appendChild(heading);
  section.appendChild(contactInfoDiv);
  section.appendChild(formHeading);
  section.appendChild(form);

  contentDiv.appendChild(section);
}