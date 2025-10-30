import React from 'react';

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-neutral-200">
      {children}
    </span>
  );
}

export default function SkillsLanguages({ skills, languages, interests }) {
  return (
    <section id="skills" className="scroll-mt-24">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Skills, Languages & Interests</h2>
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="rounded-xl border border-white/10 p-5 bg-white/5">
          <h3 className="font-semibold mb-3">Technical Skills</h3>
          <div className="space-y-3">
            {skills.technical.map((group, idx) => (
              <div key={idx}>
                <p className="text-sm text-neutral-400 mb-2">{group.title}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-white/10 p-5 bg-white/5">
          <h3 className="font-semibold mb-3">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.soft.map((item) => (
              <Chip key={item}>{item}</Chip>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-white/10 p-5 bg-white/5">
          <h3 className="font-semibold mb-3">Languages & Interests</h3>
          <div>
            <p className="text-sm text-neutral-400 mb-1">Languages</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {languages.map((lang) => (
                <Chip key={lang.name}>{`${lang.name} – ${lang.level}`}</Chip>
              ))}
            </div>
            <p className="text-sm text-neutral-400 mb-1">Interests</p>
            <div className="flex flex-wrap gap-2">
              {interests.map((int) => (
                <Chip key={int}>{int}</Chip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
