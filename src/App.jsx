import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import EducationCerts from './components/EducationCerts';
import SkillsLanguages from './components/SkillsLanguages';
import { profile } from './data/profile';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-emerald-400 selection:text-black">
      <a href="#top" id="top" className="sr-only">Back to top</a>
      <Hero />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-20">
        <Experience experiences={profile.experiences} />
        <EducationCerts education={profile.education} certifications={profile.certifications} />
        <SkillsLanguages skills={profile.skills} languages={profile.languages} interests={profile.interests} />
      </main>

      <footer className="border-t border-white/10 bg-neutral-950/60 backdrop-blur">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-400">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <div className="text-sm text-neutral-400">
            <span className="font-medium text-neutral-200">Current:</span> {profile.address.current}
          </div>
        </div>
      </footer>
    </div>
  );
}
