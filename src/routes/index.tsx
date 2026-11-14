import { useEffect, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

import {
  cubing,
  education,
  experience,
  languages,
  profile,
  sections,
} from '@/data/resume'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const active = useActiveSection()

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-10 border-b border-border/60 bg-background/85 backdrop-blur">
        <ul className="mx-auto flex max-w-[var(--reading-width)] gap-5 overflow-x-auto px-6 py-3 text-sm">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={cn(
                  'whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground motion-reduce:transition-none',
                  active === s.id && 'font-medium text-foreground',
                )}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main className="mx-auto max-w-[var(--reading-width)] px-6 pb-24 pt-16">
        <header className="mb-16">
          <h1 className="font-heading text-5xl tracking-tight md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-muted-foreground">{profile.tagline}</p>
        </header>

        <Section id="education" title="Education">
          {education.map((e) => (
            <div key={e.school}>
              <div className="flex items-baseline justify-between gap-4">
                <p>
                  {e.role} <span className="text-muted-foreground">@</span>{' '}
                  <OrgBubble name={e.school} logo={e.logo} />
                </p>
                <Dates>{e.dates}</Dates>
              </div>
              <p className="mt-1 text-muted-foreground">{e.detail}</p>
              <p className="mt-1 text-sm text-muted-foreground">{e.extra}</p>
            </div>
          ))}
        </Section>

        <Section id="experience" title="Experience">
          <ul className="space-y-2">
            {experience.map((e) => (
              <ExperienceItem key={e.org} entry={e} />
            ))}
          </ul>
        </Section>

        <Section id="languages" title="Languages">
          <ul className="space-y-2">
            {languages.map((l) => (
              <li key={l.name} className="flex items-center gap-4">
                <span className="w-24">{l.name}</span>
                <span className="flex gap-1" aria-hidden>
                  {[1, 2, 3, 4].map((i) => (
                    <span
                      key={i}
                      className={cn(
                        'size-2 rounded-full',
                        i <= l.score ? 'bg-foreground' : 'bg-border',
                      )}
                    />
                  ))}
                </span>
                <span className="text-sm text-muted-foreground">{l.level}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="cubing" title="Off the Clock: Speedcubing">
          <p className="mb-5 text-muted-foreground">{cubing.blurb}</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {cubing.pbs.map((pb) => (
              <div
                key={pb.event}
                className="rounded-lg border border-border px-4 py-3"
              >
                <p className="font-mono text-2xl tabular-nums">{pb.time}</p>
                <p className="mt-1 text-sm text-muted-foreground">{pb.event}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p className="flex flex-wrap gap-x-2">
            <a
              className="link"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <span className="text-muted-foreground">·</span>
            <a className="link" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </p>
        </Section>
      </main>
    </div>
  )
}

function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="mb-16 scroll-mt-20">
      <h2 className="font-heading mb-6 text-3xl tracking-tight">{title}</h2>
      {children}
    </section>
  )
}

function Dates({ children }: { children: React.ReactNode }) {
  return (
    <span className="shrink-0 whitespace-nowrap text-sm text-muted-foreground tabular-nums">
      {children}
    </span>
  )
}

function OrgBubble({
  name,
  logo,
  url,
}: {
  name: string
  logo?: string
  url?: string
}) {
  const inner = (
    <>
      {logo && (
        <img
          src={logo}
          alt=""
          className="size-4 rounded-sm object-contain"
          loading="lazy"
        />
      )}
      {name}
    </>
  )
  const cls =
    'inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-2 py-0.5 align-middle text-sm font-medium'
  return url ? (
    <a
      className={cn(
        cls,
        'transition-colors hover:bg-accent motion-reduce:transition-none',
      )}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {inner}
    </a>
  ) : (
    <span className={cls}>{inner}</span>
  )
}

function ExperienceItem({ entry }: { entry: (typeof experience)[number] }) {
  return (
    <li className="py-2">
      <div className="flex items-baseline justify-between gap-4">
        <p>
          {entry.role} <span className="text-muted-foreground">@</span>{' '}
          <OrgBubble name={entry.org} logo={entry.logo} url={entry.url} />
        </p>
        <Dates>{entry.dates}</Dates>
      </div>
      <p className="mt-1 text-muted-foreground">{entry.blurb}</p>
    </li>
  )
}

function useActiveSection() {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )
    for (const s of sections) {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return active
}
