// router/index.js
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/pages/Home.vue';
import About from '../views/pages/About.vue';
import Skills from '../views/pages/Skills.vue'; // Ensure this file exists
import Projects from '../views/pages/Projects.vue'; // Ensure this file exists
import Contact from '../views/pages/Contact.vue';
import Resume from '../views/pages/Resume.vue';

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/skills", component: Skills },
  { path: "/projects", component: Projects },
  { path: "/contact", component: Contact },
  { path: "/resume", component: Resume }
];

const router = createRouter({
  history: createWebHashHistory(), // Use createWebHashHistory() for GitHub Pages
  routes,
});

export default router;