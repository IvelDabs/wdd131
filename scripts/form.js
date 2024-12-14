const products = [
  { id: 1, name: "Product A" },
  { id: 2, name: "Product B" },
  { id: 3, name: "Product C" },
];

// Populate the Product Name select options dynamically
const productSelect = document.getElementById("productName");
products.forEach((product) => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});

// Update review count using localStorage
if (localStorage.getItem("reviewCount")) {
  let reviewCount = parseInt(localStorage.getItem("reviewCount"));
  localStorage.setItem("reviewCount", reviewCount + 1);
} else {
  localStorage.setItem("reviewCount", 1);
}
