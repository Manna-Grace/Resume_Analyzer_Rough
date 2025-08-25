// Modal functionality
function openSignupModal() {
  document.getElementById("signupModal").style.display = "block"
  document.body.style.overflow = "hidden"
}

function closeSignupModal() {
  document.getElementById("signupModal").style.display = "none"
  document.body.style.overflow = "auto"
}

function switchToLogin() {
  // This would switch to a login form - for now just close modal
  closeSignupModal()
  alert("Login functionality would be implemented here")
}

// Close modal when clicking outside
window.onclick = (event) => {
  const modal = document.getElementById("signupModal")
  if (event.target === modal) {
    closeSignupModal()
  }
}

// Form submission
document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault()

  const formData = new FormData(e.target)
  const userData = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  }

  // Basic validation
  if (userData.password !== userData.confirmPassword) {
    alert("Passwords do not match!")
    return
  }

  if (userData.password.length < 6) {
    alert("Password must be at least 6 characters long!")
    return
  }

  try {
    // Send data to Python backend
    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        full_name: userData.fullName,
        email: userData.email,
        password: userData.password,
      }),
    })

    const result = await response.json()

    if (response.ok) {
      alert("Account created successfully!")
      closeSignupModal()
      e.target.reset()
    } else {
      alert(result.error || "Failed to create account")
    }
  } catch (error) {
    console.error("Error:", error)
    alert("Network error. Please try again.")
  }
})

// Smooth scrolling for navigation links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault()
    const targetId = this.getAttribute("href").substring(1)

    // For now, just show an alert since we don't have those sections
    alert(`Navigation to ${targetId} section would be implemented here`)
  })
})

// Enhanced background interaction
document.querySelector(".container").addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e
  const { innerWidth, innerHeight } = window

  const xPercent = (clientX / innerWidth) * 100
  const yPercent = (clientY / innerHeight) * 100

  // Update CSS custom properties for dynamic background
  document.documentElement.style.setProperty("--mouse-x", `${xPercent}%`)
  document.documentElement.style.setProperty("--mouse-y", `${yPercent}%`)
})

// Add some interactive effects
document.addEventListener("DOMContentLoaded", () => {
  // Add hover effects to buttons
  const buttons = document.querySelectorAll("button")
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)"
    })

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })

  // Add parallax effect to hero content
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const heroContent = document.querySelector(".hero-content")
    const pulsingCircle = document.querySelector(".pulsing-circle")

    if (heroContent) {
      heroContent.style.transform = `translateY(${scrolled * 0.5}px)`
    }

    if (pulsingCircle) {
      pulsingCircle.style.transform = `translateY(${scrolled * 0.3}px)`
    }
  })
})
