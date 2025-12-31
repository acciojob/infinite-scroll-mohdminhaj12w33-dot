const list = document.getElementById("infi-list");

let itemCount = 0;

// Add items to the list
function addItems(count) {
  for (let i = 0; i < count; i++) {
    itemCount++;
    const li = document.createElement("li");
    li.textContent = `Todo Item ${itemCount}`;
    list.appendChild(li);
  }
}

// ✅ Test requires 2 items by default
addItems(10);

// Infinite scroll on window
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 5
  ) {
    addItems(10);
  }
});
