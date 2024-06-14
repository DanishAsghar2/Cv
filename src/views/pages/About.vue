<template>
  <div id="about">
    <section class="about-section">
      <div class="about-header">
        <img src="../assets/image.jpg" alt="Danish Asghar" class="profile-photo">
        <h1 class="animated-title">About Me</h1>
      </div>
      <p class="introduction">
        Hi, I'm Danish Asghar, a BSc (Hons) Software Engineering student at Manchester Metropolitan University. I am passionate about developing innovative software solutions and continuously improving my skills.
      </p>

      <div class="biography">
        <h2 class="section-title">Biography</h2>
        <p>
          I started my journey in technology at a young age and have been fascinated by software development ever since. During my studies, I have worked on various projects that honed my skills in programming, problem-solving, and teamwork. I am currently in my third year, where I am focused on deepening my knowledge in software engineering and exploring new technologies.
        </p>
      </div>

      <div class="mission">
        <h2 class="section-title">Mission Statement</h2>
        <p>
          My mission is to leverage my skills and knowledge to develop software solutions that can make a positive impact. I strive to be a lifelong learner, constantly evolving with the ever-changing technology landscape.
        </p>
      </div>

      <div class="values">
        <h2 class="section-title">Core Values</h2>
        <ul>
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Collaboration</li>
          <li>Continuous Learning</li>
          <li>Customer Focus</li>
        </ul>
      </div>

      <div class="timeline">
        <h2 class="section-title">My Journey</h2>
        <ul class="timeline-list">
          <li>
            <span class="timeline-date">2021 - Present</span>
            <span class="timeline-content">BSc (Hons) Software Engineering, Manchester Metropolitan University</span>
          </li>
          <li>
            <span class="timeline-date">2019 - 2021</span>
            <span class="timeline-content">BTEC IT Extended Diploma, Oldham Sixth Form College</span>
          </li>
          <li>
            <span class="timeline-date">2018 - 2019</span>
            <span class="timeline-content">Internship at Broad Lane Motors</span>
          </li>
        </ul>
      </div>

      <div class="hobbies">
        <h2 class="section-title">Hobbies and Interests</h2>
        <p>
          Outside of my professional interests, I enjoy playing football, reading tech blogs, and exploring new places. These activities help me stay balanced and bring fresh perspectives to my work.
        </p>
      </div>

      <div class="testimonials">
        <h2 class="section-title">Testimonials</h2>
        <blockquote>
          <p>"Danish is a highly motivated individual with a great work ethic. He consistently delivers high-quality work and is a pleasure to work with."</p>
          <footer>- Shakeel, Manager at Broad Lane Motors</footer>
        </blockquote>
        <blockquote>
          <p>"A dedicated and enthusiastic learner, Danish quickly adapts to new challenges and excels in collaborative environments."</p>
          <footer>- Dr Kristopher Welsh, Professor at Manchester Metropolitan University</footer>
        </blockquote>
      </div>

      <div class="contact">
        <h2 class="section-title">Contact Me</h2>
        <p>If you would like to get in touch, feel free to reach out via <a href="mailto:Danish789120@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/danish-asghar-6493aa25a" target="_blank">LinkedIn</a>.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About'
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600&display=swap');

body {
  font-family: 'Poppins', sans-serif;
  background-color: #1e1e2f;
  color: #d3d3d3;
  margin: 0;
  padding: 0;
}

.about-section {
  padding: 4em 2em;
  max-width: 1000px;
  margin: auto;
  background: linear-gradient(135deg, #e5d2d2, #435658);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  animation: fadeIn 2s ease-in-out;
}

.about-header {
  text-align: center;
  margin-bottom: 2em;
}

.profile-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 1em;
}

.animated-title {
  font-size: 3em;
  margin-bottom: 1em;
  text-align: center;
  color: #ffffff;
  animation: fadeIn 2s ease-in-out, colorChange 6s infinite;
}

@keyframes colorChange {
  0% { color: #ffffff; }
  25% { color: #4ca1af; }
  50% { color: #e74c3c; }
  75% { color: #f39c12; }
  100% { color: #ffffff; }
}

.introduction, .biography, .mission, .values, .timeline, .hobbies, .testimonials, .contact {
  margin-bottom: 2em;
}

h1, h2 {
  color: #ffffff;
  text-align: center;
  font-family: 'Raleway', sans-serif;
}

.section-title {
  font-size: 2.5em;
  margin-bottom: 0.5em;
  color: #ffffff;
  position: relative;
  text-align: left;
  padding-left: 20px;
}

.section-title::before {
  content: '';
  width: 10px;
  height: 100%;
  background: #4ca1af;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 5px;
  animation: expandHeight 1s ease-in-out forwards;
}

@keyframes expandHeight {
  0% { height: 0; }
  100% { height: 100%; }
}

.values ul, .timeline-list {
  list-style-type: none;
  padding: 0;
}

.values ul li, .timeline-list li {
  background: #4ca1af;
  color: white;
  margin: 0.5em 0;
  padding: 0.5em 1em;
  border-radius: 5px;
  transition: background 0.3s, transform 0.3s;
}

.values ul li:hover, .timeline-list li:hover {
  background: #e74c3c;
  transform: translateX(10px);
}

.timeline-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.timeline-date {
  font-weight: bold;
  color: #f39c12;
}

.testimonials blockquote {
  background: #4a4a60;
  border-left: 5px solid #4ca1af;
  padding: 1em;
  margin: 1em 0;
  font-style: italic;
  color: #d3d3d3;
}

.testimonials blockquote footer {
  text-align: right;
  font-size: 0.9em;
}

.contact a {
  color: #4ca1af;
  text-decoration: none;
}

.contact a:hover {
  text-decoration: underline;
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
</style>
