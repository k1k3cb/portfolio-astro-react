import { v4 } from 'uuid';
import { TAGS } from './tags';
import { TECHNOLOGIES } from './technologies';

export const PROJECTS = [
  {
    id: v4(),
    title: 'Cotizador de criptomonedas',
    description:
      'Desarrollo de una web donde consultar la cotización en vivo de las criptomonedas más usadas',
    image: 'https://github.com/k1k3cb/cotizador-criptomonedas/raw/main/public/screenShoot1.png',
    technologies: [TECHNOLOGIES.React.icon, TECHNOLOGIES.TailwindCSS.icon],
    github_url: 'https://github.com/k1k3cb/cotizador-criptomonedas',
    live: 'https://cotizador-criptomonedas.onrender.com/',
    tags: [TAGS.Styled_Components, TAGS.SpinKit]
  },
  {
    id: v4(),
    title: 'theMovie',
    description:
      'Este proyecto consiste en el desarrollo de un buscador de películas por distintas categorías.Cada película tiene la opción de acceder a su ficha y ver información más completa.',
    image: 'https://raw.githubusercontent.com/k1k3cb/theMovie-React-Bootstrap/main/public/sceenshoot_home.jpg',
    technologies: [
      
      TECHNOLOGIES.Boostrap.icon,
      TECHNOLOGIES.React.icon
    ],
    github_url: 'https://github.com/k1k3cb/theMovie-React-Bootstrap',
    live: 'https://themovie-react-bootstrap.onrender.com/',
    tags: [TAGS.Axios, TAGS.React_Router_Dom]
  },
  {
    id: v4(),
    title: 'Social Network MUI',
    description:
      'Web estilo red social utilizando React y Material UI.',
    image: 'https://raw.githubusercontent.com/k1k3cb/Social-Network-MUI/main/public/screenShoots/img1.png',
    technologies: [TECHNOLOGIES.Vite.icon, TECHNOLOGIES.React.icon],
    github_url: 'https://github.com/k1k3cb/Social-Network-MUI',
    live: 'https://social-network-mui.onrender.com/',
    tags: [TAGS.MUI]
  },
  {
    id: v4(),
    title: 'Rock-Paper-Scissors game',
    description: 'Juego del "piedra papel tijera".',
    image: 'https://github.com/k1k3cb/Rock-Paper-Scissors-game/blob/main/src/assets/project_captures/home-game.jpg?raw=true',
    technologies: [
      TECHNOLOGIES.HTML.icon,
      TECHNOLOGIES.CSS.icon,
      TECHNOLOGIES.Javascript.icon
    ],
    github_url: 'https://github.com/k1k3cb/Rock-Paper-Scissors-game',
    live: 'https://rock-paper-scissors-game-5u14.onrender.com/',
    tags: []
  },
  {
    id: v4(),
    title: 'Password Generator',
    description:
      'Este proyecto consiste en el desarrollo de una aplicación web para generar contraseñas a partir de los inputs marcados (mayúsculas, minúsculas, números y símbolos).',
    image: 'https://raw.githubusercontent.com/k1k3cb/password-generator/main/src/assets/images/project_captures/captura-password-generator.jpg',
    technologies: [
      TECHNOLOGIES.HTML.icon,
      TECHNOLOGIES.CSS.icon,
      TECHNOLOGIES.Javascript.icon
    ],
    github_url: 'https://github.com/k1k3cb/password-generator',
    live: 'https://password-generator-2koc.onrender.com/',
    tags: []
  }
];
