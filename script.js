// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Custom cursor
    const cursor = document.querySelector(".cursor")
    const cursorFollower = document.querySelector(".cursor-follower")
  
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px"
      cursor.style.top = e.clientY + "px"
  
      setTimeout(() => {
        cursorFollower.style.left = e.clientX + "px"
        cursorFollower.style.top = e.clientY + "px"
      }, 100)
    })
  
    document.addEventListener("mousedown", () => {
      cursor.style.width = "15px"
      cursor.style.height = "15px"
      cursorFollower.style.width = "40px"
      cursorFollower.style.height = "40px"
    })
  
    document.addEventListener("mouseup", () => {
      cursor.style.width = "10px"
      cursor.style.height = "10px"
      cursorFollower.style.width = "30px"
      cursorFollower.style.height = "30px"
    })
  
    // Typing effect
    const typingElement = document.querySelector(".typing")
    const words = ["Front-End Developer", "Graphics Designer", "UI/UX Enthusiast"]
    let wordIndex = 0
    let charIndex = 0
    let isDeleting = false
    const isEnd = false
  
    function type() {
      const currentWord = words[wordIndex]
      const currentChar = currentWord.substring(0, charIndex)
      typingElement.textContent = currentChar
  
      if (!isDeleting && charIndex < currentWord.length) {
        // Type the word
        charIndex++
        setTimeout(type, 100)
      } else if (isDeleting && charIndex > 0) {
        // Delete the word
        charIndex--
        setTimeout(type, 50)
      } else {
        // Switch to the next word
        isDeleting = !isDeleting
  
        if (!isDeleting) {
          wordIndex = (wordIndex + 1) % words.length
        }
  
        setTimeout(type, isDeleting ? 1000 : 500)
      }
    }
  
    // Start the typing effect
    setTimeout(type, 1000)
  
    // Header scroll effect
    const header = document.querySelector("header")
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    })
  
    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle")
    const navMenu = document.querySelector("nav ul")
  
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active")
      navMenu.classList.toggle("active")
    })
  
    // Close mobile menu when clicking a nav link
    const navLinks = document.querySelectorAll(".nav-link")
  
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active")
        navMenu.classList.remove("active")
      })
    })
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          })
        }
      })
    })
  
    // Project filtering
    const filterButtons = document.querySelectorAll(".filter-btn")
    const projectCards = document.querySelectorAll(".project-card")
  
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remove active class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove("active"))
  
        // Add active class to clicked button
        this.classList.add("active")
  
        const filterValue = this.getAttribute("data-filter")
  
        projectCards.forEach((card) => {
          if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
            card.style.display = "block"
            setTimeout(() => {
              card.style.opacity = "1"
              card.style.transform = "scale(1)"
            }, 100)
          } else {
            card.style.opacity = "0"
            card.style.transform = "scale(0.8)"
            setTimeout(() => {
              card.style.display = "none"
            }, 300)
          }
        })
      })
    })
  
    
  
    // Animate elements on scroll
    const animateElements = document.querySelectorAll(
      ".about-content, .skills-content, .projects-content, .contact-content",
    )
  
    function checkScroll() {
      animateElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
        const screenPosition = window.innerHeight / 1.3
  
        if (elementPosition < screenPosition) {
          element.classList.add("animate")
        }
      })
    }
  
    window.addEventListener("scroll", checkScroll)
    checkScroll() // Check on page load
  
    // Flying elements animation
    const flyingElements = document.querySelectorAll(".shape")
  
    function animateFlying() {
      flyingElements.forEach((element, index) => {
        const randomX = Math.random() * 20 - 10
        const randomY = Math.random() * 20 - 10
        const randomDelay = Math.random() * 2
  
        element.style.transition = `transform ${2 + index * 0.5}s ease-in-out ${randomDelay}s`
        element.style.transform = `translate(${randomX}px, ${randomY}px)`
  
        setTimeout(
          () => {
            element.style.transform = "translate(0, 0)"
          },
          (2 + index * 0.5 + randomDelay) * 1000,
        )
      })
  
      setTimeout(animateFlying, 5000)
    }
  
    animateFlying()
  })
  