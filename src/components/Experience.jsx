import React from 'react';

function ExperienceCard({ role, company, location, period, bullets }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
        <h3 className="text-lg font-semibold">{role} <span className="text-neutral-400">· {company}</span></h3>
        <div className="text-sm text-neutral-400">{location} • {period}</div>
      </div>
      <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-neutral-200">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience({ experiences }) {
  return (
    <section id="experience" className="scroll-mt-24">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold">Professional Experience</h2>
        <span className="text-sm text-neutral-400">{experiences.length} roles</span>
      </div>
      <div className="grid gap-4">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} {...exp} />
        ))}
      </div>
    </section>
  );
}
