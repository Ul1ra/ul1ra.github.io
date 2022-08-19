// Project Images
import introfly from "../images/project/introfly.png"
import fusion from "../images/project/fusion.png"
import gradient from "../images/project/gradient.png"
import animalFarm from "../images/project/animalFarm.png"
import memoryGame from "../images/project/memoryGame.png"

import ps1img1 from '../images/project-single/img-1.jpg'
import ps1img2 from '../images/project-single/img-2.jpg'
import ps1img3 from '../images/project-single/img-3.jpg'

import psub1img1 from '../images/project-single/p1.jpg'
import psub1img2 from '../images/project-single/p2.jpg'


const Projects = [
    {
       Id:'1',
       pImg:introfly,
       ps1img:ps1img1,
       psub1img1:psub1img1,
       psub1img2:psub1img2,
       title:'introfly - Simply Removing Time from Meetings',  
       subTitle:'React, Redux, Tailwind, OAuth2, Firebase, Gmail & Google Calendar API, Nginx, Docker, Gitlab CI/CD',   
       link: 'https://gitlab.com/OndrejJanosik777/introfly',
    },
    {
       Id:'2',
       pImg:fusion,
       ps1img:ps1img2,
       psub1img1:psub1img1,
       psub1img2:psub1img2,
       title:'Fusion - A Yelp like app that reviews and rates restaurants', 
       subTitle:'React, Redux, Sass, Python, Django, Nginx, Docker, Gitlab CI/CD',    
       link: 'https://github.com/Ul1ra/Fusion',
    },
    {
      Id:'3',
      pImg:gradient,
      ps1img:ps1img3,
      psub1img1:psub1img1,
      psub1img2:psub1img2,
      title:'Gradient - A Instagram like app allows to login and connect with others',  
      subTitle:'React, Redux, Sass, Python, Django, Nginx, Docker, Gitlab CI/CD',   
      link: 'https://github.com/Ul1ra/Gradient',
   },
   {
      Id:'4',
      pImg:animalFarm,
      ps1img:ps1img2,
      psub1img1:psub1img1,
      psub1img2:psub1img2,
      title:'Animal Farm - A simple app with a search field to looking through animals', 
      subTitle:'React, ExpressJS',    
      link: 'https://github.com/Ul1ra/animal_farm',
   },
   {
      Id:'5',
      pImg:memoryGame,
      ps1img:ps1img2,
      psub1img1:psub1img1,
      psub1img2:psub1img2,
      title:'Memory Game - A simple game to match two cards together', 
      subTitle:'React, Firebase, PWA',    
      link: 'https://github.com/Ul1ra/memorygame',
   },
   
    
]

export default Projects;