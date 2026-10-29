import { GraduationCap } from 'lucide-react';
import { education } from '@/data/portfolio';
import { FadeUp } from './animations';

export default function Education() {
  return (
    <section id="education" className="section-padding bg-bg-deep">
      <div className="container-max">
        <FadeUp>
          <p className="eyebrow mb-4">Academic Background</p>
          <h2 className="heading-lg text-text-main">Education</h2>
        </FadeUp>

        <div className="mt-12 max-w-3xl">
          {education.map((edu, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="relative pl-12 pb-10 last:pb-0">
                {i < education.length - 1 && (
                  <span className="absolute left-[18px] top-12 h-full w-px bg-border" />
                )}
                <span className="absolute left-0 top-1.5 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-bg-secondary text-teal-light">
                  <GraduationCap size={16} />
                </span>

                <div className="rounded-2xl border border-border bg-bg-secondary/50 p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-heading text-lg font-semibold text-text-main">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-medium text-secondary">{edu.period}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-teal-light">{edu.institution}</p>

                  <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                    {edu.details.map((d) => (
                      <li
                        key={d}
                        className="text-sm leading-relaxed text-secondary"
                      >
                        <span className="text-text-main">{d.split(':')[0]}</span>
                        {d.includes(':') && (
                          <span className="text-secondary">:{d.split(':').slice(1).join(':')}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
