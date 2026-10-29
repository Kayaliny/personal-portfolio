import { skills } from '@/data/portfolio';
import { FadeUp } from './animations';

export default function Skills() {
  return (
    <section className="section-padding bg-bg-deep">
      <div className="container-max">
        <FadeUp>
          <p className="eyebrow mb-4">Technical Skills</p>
          <h2 className="heading-lg text-text-main">Tools &amp; Technologies</h2>
        </FadeUp>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <FadeUp key={group.category} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-bg-secondary/50 p-6">
                <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-teal-light">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-bg-deep/60 px-3 py-1.5 text-xs font-medium text-secondary transition-colors hover:border-teal/40 hover:text-text-main"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
