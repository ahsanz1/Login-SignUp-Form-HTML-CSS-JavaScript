const forms = document.querySelectorAll(".form");
const toggleForms = document.querySelectorAll(".toggleForm");
const forgotPasswordLink = document.querySelector(".forgotPassword");
const loginForm = document.getElementById("loginForm");
const signUpForm = document.getElementById("signUpForm");
const resetPasswordForm = document.getElementById("resetPasswordForm");

function switchForm(targetForm) {
  const isMobile = window.innerWidth <= 768;
  forms.forEach((form) => {
    if (form.classList.contains(targetForm)) {
      form.classList.remove("inactive");
      form.style.transform = isMobile
        ? "translateX(0)"
        : "rotateY(0deg) rotateX(0deg)";
    } else {
      form.classList.add("inactive");
      if (isMobile) {
        form.style.transform = "translateX(-100%)";
      } else {
        if (form.classList.contains("signUpForm")) {
          form.style.transform = "rotateY(180deg)";
        } else if (form.classList.contains("forgotPasswordForm")) {
          form.style.transform = "rotateX(180deg)";
        } else {
          form.style.transform = "rotateY(-180deg)";
        }
      }
    }
  });
}

function animateButton(button) {
  button.classList.add("submitted");
  setTimeout(() => {
    button.classList.remove("submitted");
  }, 2000);
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;
  const submitBtn = loginForm.querySelector(".submit-btn");

  animateButton(submitBtn);

  // Simulate login process
  setTimeout(() => {
    alert(
      `Login attempt for ${username}. In a real app, we would validate the credentials here.`
    );
    loginForm.reset();
  }, 1000);
});

// Repeat the same pattern for signUpForm and resetPasswordForm

toggleForms.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const targetForm = toggle.getAttribute("data-target") + "Form";
    switchForm(targetForm);
  });
});

forgotPasswordLink.addEventListener("click", (e) => {
  e.preventDefault();
  switchForm("forgotPasswordForm");
});

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("signUpUsername").value;
  const email = document.getElementById("signUpEmail").value;
  const password = document.getElementById("signUpPassword").value;
  const confirmPassword = document.getElementById(
    "signUpConfirmPassword"
  ).value;

  const submitBtn = signUpForm.querySelector(".submit-btn");

  animateButton(submitBtn);

  // Simulate sign up process
  setTimeout(() => {
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
    } else {
      alert(
        `Sign up successful for ${username} (${email}). In a real app, we would create the account here.`
      );
      signUpForm.reset();
      switchForm("signInForm");
    }
  }, 1000);
});

resetPasswordForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("resetEmail").value;
  const submitBtn = resetPasswordForm.querySelector(".submit-btn");

  animateButton(submitBtn);

  // Simulate password reset process
  setTimeout(() => {
    alert(
      `Password reset email sent to ${email}. Check your inbox for further instructions.`
    );
    resetPasswordForm.reset();
    switchForm("signInForm");
  }, 1000);
});
