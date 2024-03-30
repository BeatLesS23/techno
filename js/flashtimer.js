  // Set the target date to today at 11:59 PM
  let targetDate = new Date();
  targetDate.setHours(23, 59, 0, 0);

  // Update the countdown every second
  const timerInterval = setInterval(updateCountdown, 1000);

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Calculate hours, minutes, and seconds
    const hours = Math.floor(distance / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.querySelector(".hours").textContent = hours.toString().padStart(2, '0');
    document.querySelector(".minutes").textContent = minutes.toString().padStart(2, '0');
    document.querySelector(".seconds").textContent = seconds.toString().padStart(2, '0');

    // If the countdown is finished, clear the interval
    if (distance < 0) {
      clearInterval(timerInterval);
      document.getElementById("timer").innerHTML = "EXPIRED";
    }
  }

  // Initial call to start the countdown
  updateCountdown();