// ================= DATA =================
const students = [
    { name: "Rahul", marks: 85, course: "CSE" },
    { name: "Anjali", marks: 72, course: "ECE" },
    { name: "Kiran", marks: 90, course: "CSE" },
    { name: "Sneha", marks: 65, course: "ME" },
    { name: "Arjun", marks: 88, course: "CSE" }
];

const products = [
    { name: "Rice", price: 50 },
    { name: "Oil", price: 150 },
    { name: "Sugar", price: 40 },
    { name: "Milk", price: 60 }
];

// ================= DOM =================
const tableBody = document.getElementById("tableBody");
const resultBox = document.getElementById("result");

// ================= DISPLAY FUNCTION =================
function renderTable(data) {
    tableBody.innerHTML = data.map(s => `
        <tr>
            <td>${s.name}</td>
            <td>${s.marks}</td>
            <td>${s.course}</td>
        </tr>
    `).join("");
}

// ================= STUDENT OPERATIONS =================

// Show all students
const showAllStudents = () => renderTable(students);

// Filter marks > 80
const filterTopStudents = () => {
    const filtered = students.filter(s => s.marks > 80);
    renderTable(filtered);
};

// Count courses
const getCourseCount = () => {
    const count = students.reduce((acc, s) => {
        acc[s.course] = (acc[s.course] || 0) + 1;
        return acc;
    }, {});

    resultBox.innerText =
        `CSE: ${count.CSE || 0} | ECE: ${count.ECE || 0} | ME: ${count.ME || 0}`;
};

// Only CSE students
const showOnlyCSE = () => {
    renderTable(students.filter(s => s.course === "CSE"));
};

// Convert names to uppercase
const showUppercaseNames = () => {
    const updated = students.map(s => ({
        ...s,
        name: s.name.toUpperCase()
    }));
    renderTable(updated);
};

// ================= PRODUCT OPERATIONS =================

// Check expensive product (>100)
const hasExpensiveProduct = () => {
    const exists = products.some(p => p.price > 100);

    resultBox.innerText = exists
        ? "⚠️ Expensive product found!"
        : "✅ No expensive products";
};

// Calculate total price
const calculateTotalPrice = () => {
    const total = products.reduce((sum, p) => sum + p.price, 0);

    resultBox.innerText = `💰 Total Price: ₹${total}`;
};