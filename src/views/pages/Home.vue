<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Welcome to My Resume</h1>
        <p class="hero-subtitle">Showcasing My Skills and Projects</p>
        <button class="cta-button" @click="scrollToSection('about')">Learn More</button>
      </div>
    </section>
    <section id="about" class="about">
      <h2>About Me</h2>
      <p>
        I am a passionate professional with a degree in Software Engineering from Manchester Metropolitan University. I have a strong background in various programming languages and a dedication to continuous learning and improvement. My goal is to leverage my skills and education to contribute effectively to innovative projects.
      </p>
    </section>
    <section id="skills" class="skills">
      <h2>Skills</h2>
      <div class="skills-grid">
        <div class="skill" v-for="skill in skills" :key="skill.name">
          <img :src="skill.icon" :alt="skill.name" class="skill-icon">
          <h3>{{ skill.name }}</h3>
        </div>
      </div>
    </section>
    <section id="projects" class="projects">
      <h2>Projects</h2>
      <div class="projects-grid">
        <div class="project" v-for="project in projects" :key="project.name">
          <img :src="project.image" :alt="project.name" class="project-image">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
          <a :href="project.link" target="_blank" class="project-link">View Project</a>
        </div>
      </div>
    </section>
    
    <!-- CV Download Popup -->
    <div v-if="showCvPopup" class="cv-popup" @mousedown="startDrag" @mouseup="stopDrag" :style="popupStyle">
      <div class="cv-popup-header">
        <span>Download CV</span>
        <button @click="toggleCvPopup">X</button>
      </div>
      <div class="cv-popup-body">
        <a :href="cvLink" download class="download-button">Download My CV</a>
      </div>
    </div>
    <button class="open-popup-button" @click="toggleCvPopup">Download CV</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { name: 'Python', icon: 'https://img.icons8.com/color/48/000000/python.png' },
        { name: 'Node.js', icon: 'https://img.icons8.com/color/48/000000/nodejs.png' },
        { name: 'MySQL', icon: 'https://img.icons8.com/fluent/48/000000/mysql-logo.png' },
        { name: 'AWS', icon: 'https://img.icons8.com/color/48/000000/amazon-web-services.png' },
        { name: 'Git/GitHub', icon: 'https://img.icons8.com/fluent/48/000000/github.png' },
        { name: 'Visual Studio Code', icon: 'https://img.icons8.com/fluent/48/000000/visual-studio-code-2019.png' },
        { name: 'Java', icon: 'https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png' },
        { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/000000/javascript.png' },
        { name: 'HTML', icon: 'https://img.icons8.com/color/48/000000/html-5.png' },
        { name: 'CSS', icon: 'https://img.icons8.com/color/48/000000/css3.png' }
      ],
      projects: [
        {
          name: "Fullstack Website by Danish",
          description: "A comprehensive fullstack web application showcasing exclusive and sustainable fragrances. Developed using modern web technologies.",
          image: "https://www.revenueriver.co/hs-fs/hubfs/fullstack.jpeg?length=1920&name=fullstack.jpeg", 
          languages: "Vue.js, Node.js, HTML, CSS, MySQL",
          link: "https://danishasghar2.github.io/Fullstack-App/"
        },
        {
          name: 'Enhanced Snake Game by Danish',
          image: 'https://raw.githubusercontent.com/DanishAsghar2/SnakeGamePython/main/snake.png',
          description: 'This is a simple Snake game developed using Python and Pygame. The game includes custom images and sounds for an enhanced user experience.',
          link: 'https://github.com/DanishAsghar2/SnakeGamePython'
        }
      ],
      showCvPopup: false,
      cvLink: '/CV_Resume-Website/',
      isDragging: false,
      dragStartX: 0,
      dragStartY: 0,
      popupX: 100,
      popupY: 100,
    };
  },
  computed: {
    popupStyle() {
      return {
        top: this.popupY + 'px',
        left: this.popupX + 'px'
      };
    }
  },
  methods: {
    scrollToSection(sectionId) {
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    },
    toggleCvPopup() {
      this.showCvPopup = !this.showCvPopup;
    },
    startDrag(event) {
      this.isDragging = true;
      this.dragStartX = event.clientX - this.popupX;
      this.dragStartY = event.clientY - this.popupY;
    },
    stopDrag() {
      this.isDragging = false;
    },
    drag(event) {
      if (this.isDragging) {
        this.popupX = event.clientX - this.dragStartX;
        this.popupY = event.clientY - this.dragStartY;
      }
    }
  },
  mounted() {
    document.addEventListener('mousemove', this.drag);
  },
  beforeDestroy() {
    document.removeEventListener('mousemove', this.drag);
  }
};
</script>

<style scoped>
/* Add any additional styling specific to Home.vue */
.home .hero {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  z-index: 1; /* Ensure content is above the particles */
}

.home .hero-title {
  font-size: 3em;
  margin: 0.5em 0;
}

.home .hero-subtitle {
  font-size: 1.5em;
  margin-bottom: 1em;
}

.home .cta-button {
  padding: 0.75em 1.5em;
  background-color: white;
  color: #4a90e2;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1em;
  transition: transform 0.3s;
}

.home .cta-button:hover {
  transform: scale(1.1);
}

.home .about, .home .skills, .home .projects {
  z-index: 1; /* Ensure content is above the particles */
  position: relative; /* Needed to ensure z-index works */
  background-color: rgba(255, 255, 255, 0.9); /* Slight background to make text readable */
  margin: 2em 0;
  padding: 2em;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.home .about h2, .home .skills h2, .home .projects h2 {
  font-size: 2.5em;
  margin-bottom: 1em;
}

.home .about p, .home .skills p, .home .projects p {
  font-size: 1.2em;
  line-height: 1.6;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.skill {
  margin: 1em;
  text-align: center;
}

.skill-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 0.5em;
}

.skill h3 {
  font-size: 1.2em;
}

.projects-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.project {
  margin: 1em;
  text-align: center;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1em;
  transition: transform 0.3s;
}

.project:hover {
  transform: scale(1.05);
}

.project-image {
  width: 100%;
  border-radius: 10px;
}

.project-link {
  display: inline-block;
  margin-top: 1em;
  padding: 0.5em 1em;
  background-color: #4a90e2;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  transition: background-color 0.3s;
}

.project-link:hover {
  background-color: #7b4397;
}

/* Styles for the CV Popup */
.cv-popup {
  position: absolute;
  width: 300px;
  border: 1px solid #ccc;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.cv-popup-header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #4a90e2;
  color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: move;
}

.cv-popup-body {
  padding: 20px;
  text-align: center;
}

.download-button {
  display: inline-block;
  padding: 0.5em 1em;
  background-color: #4a90e2;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  transition: background-color 0.3s;
}

.download-button:hover {
  background-color: #7b4397;
}

.open-popup-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 0.75em 1.5em;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1em;
  transition: transform 0.3s;
}

.open-popup-button:hover {
  transform: scale(1.1);
}
</style>
