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