export function loginInit() {
  let form = document.getElementById("login-form");
  const errorDiv = document.getElementById("login-error");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("Form submitted");

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
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

export default function login() {
  return `
  <style>
  .login-wrapper {
    min-height: 100%;
    display: grid;
    place-items: center;
  }
  h2 {
    color: var(--heading-color);
    text-align: center;
    font-size: 32px;
    margin-top: 30px;
  }
  .login {
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
    gap: 10px;
  }
  .input-field {
    background-color: var(--secondary-bg-color);
    color: var(--heading-color);
    border: 1px solid transparent;
    padding: 15px;
    border-radius: 15px;
  }
  .input-field::placeholder {
    color: var(--text-color);
  }
  input:focus {
    outline: none;
    border-color: var(--primary-color);             
    box-shadow: 0 0 0 3px rgba(199, 227, 71, 0.25); 
  }
  .submit-btn {
    background-color: var(--primary-color);
    padding: 15px 0;
    border-radius: 15px; 
    border: none;
    font-size: 17px;
    font-weight: 600;
    margin-top: 16px;
    cursor: pointer;
  }
  form .suggest {
    text-align: center;
  }
  form .suggest a {
    color: var(--primary-color);
  }
  #login-error {
    display: none; 
    margin-bottom: 16px;
    background-color: #3a1c1c; 
    color: #ff6b6b;
    border: 1px solid #5c2b2b;
    padding: 12px;
    border-radius: 12px;
    text-align: center;
    font-size: 14px;
  }
  @media (max-width: 768px) {
      .login-wrapper {
        min-height: 75vh;   
      }
  }
  </style>
  <div class="login-wrapper">
    <div class="login">
    <h2>Welcome Back!</h2>
    <form method="post" id="login-form">
        <div id="login-error"></div>
        <input class="input-field" type="email" placeholder="Enter Your Email" id="email" />
        <input class="input-field" type="password" placeholder="Enter Your Password" id="password" />
        <input class="submit-btn" type="submit" value="Login" />
        <div class="suggest">
          <p>Don't have an account?</p>
          <a href="/signup" data-link>Signup Instead</a>
        </div>
    </form>
    </div>
  </div>`;
}
