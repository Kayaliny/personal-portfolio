import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useActiveSection, useScrolled } from './animations';
import { navLinks, profile } from '@/data/portfolio';

export default function Navbar() {
  const scrolled = useScrolled(40);
  const active = useActiveSection(navLinks.map((l) => l.href.slice(1)));
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-bg-deep/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-max flex h-16 items-center justify-between px-6 md:px-10 lg:px-16">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav('#home');
          }}
          className="font-heading text-lg font-extrabold tracking-tight text-text-main"
        >
          {profile.shortName.toUpperCase()}<span className="text-teal-light">.</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className={`relative text-sm font-medium transition-colors ${
                    isActive ? 'text-text-main' : 'text-secondary hover:text-text-main'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-teal-light"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNav('#contact');
            }}
            className="rounded-full border border-teal/60 bg-teal/10 px-5 py-2 text-sm font-semibold text-teal-light transition-all hover:bg-teal/20 hover:border-teal-light"
          >
            Let's Connect
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-text-main transition-colors hover:bg-white/5 lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border bg-bg-secondary lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className="block rounded-md px-3 py-3 text-base font-medium text-secondary transition-colors hover:bg-white/5 hover:text-text-main"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('#contact');
                  }}
                  className="block rounded-full border border-teal/60 bg-teal/10 px-5 py-3 text-center text-sm font-semibold text-teal-light"
                >
                  Let's Connect
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
