import todoingImg from '../assets/images/project-imgs/todoing.jpg';
import battleshipImg from '../assets/images/project-imgs/battleship.jpg';
import cvbuilerImg from '../assets/images/project-imgs/cvapp.jpg';
import travisImg from '../assets/images/project-imgs/travis.png';

const projectPreviews = [
    {
        name: "Artist's Portfolio",
        image: travisImg,
        siteLink: "https://www.travisphelps.com",
        gitHubLink: "https://github.com/cynthem/travis-portfolio",
        description: "A portfolio website for a cinematic artist featuring images and links to his work, his resume, and contact information. Uses the React Parallax library to showcase his work as scrolling background images.",
        tools: "Built with React Router, Webpack, and React Parallax"
    },
    {
        name: "CV Creator",
        image: cvbuilerImg,
        siteLink: "https://cynthem.github.io/CV-app/",
        gitHubLink: "https://github.com/cynthem/CV-app",
        description: "A resume building app that provides a template, guides users through CV creation, and produces a printable document. Completed as part of The Odin Project's Full Stack JavaScript curriculum.",
        tools: "Built with React"
    },
    {
        name: "To-Doing",
        image: todoingImg,
        siteLink: "https://cynthem.github.io/todo-list-II/",
        gitHubLink: "https://github.com/cynthem/todo-list-II",
        description: "A to-do list tracking app that stores data locally and allows users to add, delete, edit, and organize to-do tasks and projects. Completed as part of The Odin Project's Full Stack JavaScript curriculum.",
        tools: "Built with TypeScript and Webpack"
    },
    {
        name: "Battleship",
        image: battleshipImg,
        siteLink: "https://cynthem.github.io/battleship-II/",
        gitHubLink: "https://github.com/cynthem/battleship-II",
        description: "An app featuring the classic game Battleship. Users play against an AI that uses an algorithm to determine its next play. Completed as part of The Odin Project's Full Stack JavaScript curriculum.",
        tools: "Built with jQuery and Webpack"
    }
];

export default projectPreviews;