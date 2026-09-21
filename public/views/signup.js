export function signupInit() {
  const form = document.getElementById("signup-form");
  const errorDiv = document.getElementById("signup-error");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    errorDiv.textContent = "";
    errorDiv.style.display = "none";

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        window.location.href = "/";
      } else {
        errorDiv.textContent = data.message;
        errorDiv.style.display = "block";
      }
    } catch (error) {
      errorDiv.textContent = "An error occurred. Please try again.";
      errorDiv.style.display = "block";
    }
  });
}

export default function signup() {
  return `
  <style>
  .signup-wrapper {
    min-height: 100%;
    display: grid;
    place-items: center;
  }
  h2 {
    color: var(--heading-color);
    text-align: center;
    font-size: 28px;
    margin-top: 30px;
  }
  .signup {
    background-color: var(--bg-color);
    width: 400px;
    margin: auto;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
  }
  form {
    display: flex;
    flex-direction:column;
    padding: 40px;
    gap: 16px;
  }
  .input-field {
    background-color: var(--secondary-bg-color);
    color: var(--heading-color);
    border: none;
    padding: 15px;
    border-radius: 15px;
  }
  .input-field:placeholder {
    color: var(--text-color);
  }
  input:focus {
    outline: none;
    border-color: var(--primary-color);             
    box-shadow: 0 0 0 3px rgba(220,247,99,0.25); 
  }
  .submit-btn {
    background-color: var(--primary-color);
    padding: 15px 0;
    border-radius: 15px; 
    border: none;
    font-size: 17px;
    font-weight: 600;
    margin-top: 5px;
    cursor: pointer;
  }
  form .suggest {
    text-align: center;
  }
  form .suggest a {
    color: var(--primary-color);
  }
  @media (max-width: 768px) {
      .signup-wrapper {
        min-height: 75vh;   
      }
  }
  </style>
  <div class="signup-wrapper">
    <div class="signup">
    <h2>Welcome Stranger!</h2>
    <form method="post" id="signup-form">
        <div id="signup-error"></div>
        <input class="input-field" type="text" placeholder="Enter Your Username" id="username" />
        <input class="input-field" type="email" placeholder="Enter Your Email" id="email" />
        <input class="input-field" type="password" placeholder="Enter Your Password" id="password" />
        <input class="submit-btn" type="submit" value="Signup" />
        <div class="suggest">
          <p>Already have an account?</p>
          <a href="/login"data-link>Login Instead</a>
        </div>
    </form>
    </div>
  </div>`;
}
