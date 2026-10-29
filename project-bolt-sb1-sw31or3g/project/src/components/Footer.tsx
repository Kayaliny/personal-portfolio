import { useEffect, useState } from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { AnimatePresence, motion, useScrolled } from './animations';
import { navLinks, profile } from '@/data/portfolio';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const scrolled = useScrolled(600);

  useEffect(() => {
    setShowTop(scrolled);
  }, [scrolled]);

  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-bg-deep">
      <div className="container-max px-6 py-14 md:px-10 lg:px-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-heading text-lg font-extrabold tracking-tight text-text-main">
              {profile.shortName.toUpperCase()}<span className="text-teal-light">.</span>
            </p>
            <p className="mt-2 text-sm text-secondary">{profile.role}</p>
            <div className="mt-5 flex gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-secondary transition-colors hover:border-teal/40 hover:text-teal-light"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-secondary transition-colors hover:border-teal/40 hover:text-teal-light"
              >
                <Github size={16} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-secondary transition-colors hover:border-teal/40 hover:text-teal-light"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div className="md:justify-self-center">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-text-main">
              Quick Navigation
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className="text-sm text-secondary transition-colors hover:text-teal-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:justify-self-end">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-text-main">
              Get In Touch
            </h3>
            <p className="mt-4 text-sm text-secondary">{profile.email}</p>
            <p className="mt-1 text-sm text-secondary">{profile.phone}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-secondary">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="text-xs text-secondary/60">
            Built with React, TypeScript &amp; Tailwind CSS.
          </p>
        </div>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg-secondary text-teal-light shadow-lg transition-colors hover:border-teal/50"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
