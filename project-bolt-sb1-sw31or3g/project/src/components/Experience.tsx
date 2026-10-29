import { experience, experienceIntro } from '@/data/portfolio';
import { FadeUp } from './animations';

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden section-padding bg-bg-secondary">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-teal/5 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-navy/40 blur-3xl" />
      </div>

      <div className="container-max relative">
        <FadeUp className="max-w-3xl">
          <p className="eyebrow mb-4">Career</p>
          <h2 className="heading-lg text-text-main">Professional Experience</h2>
          <p className="mt-5 body-lg">{experienceIntro}</p>
        </FadeUp>

        <div className="mt-16 space-y-0 border-t border-border">
          {experience.map((job, i) => {
            const isCurrent = job.period.toLowerCase().includes('present');

            return (
              <FadeUp key={i} delay={i * 0.08}>
                <article
                  className={`group grid gap-6 border-b border-border py-10 transition-colors md:grid-cols-12 md:gap-10 md:py-12 ${
                    isCurrent ? 'bg-teal/[0.04]' : 'hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="md:col-span-2">
                    <span className="font-heading text-4xl font-extrabold tracking-tight text-teal-light/25 transition-colors group-hover:text-teal-light/50 md:text-5xl">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="md:col-span-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-heading text-xl font-semibold text-text-main md:text-2xl">
                        {job.role}
                      </h3>
                      {isCurrent && (
                        <span className="rounded-sm bg-teal/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-light">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm font-medium text-teal-light md:text-base">
                      {job.company}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {job.responsibilities.map((r, j) => (
                        <li
                          key={j}
                          className="grid grid-cols-[auto_1fr] gap-3 text-sm leading-relaxed text-secondary md:text-[15px]"
                        >
                          <span className="mt-2 h-px w-4 bg-teal/50" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:col-span-4 md:text-right">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                      {job.period}
                    </p>
                    <div
                      className={`mt-4 h-1 w-16 transition-all duration-500 group-hover:w-24 md:ml-auto ${
                        isCurrent ? 'bg-teal-light' : 'bg-border group-hover:bg-teal/60'
                      }`}
                    />
                  </div>
                </article>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
