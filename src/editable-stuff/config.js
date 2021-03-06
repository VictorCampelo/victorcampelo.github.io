// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Victor",
  middleName: "",
  lastName: "Campelo",
  message: " Data Science | Backend Developer ",
  icons: [{
      image: "fa-github",
      url: "https://github.com/victorcampelo",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/victor_campelo_/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/victor-campelo/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/Jvictor_cv",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
// a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
// b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
// c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
// d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/16apx8s6zlVwCu7Aea6jdJtXOnAb6GsNP8QAsTv7gWZo/edit",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/victor.jpg"),
  imageSize: 375,
  message1: "I am a graduate of the Bachelor's degree in Computer Science at the Federal University of Piauí, Teresina-PI.",
  message2: "I've been working with information technology since I was 15 (more than 8 years old). My favorite programming languages are Python and JavaScript. In this area my main projects were backend with Python or Node.js, using relational (Mysql, MariaDB, PostgreSql) and non-relational (MongoDB, and Redis) databases, and data science projects using Python.",
  message3: "Currently I am one of the leaders of the development team of the academic league of entrepreneurship at UFPI, acting from the development, planning and management of solutions aimed at the financial and academic market. ",
  message4: "In the academic field my main projects involved classifications and clustering using machine learning, deep learning, data analysis, extraction and processing, statistical analysis, data structures, bioinformatics and compilers.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "My projects",
  gitHubUsername: "VictorCampelo", // i.e."johnDoe12Gh"
  reposLength: 32,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Experiences",
  message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [{
      img: require("../editable-stuff/victor.jpg"),
    },
    {
      img: require("../editable-stuff/victor.jpg"),
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [{
      name: "Python",
      value: 90,
    },
    {
      name: "SQL",
      value: 75,
    },
    {
      name: "Data Structures",
      value: 85,
    },
    {
      name: "C/C++",
      value: 65,
    },
    {
      name: "JavaScript",
      value: 90,
    },
    {
      name: "React",
      value: 65,
    },
    {
      name: "HTML/CSS",
      value: 55,
    },
    {
      name: "C#",
      value: 80,
    },
  ],
  softSkills: [{
      name: "Goal-Oriented",
      value: 80,
    },
    {
      name: "Collaboration",
      value: 90,
    },
    {
      name: "Positivity",
      value: 75,
    },
    {
      name: "Adaptability",
      value: 85,
    },
    {
      name: "Problem Solving",
      value: 75,
    },
    {
      name: "Empathy",
      value: 90,
    },
    {
      name: "Organization",
      value: 70,
    },
    {
      name: "Creativity",
      value: 90,
    },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message: "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "victor_campelo@outlook.com",
};

// Blog SECTION
// const blog = {
// show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch
};