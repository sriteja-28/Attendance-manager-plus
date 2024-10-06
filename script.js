// public/script.js
document.getElementById("attendanceForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var form = event.target;
    var formData = new FormData(form);
    var studentName = formData.get("studentName");
    var attendanceStatus = formData.get("attendanceStatus");
    markAttendance(studentName, attendanceStatus);
});

function markAttendance(studentName, attendanceStatus) {
    fetch('/mark-attendance', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            studentName: studentName,
            attendanceStatus: attendanceStatus
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
        // Optionally, display a message to the user indicating success
    })
    .catch(error => {
        console.error('Error marking attendance:', error);
        // Optionally, display an error message to the user
    });
}
