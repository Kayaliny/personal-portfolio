import { Briefcase, GraduationCap } from 'lucide-react';
import { about, profile } from '@/data/portfolio';
import aboutImage from '@/img/about1.jpeg';
import { FadeUp } from './animations';

export default function About() {
  return (
    <section id="about" className="section-padding bg-bg-deep">
      <div className="container-max">
        <FadeUp as="h2" className="heading-lg text-center text-text-main">
          {about.heading}
        </FadeUp>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeUp className="lg:col-span-4" delay={0.1}>
            <div className="relative mx-auto max-w-xs lg:mx-0 lg:max-w-none">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-teal/40 via-transparent to-navy/40" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
                <img
                  src={aboutImage}
                  alt={profile.name}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </FadeUp>

          <div className="space-y-10 lg:col-span-8">
            <FadeUp delay={0.15}>
              <div className="max-w-2xl space-y-5">
                {about.bio.map((para) => (
                  <p key={para.slice(0, 32)} className="body-lg">
                    {para}
                  </p>
                ))}
              </div>
            </FadeUp>

            <div className="grid gap-10 sm:grid-cols-2">
              <FadeUp delay={0.2}>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-secondary text-teal-light">
                    <Briefcase size={18} />
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-text-main">
                    Experience
                  </h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {about.experienceHighlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-secondary md:text-base"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeUp>

              <FadeUp delay={0.25}>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-secondary text-teal-light">
                    <GraduationCap size={18} />
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-text-main">
                    Education
                  </h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {about.educationHighlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-secondary md:text-base"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
