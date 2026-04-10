export function loadAbout() {
  const contentDiv = document.getElementById("content");

  const section = document.createElement("div");
  section.classList.add("page-section");

  const heading = document.createElement("h1");
  heading.textContent = "About Us";

  const story = document.createElement("p");
  story.textContent =
    "Founded in 2010, our restaurant has been serving the community with passion and dedication. Our head chef, trained in France and Italy, brings international flavors to your table while maintaining a commitment to local, sustainable sourcing.";

  const missionHeading = document.createElement("h2");
  missionHeading.textContent = "Our Mission";

  const mission = document.createElement("p");
  mission.textContent =
    "To provide exceptional dining experiences through quality food, impeccable service, and a welcoming atmosphere for all our guests. We believe that great food brings people together.";

  const valuesHeading = document.createElement("h2");
  valuesHeading.textContent = "Our Values";

  const values = document.createElement("ul");
  values.innerHTML = `
    <li><strong>Quality:</strong> We use only the freshest ingredients</li>
    <li><strong>Integrity:</strong> Honest pricing and transparent practices</li>
    <li><strong>Community:</strong> Supporting local farmers and businesses</li>
    <li><strong>Excellence:</strong> Striving for perfection in every dish</li>
  `;

  const hoursHeading = document.createElement("h2");
  hoursHeading.textContent = "Hours of Operation";

  const hours = document.createElement("p");
  hours.innerHTML = `
    <strong>Monday - Thursday:</strong> 11am - 10pm<br>
    <strong>Friday - Saturday:</strong> 11am - 11pm<br>
    <strong>Sunday:</strong> 12pm - 9pm
  `;

  section.appendChild(heading);
  section.appendChild(story);
  section.appendChild(missionHeading);
  section.appendChild(mission);
  section.appendChild(valuesHeading);
  section.appendChild(values);
  section.appendChild(hoursHeading);
  section.appendChild(hours);

  contentDiv.appendChild(section);
}