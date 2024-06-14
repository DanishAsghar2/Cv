<template>
  <div class="projects-page">
    <h1>My Projects</h1>
    <div class="projects-grid">
      <div class="project-card" v-for="project in projects" :key="project.title">
        <img :src="project.image" :alt="project.title" class="project-image">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <p class="languages-used">Languages: {{ project.languages }}</p>
        <a :href="project.link" target="_blank" class="project-link">View on GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Fullstack Website by Danish",
          description: "A comprehensive fullstack web application showcasing exclusive and sustainable fragrances. Developed using modern web technologies.",
          image: "https://www.revenueriver.co/hs-fs/hubfs/fullstack.jpeg?length=1920&name=fullstack.jpeg", 
          languages: "Vue.js, Node.js, HTML, CSS, MySQL",
          link: "https://danishasghar2.github.io/Fullstack-App/"
        },
        {
          title: "Enhanced Snake Game by Danish",
          description: "This is a simple Snake game developed using Python and Pygame. The game includes custom images and sounds for an enhanced user experience.",
          image: "https://raw.githubusercontent.com/DanishAsghar2/SnakeGamePython/main/snake.png",
          languages: "Python, Pygame",
          link: "https://github.com/DanishAsghar2/SnakeGamePython"
        }
       
      ]
    };
  }
};
</script>

<style scoped>
.projects-page {
  padding: 2em;
  text-align: center;
}

h1 {
  font-size: 3em;
  margin-bottom: 1em;
}

.projects-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;
}

.project-card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1em;
  text-align: center;
  transition: transform 0.3s;
  width: 300px;
}

.project-card:hover {
  transform: scale(1.05);
}

.project-image {
  border-radius: 10px;
  width: 100%;
}

.languages-used {
  font-style: italic;
  color: #555;
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
</style>
