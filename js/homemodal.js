function openSignUpModal() {
    var modal = document.getElementById("signUpModal");
    modal.style.display = "block";
    setTimeout(function() {
        modal.style.opacity = "1";
    }, 150); // Delay to ensure proper rendering
}

function closeSignUpModal() {
    var modal = document.getElementById("signUpModal");
    modal.style.opacity = "0";
    setTimeout(function() {
        modal.style.display = "none";
    }, 500); // Transition duration
}

function openLoginModal() {
    var modal = document.getElementById("loginModal");
    modal.style.display = "block";
    setTimeout(function() {
        modal.style.opacity = "1";
    }, 150); // Delay to ensure proper rendering
}

function closeLoginModal() {
    var modal = document.getElementById("loginModal");
    modal.style.opacity = "0";
    setTimeout(function() {
        modal.style.display = "none";
    }, 500); // Transition duration
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    var signUpModal = document.getElementById("signUpModal");
    var loginModal = document.getElementById("loginModal");
    if (event.target == signUpModal) {
        closeSignUpModal();
    }
    if (event.target == loginModal) {
        closeLoginModal();
    }
}