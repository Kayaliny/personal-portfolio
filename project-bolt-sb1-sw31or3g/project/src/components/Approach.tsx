import { approach } from '@/data/portfolio';
import { FadeUp } from './animations';

export default function Approach() {
  return (
    <section className="section-padding bg-bg-secondary">
      <div className="container-max">
        <FadeUp>
          <p className="eyebrow mb-4">Methodology</p>
          <h2 className="heading-lg text-text-main">How I Approach Digital Solutions</h2>
        </FadeUp>

        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {approach.map((item, i) => (
            <FadeUp key={item.step} delay={i * 0.08}>
              <div className="relative rounded-2xl border border-border bg-bg-deep/50 p-6">
                {i < approach.length - 1 && (
                  <span className="absolute right-0 top-1/2 hidden h-px w-6 translate-x-full bg-border md:block" />
                )}
                <span className="font-heading text-3xl font-extrabold text-teal/30">
                  {item.step}
                </span>
                <h3 className="mt-3 font-heading text-lg font-semibold text-text-main">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary">
                  {item.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
