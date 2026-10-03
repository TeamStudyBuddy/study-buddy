function initTheme() {
  const toggle = document.getElementById("themeToggle");
  const root = document.documentElement;
  const logo = document.getElementById("logo");

  if (!toggle || !logo) return;

  function updateLogo(theme) {
    logo.src =
      theme === "light" ? "./images/logo-light.png" : "./images/logo.png";
  }

  const savedTheme = localStorage.getItem("theme") || "dark";
  root.setAttribute("data-theme", savedTheme);
  updateLogo(savedTheme);

  toggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";

    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateLogo(next);
  });
}

function updateAuthUI() {
  const loginBtn = document.getElementById("login-btn");
  const userProfile = document.getElementById("user-profile");
  const userNameTxt = document.getElementById("user-name");
  const userEmailTxt = document.getElementById("user-email");

  const accountMenuBtn = document.getElementById("account-menu-btn");
  const accountMenu = document.getElementById("account-menu");
  const logoutBtn = document.getElementById("logout-btn");

  if (!loginBtn || !userProfile) return;

  const token = localStorage.getItem("token");
  const userString = localStorage.getItem("user");

  if (token && userString) {
    try {
      const user = JSON.parse(userString);

      if (userNameTxt) {
        userNameTxt.textContent = user.username;
      }

      if (userEmailTxt) {
        userEmailTxt.textContent = user.email;
      }

      loginBtn.classList.add("hidden");
      userProfile.classList.remove("hidden");
    } catch {
      logout();
    }
  } else {
    loginBtn.classList.remove("hidden");
    userProfile.classList.add("hidden");
  }

  accountMenuBtn?.addEventListener("click", (event) => {
    event.stopPropagation();

    accountMenu?.classList.toggle("active");
    accountMenuBtn.classList.toggle("active");
  });

  logoutBtn?.addEventListener("click", logout);

  document.addEventListener("click", (event) => {
    if (!userProfile.contains(event.target)) {
      accountMenu?.classList.remove("active");
      accountMenuBtn?.classList.remove("active");
    }
  });

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/login";
  }
}

export function initMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const closeToggle = document.getElementById("close-menu");
  const aside = document.querySelector("aside");
  const overlay = document.getElementById("sidebar-overlay");
  const navLinks = document.querySelectorAll("aside a[data-link]");

  function openMenu() {
    aside?.classList.add("active");
    overlay?.classList.add("active");
    document.body.classList.add("menu-open");
  }

  function closeMenu() {
    aside?.classList.remove("active");
    overlay?.classList.remove("active");
    document.body.classList.remove("menu-open");
  }

  menuToggle?.addEventListener("click", openMenu);
  closeToggle?.addEventListener("click", closeMenu);
  overlay?.addEventListener("click", closeMenu);

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  updateAuthUI();
  initMobileMenu();
});
