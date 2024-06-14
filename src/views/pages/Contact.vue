<template>
    <div id="contact">
      <section class="contact-section">
        <h1 class="animated-title">Contact Me</h1>
        <p class="introduction">
          I'd love to hear from you! Whether you have a question, want to discuss a project, or just want to say hello, feel free to reach out.
        </p>
        <div class="contact-buttons">
          <a href="mailto:Danish789120@gmail.com" class="contact-button email-button">Send Email</a>
          <a href="https://www.linkedin.com/in/danish-asghar-6493aa25a" target="_blank" class="contact-button linkedin-button">Connect on LinkedIn</a>
          <a href="tel:+4407519914065" class="contact-button phone-button">Call Me</a>
        </div>
        <div class="social-media">
          <a href="https://github.com/DanishAsghar2" target="_blank" class="social-icon github"><i class="fab fa-github"></i></a>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Contact'
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');
  
  body {
    font-family: 'Poppins', sans-serif;
    background-color: #1e1e2f;
    color: #d3d3d3;
    margin: 0;
    padding: 0;
  }
  
  .contact-section {
    padding: 4em 2em;
    max-width: 800px;
    margin: auto;
    background: linear-gradient(135deg,  #e5d2d2, #435658);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    animation: fadeIn 2s ease-in-out;
  }
  
  .animated-title {
    font-size: 3em;
    margin-bottom: 1em;
    text-align: center;
    color: #ffffff;
    animation: fadeIn 2s ease-in-out, colorChange 6s infinite;
  }
  
  .introduction {
    text-align: center;
    margin-bottom: 2em;
    font-size: 1.2em;
  }
  
  .contact-buttons {
    display: flex;
    justify-content: center;
    gap: 1.5em;
  }
  
  .contact-button {
    background: #8db3b9;
    color: #ffffff;
    padding: 0.75em 1.5em;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    font-size: 1.2em;
    transition: background 0.3s, transform 0.3s;
    cursor: pointer;
  }
  
  .email-button:hover {
    background: #e74c3c;
    transform: scale(1.1);
  }
  
  .linkedin-button:hover {
    background: #0077b5;
    transform: scale(1.1);
  }
  
  .phone-button:hover {
    background: #34a853;
    transform: scale(1.1);
  }
  
  .social-media {
    display: flex;
    justify-content: center;
    margin-top: 2em;
    gap: 1.5em;
  }
  
  .social-icon {
    font-size: 2em;
    color: #ffffff;
    transition: color 0.3s, transform 0.3s;
  }
  
  .social-icon:hover {
    transform: scale(1.1);
  }
  
  .github:hover {
    color: #333;
  }
  
  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes colorChange {
    0% { color: #ffffff; }
    25% { color: #4ca1af; }
    50% { color: #e74c3c; }
    75% { color: #f39c12; }
    100% { color: #ffffff; }
  }
  </style>
  