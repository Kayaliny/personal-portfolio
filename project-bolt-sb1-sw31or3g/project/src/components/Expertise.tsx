import { BarChart3, Code2, Workflow, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { expertise } from '@/data/portfolio';
import { FadeUp } from './animations';

const icons: LucideIcon[] = [Workflow, BarChart3, Zap, Code2];

export default function Expertise() {
  return (
    <section id="expertise" className="section-padding bg-bg-secondary">
      <div className="container-max">
        <FadeUp>
          <p className="eyebrow mb-4">Core Expertise</p>
          <h2 className="heading-lg text-text-main">Areas of Expertise</h2>
        </FadeUp>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((card, i) => {
            const Icon = icons[i] ?? Workflow;
            return (
              <FadeUp key={card.number} delay={i * 0.08}>
                <article className="group h-full rounded-2xl border border-border bg-bg-deep/50 p-7 transition-all hover:border-teal/50 hover:bg-bg-deep">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-teal/5 text-teal-light transition-colors group-hover:border-teal/40">
                    <Icon size={20} />
                  </div>
                  <span className="mt-6 block font-heading text-xs font-bold tracking-widest text-secondary/60">
                    {card.number}
                  </span>
                  <h3 className="mt-2 font-heading text-lg font-semibold text-text-main">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-secondary">
                    {card.description}
                  </p>
                </article>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
