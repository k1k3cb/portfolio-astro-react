import type { DarkModeItem } from '@/types/types';
import { v4 } from 'uuid';

export const DARK_MODE_ITEMS: DarkModeItem[] = [
  {
    id: v4(),
    title: 'Light',
    icon: 'icons/entypo--light-up.svg'
  },
  {
    id: v4(),
    title: 'Dark',
    icon: 'icons/ph--moon-fill.svg'
  },
  {
    id: v4(),
    title: 'System',
    icon: 'icons/flowbite--desktop-pc-outline.svg'
  }
];
