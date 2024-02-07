const studentData = [
	{
		rollNumber: 1,
		name: "Rahul R",
		class: "10th",
		contactNumber: "+91-8187820919",
		feesPaid: 500,
		feesDue: 500
	},
	{
		rollNumber: 2,
		name: "Satyavati S",
		class: "11th",
		contactNumber: "+91-7995467429",
		feesPaid: 750,
		feesDue: 250
	},
	{
		rollNumber: 3,
		name: "Vamsi V",
		class: "12th",
		contactNumber: "+91-8309486675",
		feesPaid: 1000,
		feesDue: 0
	},
	{
		rollNumber: 4,
		name: "Ashin A",
		class: "9th",
		contactNumber: "+91-9494567829",
		feesPaid: 300,
		feesDue: 700
	},
	{
		rollNumber: 5,
		name: "Kalyan K",
		class: "10th",
		contactNumber: "+91-6307894567",
		feesPaid: 400,
		feesDue: 600
	}
];

function searchStudent() {
	const searchInput = document.getElementById("searchInput");
	const searchTerm = searchInput.value.toLowerCase();
	const matchingStudents = studentData.filter(student => {
		return (
			student.rollNumber.toString().includes(searchTerm) ||
			student.name.toLowerCase().includes(searchTerm) ||
			student.class.toLowerCase().includes(searchTerm) ||
			student.contactNumber.includes(searchTerm)
		);
	});

	displayStudentData(matchingStudents);
}

function displayStudentData(students) {
    const studentDataDiv = document.getElementById("studentData");
    studentDataDiv.innerHTML = "";

    const resultContainer = document.createElement("div");
    resultContainer.style.backgroundColor = "rgba(255, 255, 255, 0.9)"; // Adjust the color and opacity as needed
    resultContainer.style.padding = "10px"; // Adjust the padding as needed

    if (students.length === 0) {
        resultContainer.innerHTML = "<p>No matching students found.</p>";
    } else {
        students.forEach(student => {
            const studentDiv = document.createElement("div");
            studentDiv.innerHTML = `
                <h2>${student.name}</h2>
                <p>Roll Number: ${student.rollNumber}</p>
                <p>Class: ${student.class}</p>
                <p>Contact Number: ${student.contactNumber}</p>
                <p>Fees Paid This Year: ${student.feesPaid}</p>
                <p>Fees Due: ${student.feesDue}</p>
            `;
            resultContainer.appendChild(studentDiv);
        });
    }

    studentDataDiv.appendChild(resultContainer);
    studentDataDiv.style.display = "block";
}

// Add an event listener for the "Enter" key
document.getElementById("searchInput").addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
        searchStudent();
    }
});
