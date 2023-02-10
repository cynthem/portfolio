import todoingImg from '../assets/images/project-imgs/todoing.jpg';
import battleshipImg from '../assets/images/project-imgs/battleship.jpg';
import chilloutcoImg from '../assets/images/project-imgs/chilloutco.jpg';
import cvbuilerImg from '../assets/images/project-imgs/cvapp.jpg';

const projectPreviews = [
    {
        name: "To-Doing",
        image: todoingImg,
        siteLink: "https://doozles411.github.io/todo-list-II/",
        gitHubLink: "https://github.com/doozles411/todo-list-II",
        description: "A to-do list tracking app that stores data locally and allows users to add, delete, edit, and organize to-do tasks and projects. Completed as part of The Odin Project's Full Stack JavaScript curriculum.",
        tools: "Built with TypeScript and Webpack"
    },
    {
        name: "Battleship",
        image: battleshipImg,
        siteLink: "https://doozles411.github.io/battleship-II/",
        gitHubLink: "https://github.com/doozles411/battleship-II",
        description: "An app featuring the classic game Battleship. Users play against a computer AI that uses an algorithm to determine its next play. Completed as part of The Odin Project's Full Stack JavaScript curriculum.",
        tools: "Built with jQuery and Webpack"
    },
    {
        name: "ChillOut Co.",
        image: chilloutcoImg,
        siteLink: "https://doozles411.github.io/shopping-cart/",
        gitHubLink: "https://github.com/doozles411/shopping-cart",
        description: "A faux shopping app that uses React Router and features a shopping page with products to add to your cart. Completed as part of The Odin Project's Full Stack JavaScript curriculum.",
        tools: "Built with React and React Router"
    },
    {
        name: "CV Creator",
        image: cvbuilerImg,
        siteLink: "https://doozles411.github.io/CV-app/",
        gitHubLink: "https://github.com/doozles411/CV-app",
        description: "A resume building app that provides a template, guides users through CV creation, and produces a printable document. Completed as part of The Odin Project's Full Stack JavaScript curriculum.",
        tools: "Built with React"
    }
];

export default projectPreviews;