import { v4 } from 'uuid';
import type { NavItem } from '../types/types';

export const NAV_ITEMS: NavItem[] = [
  // {
  //   id: v4(),
  //   title: 'Experiencia',
  //   label: 'experiencia',
  //   url: '/#experiencia'
  // },
  {id:v4(),
    title: 'Proyectos',
    label: 'proyectos',
    url: '/#proyectos'
  },
  { id: v4(), title: 'Sobre mí', label: 'sobre-mi', url: '/#sobre-mi' },
  {
    id: v4(),
    title: 'Contacto',
    label: 'contacto',
    url: 'mailto:enriquecbardev@gmail.com'
  }
];
