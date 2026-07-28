function analyzePassword() {

    const password = document.getElementById("password").value;

    let score = 0;

    let suggestions = [];


    // Get HTML elements
    const lengthCheck = document.getElementById("lengthCheck");
    const uppercaseCheck = document.getElementById("uppercaseCheck");
    const lowercaseCheck = document.getElementById("lowercaseCheck");
    const numberCheck = document.getElementById("numberCheck");
    const specialCheck = document.getElementById("specialCheck");


    // Check password length
    if (password.length >= 8) {

        score++;

        lengthCheck.textContent = "[OK] At least 8 characters";

        lengthCheck.className = "check valid";

    } else {

        lengthCheck.textContent = "[X] At least 8 characters";

        lengthCheck.className = "check invalid";

        suggestions.push("Use at least 8 characters.");

    }


    // Check uppercase
    if (/[A-Z]/.test(password)) {

        score++;

        uppercaseCheck.textContent = "[OK] Contains uppercase letter";

        uppercaseCheck.className = "check valid";

    } else {

        uppercaseCheck.textContent = "[X] Contains uppercase letter";

        uppercaseCheck.className = "check invalid";

        suggestions.push("Add at least one uppercase letter.");

    }


    // Check lowercase
    if (/[a-z]/.test(password)) {

        score++;

        lowercaseCheck.textContent = "[OK] Contains lowercase letter";

        lowercaseCheck.className = "check valid";

    } else {

        lowercaseCheck.textContent = "[X] Contains lowercase letter";

        lowercaseCheck.className = "check invalid";

        suggestions.push("Add at least one lowercase letter.");

    }


    // Check number
    if (/[0-9]/.test(password)) {

        score++;

        numberCheck.textContent = "[OK] Contains a number";

        numberCheck.className = "check valid";

    } else {

        numberCheck.textContent = "[X] Contains a number";

        numberCheck.className = "check invalid";

        suggestions.push("Add at least one number.");

    }


    // Check special character
    if (/[^A-Za-z0-9]/.test(password)) {

        score++;

        specialCheck.textContent = "[OK] Contains special character";

        specialCheck.className = "check valid";

    } else {

        specialCheck.textContent = "[X] Contains special character";

        specialCheck.className = "check invalid";

        suggestions.push("Add at least one special character.");

    }


    // Determine strength
    let strength;

    if (password.length === 0) {

        strength = "-";

    } else if (score <= 2) {

        strength = "Weak";

    } else if (score <= 4) {

        strength = "Medium";

    } else {

        strength = "Strong";

    }


    // Display result
    document.getElementById("strengthResult").textContent =
        "Strength: " + strength;

    document.getElementById("scoreResult").textContent =
        "Security Score: " + score + "/5";


    // Update strength progress bar
    const progress = document.getElementById("strengthProgress");

    progress.style.width = (score * 20) + "%";


    // Display suggestions
    const suggestionsBox = document.getElementById("suggestions");

    if (password.length === 0) {

        suggestionsBox.textContent =
            "Enter a password to see suggestions.";

    } else if (suggestions.length === 0) {

        suggestionsBox.textContent =
            "Your password meets all basic security requirements!";

    } else {

        suggestionsBox.innerHTML =
            suggestions.map(item => "- " + item).join("<br>");

    }

}


function togglePassword() {

    const passwordInput =
        document.getElementById("password");

    const toggleButton =
        document.getElementById("toggleButton");


    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        toggleButton.textContent = "Hide";

    } else {

        passwordInput.type = "password";

        toggleButton.textContent = "Show";

    }

}


function clearAll() {

    document.getElementById("password").value = "";

    document.getElementById("strengthResult").textContent =
        "Strength: -";

    document.getElementById("scoreResult").textContent =
        "Security Score: 0/5";


    document.getElementById("strengthProgress").style.width =
        "0%";


    const checks = document.querySelectorAll(".check");

    checks.forEach(function(check) {

        check.className = "check";

    });


    document.getElementById("lengthCheck").textContent =
        "- At least 8 characters";

    document.getElementById("uppercaseCheck").textContent =
        "- Contains uppercase letter";

    document.getElementById("lowercaseCheck").textContent =
        "- Contains lowercase letter";

    document.getElementById("numberCheck").textContent =
        "- Contains a number";

    document.getElementById("specialCheck").textContent =
        "- Contains special character";


    document.getElementById("suggestions").textContent =
        "Enter a password to see suggestions.";

}
