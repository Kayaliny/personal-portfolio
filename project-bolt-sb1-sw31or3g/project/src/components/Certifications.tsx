import { Award, Globe } from 'lucide-react';
import { certifications, languages } from '@/data/portfolio';
import { FadeUp } from './animations';

export default function Certifications() {
  return (
    <section className="section-padding bg-bg-secondary">
      <div className="container-max">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <FadeUp className="lg:col-span-8">
            <p className="eyebrow mb-4">Continuous Learning</p>
            <h2 className="heading-md text-text-main">
              Certifications &amp; Continuous Learning
            </h2>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {certifications.map((cert, i) => (
                <FadeUp key={i} delay={i * 0.05} className={cert.wide ? 'sm:col-span-2' : undefined}>
                  <li className="flex h-full items-start gap-3 rounded-xl border border-border bg-bg-deep/40 p-4">
                    <Award size={16} className="mt-0.5 flex-shrink-0 text-teal-light" />
                    <div>
                      <p className="text-sm font-semibold text-text-main">{cert.name}</p>
                      <p className="mt-0.5 text-xs text-secondary">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  </li>
                </FadeUp>
              ))}
            </ul>
          </FadeUp>

          <FadeUp className="lg:col-span-4" delay={0.15}>
            <div className="rounded-2xl border border-border bg-bg-deep/40 p-6">
              <div className="flex items-center gap-2">
                <Globe size={18} className="text-teal-light" />
                <h3 className="font-heading text-lg font-semibold text-text-main">Languages</h3>
              </div>
              <ul className="mt-5 space-y-4">
                {languages.map((lang) => (
                  <li
                    key={lang.name}
                    className="flex items-center justify-between border-b border-border/60 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="font-medium text-text-main">{lang.name}</span>
                    <span className="rounded-full border border-teal/30 bg-teal/5 px-3 py-1 text-xs font-medium text-teal-light">
                      {lang.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
