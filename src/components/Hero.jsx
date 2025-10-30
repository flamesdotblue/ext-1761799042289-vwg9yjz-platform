import React from 'react';
import Spline from '@splinetool/react-spline';
import { Mail, Phone, MapPin, FileDown } from 'lucide-react';
import { profile } from '../data/profile';

export default function Hero() {
  return (
    <section id="home" className="relative w-full">
      <div className="relative h-[70vh] sm:h-[75vh] lg:h-[85vh] overflow-hidden">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-10">
            <div className="max-w-4xl">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                {profile.name}
              </h1>
              <p className="mt-3 sm:mt-5 text-neutral-300 text-base sm:text-lg max-w-2xl">
                {profile.objective}
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                <a href={`tel:${profile.contact.phone}`} className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 backdrop-blur hover:bg-white/10 transition">
                  <Phone size={16} className="text-emerald-400" />
                  <span className="truncate">{profile.contact.phone}</span>
                </a>
                <a href={`mailto:${profile.contact.email}`} className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 backdrop-blur hover:bg-white/10 transition">
                  <Mail size={16} className="text-emerald-400" />
                  <span className="truncate">{profile.contact.email}</span>
                </a>
                <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
                  <MapPin size={16} className="text-emerald-400" />
                  <span className="truncate">{profile.location}</span>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#experience" className="rounded-md bg-emerald-400 text-black px-4 py-2 font-medium hover:bg-emerald-300 transition">View Experience</a>
                <a href="#education" className="rounded-md border border-white/10 px-4 py-2 font-medium hover:bg-white/10 transition">Education & Certifications</a>
                <a href="#skills" className="rounded-md border border-white/10 px-4 py-2 font-medium hover:bg-white/10 transition">Skills</a>
                {profile.resumeUrl && (
                  <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-2 font-medium hover:bg-white/10 transition">
                    <FileDown size={16} /> Download CV
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
