export function loadHome() {
  const contentDiv = document.getElementById("content");

  const section = document.createElement("div");
  section.classList.add("page-section");

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Our Restaurant";

  const description = document.createElement("p");
  description.textContent = "Experience the finest dining with our authentic cuisine, warm ambiance, and exceptional service. We pride ourselves on using fresh, locally-sourced ingredients to create unforgettable meals.";

  const subHeading = document.createElement("h2");
  subHeading.textContent = "Why Choose Us?";

  const features = document.createElement("ul");
  features.innerHTML = `
    <li>🌟 Premium quality ingredients sourced locally</li>
    <li>👨‍🍳 Expert culinary team with international experience</li>
    <li>🏠 Cozy and welcoming atmosphere</li>
    <li>🎉 Catering and private events available</li>
    <li>⭐ 5-star customer satisfaction</li>
  `;

  section.appendChild(heading);
  section.appendChild(description);
  section.appendChild(subHeading);
  section.appendChild(features);

  contentDiv.appendChild(section);
}