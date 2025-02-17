document.addEventListener("DOMContentLoaded", function() {
    function toggleDetails() {
        const condition = document.getElementById("condition").value;
        const data = document.getElementById("unwell-data");

        if (condition === "bad") {
            data.style.display = "block";
        } else {
            data.style.display = "none";
        }
    }
    document.getElementById("condition").addEventListener("change", toggleDetails);
    toggleDetails();


    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;
});


// filepath: /workspaces/B-Motivation-Log/physical-management-page/physical-management-page.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form-container');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const date = document.getElementById('date').value;
        const temperature = document.getElementById('temperature').value;
        const condition = document.getElementById('condition').value;
        const reasonUnwell = document.getElementById('reason-unwell').value;

        const data = {
            date,
            temperature,
            condition,
            reasonUnwell
        };

        let logs = JSON.parse(localStorage.getItem('healthLogs')) || [];
        logs.push(data);
        localStorage.setItem('healthLogs', JSON.stringify(logs));

        alert('データが保存されました');
    });
});