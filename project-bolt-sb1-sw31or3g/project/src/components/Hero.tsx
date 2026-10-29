import { ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { profile } from '@/data/portfolio';
import profileImage from '@/img/pro.jpeg';

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-bg-deep pt-28 md:pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-teal/10 blur-3xl" />
        <div className="absolute top-1/2 -left-24 h-72 w-72 rounded-full bg-navy/30 blur-3xl" />
      </div>

      <div className="container-max relative grid items-center gap-12 px-6 pb-20 md:px-10 md:pb-28 lg:grid-cols-12 lg:gap-16 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7"
        >
          <p className="eyebrow mb-5">{profile.role}</p>
          <h1 className="heading-xl text-text-main">
            Turning Manual Processes into{' '}
            <span className="text-teal-light">Smart Digital Solutions</span>.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-secondary md:text-lg">
            {profile.heroIntro}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => scrollTo('#projects')}
              className="group inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-bg-deep transition-all hover:bg-teal-light"
            >
              Explore My Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              type="button"
              onClick={() => scrollTo('#contact')}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-6 py-3 text-sm font-semibold text-text-main transition-all hover:border-teal-light hover:text-teal-light"
            >
              <Mail size={16} />
              Get In Touch
            </button>
          </div>

          <p className="mt-10 text-sm font-medium text-secondary">
            <span className="text-teal-light">Power Apps</span>
            {' | '}Power Automate{' | '}Power BI{' | '}SharePoint{' | '}Process Automation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-teal/40 via-transparent to-navy/40" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-bg-secondary">
              <img
                src={profileImage}
                alt={profile.name}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-bg-deep px-5 py-2 text-xs font-semibold text-teal-light shadow-lg">
              {profile.portraitLabel}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
