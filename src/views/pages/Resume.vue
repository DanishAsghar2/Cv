<template>
    <div id="resume">
      <section class="resume">
        <h2>My Resume</h2>
  
        <!-- Personal Profile Section -->
        <div class="section profile">
          <h3>Personal Profile</h3>
          <p>
            I am a young individual studying BSc (Hons) Software Engineering at Manchester Metropolitan University currently in my third year of study. My recent work experience has taught me valuable skills such as what constitutes good customer service and how to please a customer with good manners and communication. I am always looking for ways to improve and respond positively to criticism. I understand the importance of teamwork and will constantly try to encourage people who are not as confident or require assistance.
          </p>
        </div>
  
        <!-- Key Skills Section -->
        <div class="section skills">
          <h3>Key Skills</h3>
          <div class="skills-grid">
            <div class="skill-card" v-for="(skill, index) in skills" :key="index">
              <p>{{ skill }}</p>
            </div>
          </div>
        </div>
  
        <!-- Education Section -->
        <div class="section education">
          <h3>Education</h3>
          <div class="education-item">
            <h4>BSc (Hons) Software Engineering</h4>
            <p>Manchester Metropolitan University (Third Year)</p>
          </div>
          <div class="education-item">
            <h4>BTEC IT Extended Diploma</h4>
            <p>D*D*D* (Equivalent to 3 A*) - Oldham Sixth Form College</p>
          </div>
          <div class="education-item">
            <h4>GCSEs</h4>
            <p>
              Maths - 5, English language - 5, English Literature - 5, Religious studies - 5, Double science - 55, French - 4, Design & Technology - 5, ICT / Creative Imedia – Merit - The Hathershaw College
            </p>
          </div>
        </div>
  
        <!-- Work Experience Section -->
        <div class="section experience">
          <h3>Work Experience</h3>
          <div class="experience-item" v-for="(job, index) in jobs" :key="index">
            <h4>{{ job.title }}</h4>
            <h5>{{ job.company }} ({{ job.period }})</h5>
            <ul>
              <li v-for="(duty, i) in job.duties" :key="i">{{ duty }}</li>
            </ul>
          </div>
        </div>
  
        <!-- Other Qualifications Section -->
        <div class="section qualifications">
          <h3>Other Qualifications</h3>
          <ul>
            <li>SIA Door Supervisor License (February 2023 – 2026)</li>
            <li>Driving License</li>
            <li>Emergency First Aid at Work</li>
          </ul>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Resume',
    data() {
      return {
        skills: [
          'Polite and professional mannered',
          'Can provide good customer service',
          'Adaptive learner',
          'Punctual',
          'Persistent',
          'Good listener',
          'Able to use initiative in unplanned circumstances',
          'Can work well under pressure ensuring deadlines are complete',
          'Collaborative',
          'Well-organised and enthusiastic',
          'Confidently communicate well with others',
          'Have good IT skills'
        ],
        jobs: [
          {
            title: 'Car Sales Assistant',
            company: 'Broad Lane Motors',
            period: 'July 2019-August 2019, June 2020-September 2020',
            duties: [
              'Dealing with customer enquiries about certain vehicles and engaging and influencing customers to purchase the vehicle.',
              'Communicating with the manager and other staff at work',
              'Learning how to register vehicles on Auto Trader and the website.',
              'Filling out DVLA Forms',
              'Answering incoming calls',
              'Replying to customers\' email questions and enquiries',
              'Cash handling'
            ]
          },
          {
            title: 'Product Knowledge and Various Trends in Footwear and Apparel',
            company: 'FootAsylum',
            period: 'November 2023 – January 2024',
            duties: [
              'Multitasking and assisting',
              'Teamwork and collaboration',
              'Cash handling and basic accounting',
              'Able to work under pressure in busy periods.',
              'Interacting with customers daily and assisting them with their inquiries.'
            ]
          },
          {
            title: 'Customer Service Representative',
            company: 'TV Licensing - Capita (Blue Arrow)',
            period: 'June 2023- August 2023',
            duties: [
              'Taking high-volume incoming calls',
              'Processing new applications and renewals',
              'Sorting out unpaid amounts and direct debits',
              'Dealing with customers\' enquiries about licenses',
              'Being able to manage complaints and staying calm under every dilemma.',
              'Filling out forms relating to the call if needed',
              'Reporting to the manager if escalation is needed with the customer',
              'Being able to communicate with the other members of staff and the supervisor',
              'Meeting KPI targets that are set out'
            ]
          },
          {
            title: 'Warehouse Worker',
            company: 'The Tufnell’s Parcel Express',
            period: 'July 2021 to August 2021',
            duties: [
              'Loading and unloading stock',
              'Using a handheld scanner',
              'Working alone and quickly',
              'Helping out colleagues with heavy loads and providing support',
              'Working in a very fast-paced environment'
            ]
          },
          {
            title: 'Seasonal Sales Assistant',
            company: 'Home Bargains',
            period: 'December 2021-January 2022',
            duties: [
              'Serving customers at the till',
              'Answering customer’s questions and enquiries',
              'Making sure the shop floor is clear and tidy.',
              'Placing stock out on shelves',
              'Pricing items',
              'Rearranging items that are out of place back in order'
            ]
          },
          {
            title: 'Waiter',
            company: 'The Salt Cellar Restaurant',
            period: 'June 2018 to July 2018',
            duties: [
              'Responsible for taking orders and serving food and beverages to guests. Also ensuring good customer satisfaction.',
              'Communicating with the staff and customers effectively at work.',
              'Able to quickly prepare and serve hot and cold drinks for customers.',
              'Punctual and able to attend catchups and meetings with staff.',
              'Patient with customers deciding on what to order.'
            ]
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .resume {
    padding: 4em 2em;
    background-color: #f4f4f9;
    color: #333;
  }
  
  .resume h2 {
    font-size: 3em;
    margin-bottom: 1em;
    text-align: center;
    color: #4a90e2;
    animation: fadeIn 2s ease-in-out;
  }
  
  .section {
    margin-bottom: 3em;
    padding: 2em;
    background: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    animation: fadeInUp 1.5s ease-in-out;
  }
  
  .section h3 {
    font-size: 2.5em;
    margin-bottom: 0.5em;
    color: #7b4397;
  }
  
  .profile p,
  .education-item p,
  .qualifications ul,
  .experience-item ul {
    font-size: 1.2em;
    line-height: 1.6;
  }
  
  .skills-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .skill-card {
    background-color: #4a90e2;
    color: white;
    padding: 1em;
    margin: 0.5em;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }
  
  .skill-card:hover {
    transform: scale(1.05);
  }
  
  .education-item,
  .experience-item {
    margin-bottom: 1.5em;
  }
  
  .experience-item h4 {
    font-size: 1.8em;
    color: #4a90e2;
    margin-bottom: 0.5em;
  }
  
  .experience-item h5 {
    font-size: 1.5em;
    color: #7b4397;
    margin-bottom: 0.5em;
  }
  
  .qualifications ul {
    list-style-type: none;
    padding: 0;
  }
  
  .qualifications ul li {
    margin-bottom: 0.5em;
    font-size: 1.2em;
  }
  
  ul {
    list-style-type: disc;
    margin-left: 20px;
    text-align: left;
  }
  
  ul li {
    margin-bottom: 0.5em;
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
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  