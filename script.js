// Sample data
let originalData = [
  { name: "Alice Johnson", position: "Manager", department: "HR", salary: 75000 },
  { name: "Bob Smith", position: "Developer", department: "IT", salary: 82000 },
  { name: "Carol White", position: "Designer", department: "Marketing", salary: 68000 },
  { name: "David Brown", position: "Engineer", department: "Engineering", salary: 90000 },
  { name: "Emily Davis", position: "Analyst", department: "Finance", salary: 70000 }
];

let currentData = [...originalData];

// DOM Elements
const tableBody = document.getElementById("tableBody");
const searchInput = document.getElementById("searchInput");

// Render Table
function renderTable(data) {
  tableBody.innerHTML = "";
  data.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${row.name}</td>
      <td>${row.position}</td>
      <td>${row.department}</td>
      <td>$${row.salary.toLocaleString()}</td>
    `;
    tableBody.appendChild(tr);
  });
}

// Sort Table
function sortTable(key) {
  let direction = 1;
  if (currentData.length > 1 && currentData[0][key] <= currentData[1][key]) {
    direction = -1;
  }

  currentData.sort((a, b) => {
    if (a[key] < b[key]) return -direction;
    if (a[key] > b[key]) return direction;
    return 0;
  });

  renderTable(currentData);
}

// Search Filter
searchInput.addEventListener("input", function () {
  const term = this.value.toLowerCase();
  const filtered = originalData.filter((item) =>
    item.name.toLowerCase().includes(term)
  );
  currentData = [...filtered];
  renderTable(currentData);
});

// Initial render
renderTable(originalData);
