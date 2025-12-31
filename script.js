const list = document.getElementById("list");
const container = document.getElementById("container");

let itemCount = 0;

// Function to add list items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    itemCount++;
    const li = document.createElement("li");
    li.textContent = `List Item ${itemCount}`;
    list.appendChild(li);
  }
}

// Add 10 items by default
addItems(10);

// Detect when user reaches end of list
container.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = container;

  // If user reached bottom
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    addItems(2);
  }
});


