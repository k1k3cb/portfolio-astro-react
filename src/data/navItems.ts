import { v4 } from 'uuid';
import type { NavItem } from '../types/types';

export const NAV_ITEMS: NavItem[] = [
  // {
  //   id: v4(),
  //   title: 'Experiencia',
  //   label: 'experiencia',
  //   url: '/#experiencia'
  // },

  { id: v4(), title: 'Sobre mí', label: 'sobre-mi', href: '#sobre-mi' },
  { id: v4(), title: 'Proyectos', label: 'proyectos', href: '#proyectos' },
  {
    id: v4(),
    title: 'Contacto',
    label: 'contacto',
    href: 'mailto:enriquecbardev@gmail.com'
  }
];
