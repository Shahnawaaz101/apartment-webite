function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Your booking has been submitted. You will receive a confirmation email shortly.");
    // Add more complex logic here for handling the form submission to your backend
});
