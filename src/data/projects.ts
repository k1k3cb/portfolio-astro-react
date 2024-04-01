import { v4 } from 'uuid';
import { TECHNOLOGIES } from './technologies';
import { TAGS } from './tags';

export const PROJECTS = [
  {
    id: v4(),
    title: 'Cotizador de criptomonedas',
    description: 'Desarrollo de una web donde consultar la cotización en vivo de las criptomonedas más usadas',    
    img: 'https://github.com/k1k3cb/cotizador-criptomonedas/raw/main/public/screenShoot1.png',
    technologies: [
      TECHNOLOGIES.Astro.name,
      TECHNOLOGIES.TailwindCSS.name,
      TECHNOLOGIES.React.name,
      
    ],
    github_url: 'https://github.com/k1k3cb/cotizador-criptomonedas',
    live: 'https://cotizador-criptomonedas.onrender.com/',
    tags: [TAGS.Styled_Components, TAGS.SpinKit]
  }
];
