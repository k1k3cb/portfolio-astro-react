import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { DARK_MODE_ITEMS } from '@/data/darkMode';
import { NAV_ITEMS } from '@/data/navItems';
import type { DarkModeItem, NavItem } from '@/types/types';
import { useEffect, useState } from 'react';

const Header = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const [theme, setTheme] = useState(() => {
    //Compruebo el tema preferido del usuario en su sistema
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return DARK_MODE_ITEMS[1];
    } else {
      return DARK_MODE_ITEMS[0];
    }
  });

  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  const hanldeChangeTheme = (selectedTheme: DarkModeItem) => {
    setTheme(selectedTheme);
  };

  useEffect(() => {
    if (theme.title === 'Dark') {
      document.querySelector('html')?.classList.add('dark');
    } else {
      document.querySelector('html')?.classList.remove('dark');
    }
  }, [theme]);

  const handleSmoothScroll = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    const headerOffset = 100; // Ajuste por el sticky header
    const elementPosition = targetElement?.getBoundingClientRect().top || 0;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <header className='sticky top-0 z-50 w-full py-3 bg-background backdrop-blur-lg border-b border-neutral-700/80  md:bg-background/80 dark:bg-slate-500 mb-10'>
      <nav className='container flex items-center justify-between w-[92%] px-10 lg:justify-center'>
        <a>
          <img
            src='https://www.creativefabrica.com/wp-content/uploads/2021/03/20/Mountain-logo-Design-Graphics-9785421-1-1-580x435.png'
            alt='Logo'
            className='w-20 cursor-pointer '
          />
        </a>

        <ul className='hidden md:flex  space-x-12 mr-5'>
          {NAV_ITEMS.map((item: NavItem) => (
            <li
              className='hover:bg-slate-300 rounded hover:text-teal-600 py-4 px-4 trasnsition-all duration-300 md:py-2'
              key={item.id}
            >
              {' '}
              <a
                href={item.href}
                onClick={e => handleSmoothScroll(e, item.href)}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        <div className='flex items-center'>
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger>
              <img
                src={theme.icon}
                alt={`${theme.title} Icon`}
                width={20}
                className='mr-6 md:mr-0 '
              />
            </PopoverTrigger>
            <PopoverContent>
              {DARK_MODE_ITEMS.map(item => (
                <div
                  className='flex gap-2 p-2 rounded cursor-pointer hover:bg-slate-400  '
                  key={item.id}
                  onClick={() => {
                    setIsOpen(false); // Cerrar el popover al seleccionar una opción
                    hanldeChangeTheme(item);
                  }}
                >
                  <img src={item.icon} alt={`${item.title} Icon`} width={15} />
                  <span className='text-md'>{item.title}</span>
                </div>
              ))}
            </PopoverContent>
          </Popover>
        </div>

        <div className=' flex flex-col justify-end md:hidden'>
          <button onClick={toggleNavbar}>
            {mobileDrawerOpen ? (
              <img src='/icons/material-symbols--close.svg' alt='' width={30} />
            ) : (
              <img src='icons/ci--hamburger-lg.svg' alt='' width={30} />
            )}
          </button>
        </div>

        {mobileDrawerOpen && (
          <ul className='fixed right-0 z-20 p-10 bg-background w-full top-20 flex flex-col justify-center items-center first-letter:border-b border-neutral-700/80 dark:bg-slate-500'>
            {NAV_ITEMS.map((item: NavItem) => (
              <li
                className='hover:bg-slate-300 rounded hover:text-teal-600 py-4 px-4 trasnsition-all duration-300 md:py-2'
                key={item.id}
              >
                {' '}
                <a
                  href={item.href}
                  onClick={e => handleSmoothScroll(e, item.href)}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
