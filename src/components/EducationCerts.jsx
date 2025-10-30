import React from 'react';

function EduItem({ degree, institution, location, period, score }) {
  return (
    <div className="rounded-lg border border-white/10 p-4 bg-white/5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
        <h3 className="font-semibold">{degree}</h3>
        <div className="text-sm text-neutral-400">{period}</div>
      </div>
      <div className="text-sm text-neutral-300">{institution}{location ? `, ${location}` : ''}</div>
      {score && <div className="text-sm text-neutral-400 mt-1">{score}</div>}
    </div>
  );
}

function CertItem({ name, org, date }) {
  return (
    <div className="rounded-lg border border-white/10 p-4 bg-white/5 flex items-center justify-between">
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-neutral-400">{org}</p>
      </div>
      <span className="text-xs text-neutral-400 whitespace-nowrap">{date}</span>
    </div>
  );
}

export default function EducationCerts({ education, certifications }) {
  return (
    <section id="education" className="scroll-mt-24">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Education & Certifications</h2>
      <div className="grid lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Education</h3>
          <div className="grid gap-3">
            {education.map((e, i) => (
              <EduItem key={i} {...e} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Certifications</h3>
          <div className="grid gap-3">
            {certifications.map((c, i) => (
              <CertItem key={i} {...c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
