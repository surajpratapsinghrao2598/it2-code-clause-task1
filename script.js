/* script.js */
let countdownDate;

document.addEventListener('DOMContentLoaded', () => {
    $('#dateModal').modal('show'); // Show the modal on page load

    document.getElementById('start-countdown').addEventListener('click', () => {
        const inputDate = document.getElementById('countdown-date').value;
        if (inputDate) {
            countdownDate = new Date(inputDate).getTime();
            $('#dateModal').modal('hide'); // Hide the modal
            startCountdown(); // Start the countdown
        } else {
            alert("Please enter a valid date and time.");
        }
    });
});

const startCountdown = () => {
    const countdown = () => {
        const now = new Date().getTime();
        const timeLeft = countdownDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").querySelector('span').innerHTML = days + " Days";
        document.getElementById("hours").querySelector('span').innerHTML = hours + " Hours";
        document.getElementById("minutes").querySelector('span').innerHTML = minutes + " Minutes";
        document.getElementById("seconds").querySelector('span').innerHTML = seconds + " Seconds";

        if (timeLeft < 0) {
            clearInterval(timerInterval);
            document.getElementById("countdown").innerHTML = "The event has started!";
        }
    }

    const timerInterval = setInterval(countdown, 1000);
}
