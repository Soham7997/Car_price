document.addEventListener("DOMContentLoaded", function () {
    const frontPage = document.querySelector(".front-page");
    const backgroundImage = document.querySelector(".background-image");
    const knowMoreContainer = document.querySelector(".know-more-container");
    const loginButtonContainer = document.querySelector(".login-button-container");
    const translucentSlide = document.getElementById("translucent-slide");
    const loginButton = document.getElementById("login-button");
    const cancelButton = document.getElementById("cancel-button");

    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");
    const toLogin = document.getElementById("to-login");
    const toSignup = document.getElementById("to-signup");

    // Fade out front page after 2 seconds
    setTimeout(() => {
        frontPage.classList.add("fade-out");
        backgroundImage.classList.add("show");
        setTimeout(() => {
            frontPage.style.display = "none"; // Hide front page after fade-out
        }, 500); // Match this duration with the fade-out transition
    }, 2000);

    // Move the "know more" text after 2.5 seconds
    setTimeout(() => {
        knowMoreContainer.classList.add("shrink");
        loginButtonContainer.style.opacity = 1; // Show the login button
        loginButtonContainer.style.transition = 'opacity 1s ease-in-out'; // Smooth opacity transition
    }, 2500);

    // Show translucent slide on login button click
    loginButton.addEventListener("click", () => {
        translucentSlide.classList.add("show");
    });

    // Hide translucent slide on cancel button click
    cancelButton.addEventListener("click", () => {
        translucentSlide.classList.remove("show");
    });

    // Switch to login form
    toLogin.addEventListener("click", (e) => {
        e.preventDefault();
        signupForm.style.display = "none";
        loginForm.style.display = "block";
    });

    // Switch to signup form
    toSignup.addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    });

// Handle signup form submission
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Get form elements
        var username = document.getElementById('first_name').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirm_password').value;
        
        // Basic validation
        if (username && email && password && confirmPassword) {
            if (password === confirmPassword) {
                // Redirect to "xyz" link if all fields are filled and passwords match
                window.location.href = 'https://icarprice.streamlit.app/';
            } else {
                // Alert user if passwords do not match
                alert('Passwords do not match.');
            }
        } else {
            // Alert user to fill all fields
            alert('Please fill in all fields.');
        }
    });
});





    
    // Event listeners for About Us section
document.getElementById('about-us-button').addEventListener('click', () => {
    document.getElementById('about-us-slide').style.display = 'flex';
});

document.querySelector('#about-us-slide').addEventListener('click', (event) => {
    if (event.target === document.querySelector('#about-us-slide')) {
        document.querySelector('#about-us-slide').style.display = 'none';
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        document.querySelector('#about-us-slide').style.display = 'none';
    }
});
document.getElementById('company-overview-button').addEventListener('click', () => {
    document.getElementById('company-overview-slide').style.display = 'flex';
});

// Close the company overview slide when clicking outside the content
document.getElementById('company-overview-slide').addEventListener('click', (event) => {
    if (event.target === document.getElementById('company-overview-slide')) {
        document.getElementById('company-overview-slide').style.display = 'none';
    }
});

// Close the company overview slide when pressing the 'Escape' key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        document.getElementById('company-overview-slide').style.display = 'none';
    }
});
document.getElementById('customer-care-button').addEventListener('click', () => {
    document.getElementById('customer-care-slide').style.display = 'flex';
});

// Close the customer care slide when clicking outside the content
document.getElementById('customer-care-slide').addEventListener('click', (event) => {
    if (event.target === document.getElementById('customer-care-slide')) {
        document.getElementById('customer-care-slide').style.display = 'none';
    }
});




