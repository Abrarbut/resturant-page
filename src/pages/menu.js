export function loadMenu() {
  const contentDiv = document.getElementById("content");

  const section = document.createElement("div");
  section.classList.add("page-section");

  const heading = document.createElement("h1");
  heading.textContent = "Our Menu";

  section.appendChild(heading);

  const menuItems = [
    {
      name: "Grilled Salmon",
      price: "$18.99",
      description: "Fresh Atlantic salmon with herb butter and seasonal vegetables",
    },
    {
      name: "Ribeye Steak",
      price: "$24.99",
      description: "Premium 12oz cut with garlic mashed potatoes and truffle sauce",
    },
    {
      name: "Vegetarian Pasta",
      price: "$14.99",
      description: "Penne with fresh tomatoes, basil, and creamy ricotta",
    },
    {
      name: "Chicken Parmesan",
      price: "$16.99",
      description: "Crispy chicken breast with marinara and melted mozzarella",
    },
    {
      name: "Lobster Bisque",
      price: "$12.99",
      description: "Creamy soup with fresh lobster meat and sherry",
    },
    {
      name: "Chocolate Cake",
      price: "$8.99",
      description: "Decadent dark chocolate dessert with vanilla ice cream",
    },
  ];

  menuItems.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("menu-item");

    const namePrice = document.createElement("h3");
    namePrice.innerHTML = `${item.name} <span class="price">${item.price}</span>`;

    const description = document.createElement("p");
    description.textContent = item.description;

    itemDiv.appendChild(namePrice);
    itemDiv.appendChild(description);
    section.appendChild(itemDiv);
  });

  contentDiv.appendChild(section);
}