<template>
  <div id="app">
    <!-- Particles Container -->
    <div id="particles-js"></div>

    <!-- Advanced Navigation Bar -->
    <nav class="navbar">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/resume">Resume</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>

    <!-- Router view for displaying components -->
    <router-view />

    <!-- Footer with Contact Information -->
    <footer class="footer">
      <div class="footer-content">
        <a href="mailto:Danish789120@gmail.com" class="footer-icon"><i class="fas fa-envelope"></i></a>
        <a href="https://www.linkedin.com/in/danish-asghar-6493aa25a" target="_blank" class="footer-icon"><i class="fab fa-linkedin"></i></a>
        <a href="tel:+4407519914067" class="footer-icon"><i class="fas fa-phone"></i></a>
        <a href="https://github.com/DanishAsghar2" target="_blank" class="footer-icon"><i class="fab fa-github"></i></a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  mounted() {
    particlesJS.load('particles-js', 'particles-config.json', function() {
      console.log('particles.js loaded - callback');
    });
  }
};
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');

/* General styling */
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #f4f4f9;
  color: #333;
}

/* Particles.js container styling */
#particles-js {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: -1; /* Ensure particles are behind other content */
}

/* Advanced Navbar styling */
.navbar {
  background: rgba(74, 144, 226, 0.8);
  padding: 15px 0;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar ul li {
  margin: 0 20px;
}

.navbar ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  padding: 10px 20px;
  transition: background-color 0.3s, color 0.3s, transform 0.3s;
  border-radius: 30px;
}

.navbar ul li a:hover {
  background-color: #fff;
  color: #4a90e2;
  transform: scale(1.1);
}

/* Footer styling */
.footer {
  background-color: #333;
  padding: 20px 0;
  text-align: center;
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.footer-icon {
  color: #fff;
  font-size: 24px;
  transition: color 0.3s, transform 0.3s;
}

.footer-icon:hover {
  color: #4a90e2;
  transform: scale(1.1);
}
</style>