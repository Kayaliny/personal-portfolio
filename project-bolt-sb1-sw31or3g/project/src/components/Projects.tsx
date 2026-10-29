import { useEffect, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { AnimatePresence, motion, FadeUp } from './animations';
import { projects } from '@/data/portfolio';
import projectVehicle from '@/img/project-vehicle.jpg';
import projectTracker from '@/img/project-tracker.jpg';
import projectRedcell from '@/img/project-redcell.jpg';
import projectDashboard from '@/img/project-dashboard.jpg';
import vehicleVideo from '@/img/veel.mp4';
import trackerVideo from '@/img/sop.mp4';
import taskZenVideo from '@/img/pe01.mp4';
import bodimaVideo from '@/img/pro2.mp4';
import labReservationVideo from '@/img/pro3.mp4';
import redCellVideo from '@/img/pro7.mp4';

const bakerySlideModules = import.meta.glob('../img/pro4/*.{jpeg,jpg,png,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const bakerySlides = Object.keys(bakerySlideModules)
  .sort()
  .map((key) => bakerySlideModules[key]);

const dashboardSlideModules = import.meta.glob('../img/pro6/*.{jpeg,jpg,png,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const dashboardSlides = Object.keys(dashboardSlideModules)
  .sort()
  .map((key) => dashboardSlideModules[key]);

const projectImages: Record<string, string> = {
  vehicle: projectVehicle,
  tracker: projectTracker,
  redcell: projectRedcell,
  dashboard: projectDashboard,
};

const projectVideos: Record<string, string> = {
  vehicle: vehicleVideo,
  tracker: trackerVideo,
  redcell: redCellVideo,
  taskzen: taskZenVideo,
  bodima: bodimaVideo,
  labreservation: labReservationVideo,
};

const projectSlides: Record<string, string[]> = {
  bakery: bakerySlides,
  dashboard: dashboardSlides,
};

type Project = (typeof projects)[number];

function ProjectSlider({
  slides,
  title,
  className,
}: {
  slides: string[];
  title: string;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return undefined;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  const goTo = (next: number) => {
    setIndex((next + slides.length) % slides.length);
  };

  return (
    <div className="relative h-full w-full">
      {slides.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${title} screenshot ${i + 1}`}
          className={`${className} absolute inset-0 h-full w-full transition-opacity duration-500 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              goTo(index - 1);
            }}
            aria-label="Previous screenshot"
            className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-bg-deep/70 text-text-main transition-colors hover:bg-bg-deep"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              goTo(index + 1);
            }}
            aria-label="Next screenshot"
            className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-bg-deep/70 text-text-main transition-colors hover:bg-bg-deep"
          >
            <ChevronRight size={16} />
          </button>
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {slides.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setIndex(i);
                }}
                aria-label={`Go to screenshot ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? 'w-5 bg-teal-light' : 'w-1.5 bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

const portraitVideoKeys = new Set(['taskzen', 'labreservation']);

function mediaFrameClass(project: Project) {
  if (projectVideos[project.image]) {
    return portraitVideoKeys.has(project.image)
      ? 'relative flex h-[28rem] items-center justify-center overflow-hidden border-b border-border bg-bg-deep'
      : 'relative flex aspect-video items-center justify-center overflow-hidden border-b border-border bg-bg-deep';
  }

  return 'relative aspect-[16/10] overflow-hidden border-b border-border bg-bg-deep/30';
}

function ProjectMedia({ project }: { project: Project }) {
  const slides = projectSlides[project.image];
  const video = projectVideos[project.image];
  const image = projectImages[project.image];

  if (slides?.length) {
    return (
      <ProjectSlider
        slides={slides}
        title={project.title}
        className="h-full w-full object-contain"
      />
    );
  }

  if (video) {
    return (
      <video
        src={video}
        autoPlay
        muted
        loop
        playsInline
        className="max-h-full max-w-full object-contain"
        aria-label={project.title}
      />
    );
  }

  return <img src={image} alt={project.title} className="h-full w-full object-cover" />;
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-secondary/50 transition-all hover:border-teal/40">
      <div className={mediaFrameClass(project)}>
        <ProjectMedia project={project} />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="font-heading text-xs font-bold tracking-widest text-teal-light">
          {project.number}
        </span>
        <h3 className="mt-2 font-heading text-xl font-semibold text-text-main">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-secondary">
          {project.description}
        </p>
        <p className="mt-3 text-sm font-medium text-teal-light/90">
          Impact: {project.impact}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-bg-deep/60 px-3 py-1 text-xs font-medium text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={onOpen}
          className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-teal-light transition-all hover:gap-3"
        >
          View
          <ArrowUpRight size={15} />
        </button>
      </div>
    </article>
  );
}

function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-bg-deep/80 backdrop-blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-bg-secondary p-6 md:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 rounded-md p-1.5 text-secondary transition-colors hover:bg-white/5 hover:text-text-main"
        >
          <X size={20} />
        </button>

        <div className={`${mediaFrameClass(project)} rounded-xl border border-border`}>
          <ProjectMedia project={project} />
        </div>

        <span className="mt-5 block font-heading text-xs font-bold tracking-widest text-teal-light">
          Project {project.number}
        </span>
        <h3 className="mt-2 font-heading text-2xl font-bold text-text-main">{project.title}</h3>

        <div className="mt-5 space-y-5">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-teal-light">
              Description
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-secondary">{project.description}</p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-teal-light">Impact</h4>
            <p className="mt-2 text-sm leading-relaxed text-secondary">{project.impact}</p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-teal-light">
              Solution Approach
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-secondary">{project.solution}</p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-teal-light">
              Key Capabilities
            </h4>
            <ul className="mt-2 space-y-2">
              {project.capabilities.map((c) => (
                <li key={c} className="flex gap-3 text-sm leading-relaxed text-secondary">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal/60" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-teal-light">
              Technologies Used
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-bg-deep/60 px-3 py-1.5 text-xs font-medium text-secondary"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-light transition-all hover:gap-3"
          >
            View on GitHub
            <ArrowUpRight size={15} />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding bg-bg-deep">
      <div className="container-max">
        <FadeUp>
          <p className="eyebrow mb-4">Selected Work</p>
          <h2 className="heading-lg text-text-main">Selected Projects</h2>
          <p className="mt-5 max-w-2xl body-lg">
            Practical digital solutions developed to improve operational visibility, workflow
            coordination, and process efficiency — with measurable shop-floor impact.
          </p>
        </FadeUp>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <FadeUp key={project.number} delay={i * 0.08}>
              <ProjectCard project={project} onOpen={() => setSelected(project)} />
            </FadeUp>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectDialog project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
