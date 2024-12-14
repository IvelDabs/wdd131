const coffeeBeans = [
  {
    name: "Arabica",
    description: "Smooth and sweet flavor, often grown at higher altitudes.",
  },
  {
    name: "Robusta",
    description: "Stronger, more bitter bean, often used in espresso.",
  },
  // Add more coffee bean types here
];

const coffeeBeansList = document.getElementById("coffee-beans-list");

coffeeBeans.forEach((bean) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `<strong>${bean.name}:</strong> ${bean.description}`;
  coffeeBeansList.appendChild(listItem);
});
