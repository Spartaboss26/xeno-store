import Image from "next/image";
import ShopSection from "./ShopSection";

export default function Home() {
  return (
    <div className="starfield min-h-screen">
      {/* ── Nav ─────────────────────────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-3">
            <Image
              src="/brand/logo-brush-x.png"
              alt="XENO"
              width={40}
              height={40}
              className="invert"
            />
            <span className="text-xl font-black tracking-[0.25em] text-white">
              XENO
            </span>
          </a>
          <div className="flex items-center gap-4 text-sm font-semibold sm:gap-6">
            <a href="#shop" className="text-zinc-300 transition hover:text-white">
              Shop
            </a>
            <a href="#about" className="text-zinc-300 transition hover:text-white">
              About
            </a>
            <a href="#contact" className="text-zinc-300 transition hover:text-white">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* ── Hero ────────────────────────────────────────── */}
      <section id="top" className="hero-glow relative flex min-h-screen flex-col items-center justify-center px-4 pt-16 text-center">
        <div className="mb-8 overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_64px_rgba(124,58,237,0.35)]">
          <Image
            src="/brand/logo-alien-xeno.png"
            alt="XENO alien mark"
            width={220}
            height={220}
            className="h-44 w-44 object-cover sm:h-56 sm:w-56"
            priority
          />
        </div>
        <p className="mb-4 text-xs font-bold tracking-[0.5em] text-[#22ff88] text-glow-green sm:text-sm">
          TRANSMISSION INCOMING
        </p>
        <h1 className="text-glow-purple max-w-4xl text-5xl font-black leading-none tracking-tight text-white sm:text-7xl md:text-8xl">
          BEYOND THE
          <br />
          UNKNOWN
        </h1>
        <p className="mt-6 max-w-xl text-base text-zinc-400 sm:text-lg">
          XENO is streetwear from another place. Heavyweight hoodies and tees,
          made to order. No mass production. No noise. Just the signal.
        </p>
        <a
          href="#shop"
          className="mt-10 rounded-full bg-[#7c3aed] px-10 py-4 text-base font-bold tracking-wide text-white shadow-[0_0_32px_rgba(124,58,237,0.5)] transition hover:bg-[#8b5cf6] hover:shadow-[0_0_48px_rgba(124,58,237,0.7)]"
        >
          SHOP THE DROP
        </a>
        <p className="mt-6 text-xs tracking-[0.3em] text-zinc-600">
          SCROLL ▾
        </p>
      </section>

      {/* ── Marquee divider ───────────────────────────── */}
      <div className="overflow-hidden border-y border-white/10 bg-[#7c3aed]/10 py-3">
        <p className="whitespace-nowrap text-center text-sm font-black tracking-[0.35em] text-white/80">
          BEYOND THE UNKNOWN ✦ XENO ✦ BEYOND THE UNKNOWN ✦ XENO ✦ BEYOND THE UNKNOWN ✦ XENO
        </p>
      </div>

      {/* ── Product grid ────────────────────────────────── */}
      <ShopSection />

      {/* ── About ───────────────────────────────────────── */}
      <section id="about" className="border-y border-white/10 bg-zinc-950/60 px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-[0.5em] text-[#7c3aed]">THE SIGNAL</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Not from here.
          </h2>
          <div className="mt-6 space-y-4 text-left text-base leading-relaxed text-zinc-400 sm:text-lg">
            <p>
              XENO started with a simple idea: streetwear that feels like it
              came from somewhere else. Every piece carries the mark of the
              unknown — bold, heavy, built to last.
            </p>
            <p>
              The goal is bigger than clothes. We&apos;re building XENO into
              one of Canada&apos;s biggest brands so we can use what we build
              to help people who need it. Beyond the Unknown isn&apos;t just a
              slogan — it&apos;s the mission.
            </p>
          </div>
        </div>
      </section>

      {/* ── Brand marks ───────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="text-center text-xs font-bold tracking-[0.5em] text-[#22ff88]">THE MARKS</p>
        <h2 className="mt-4 text-center text-3xl font-black tracking-tight text-white sm:text-4xl">
          Worn by the unknown.
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-sm text-zinc-500">
          Every mark is drawn by hand. No templates, no stock.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {[
            { src: "/brand/logo-brush-xeno.png", alt: "XENO brush logo", invert: true },
            { src: "/brand/logo-ufo-script.png", alt: "UFO script logo", invert: true },
            { src: "/brand/logo-brush-x.png", alt: "X brush mark", invert: true },
            { src: "/brand/logo-xeno-clothing-mask.png", alt: "XENO Clothing mask logo", invert: false },
            { src: "/brand/logo-xk-circle.png", alt: "XK monogram circle", invert: false },
            { src: "/brand/logo-xk-bold.png", alt: "XK monogram", invert: false },
            { src: "/brand/logo-xk-outline.png", alt: "XK outline monogram", invert: false },
            { src: "/brand/logo-xk-diamond.png", alt: "XK diamond monogram", invert: false },
            { src: "/brand/logo-xeno-red.png", alt: "XENO red serif logo", invert: false, light: true },
            { src: "/brand/logo-alien-xeno.png", alt: "XENO alien logo", invert: false },
          ].map((m) => (
            <div
              key={m.src}
              className={`flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-white/10 p-4 ${m.light ? "bg-white" : "bg-zinc-950/80"}`}
            >
              <Image
                src={m.src}
                alt={m.alt}
                width={200}
                height={200}
                className={`h-full w-full object-contain ${m.invert ? "invert" : ""}`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────── */}
      <section id="contact" className="mx-auto max-w-3xl px-4 py-20 text-center sm:py-28">
        <p className="text-xs font-bold tracking-[0.5em] text-[#22ff88]">MAKE CONTACT</p>
        <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
          Questions? Orders?
        </h2>
        <p className="mt-4 text-zinc-400">
          Email us — we answer everything personally.
        </p>
        <a
          href="mailto:orriefoye6@gmail.com?subject=XENO%20inquiry"
          className="mt-8 inline-block rounded-full bg-white px-10 py-4 text-base font-bold text-black transition hover:bg-zinc-200"
        >
          orriefoye6@gmail.com
        </a>
        <p className="mt-6 text-sm text-zinc-600">Brampton, Ontario, Canada</p>
      </section>

      {/* ── Footer ──────────────────────────────────────── */}
      <footer className="border-t border-white/10 px-4 py-8 text-center">
        <div className="mx-auto w-fit overflow-hidden rounded-xl">
          <Image
            src="/brand/logo-xeno-clothing-mask.png"
            alt="XENO Clothing"
            width={160}
            height={160}
            className="h-24 w-24 object-cover"
          />
        </div>
        <p className="mt-4 text-xs tracking-[0.2em] text-zinc-600">
          BEYOND THE UNKNOWN.
        </p>
        <p className="mt-4 text-xs tracking-[0.2em] text-zinc-600">
          FOLLOW THE SIGNAL
        </p>
        <a
          href="https://www.instagram.com/xeno_world419"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-sm font-bold text-white transition hover:text-[#22ff88]"
        >
          Instagram — @xeno_world419
        </a>
        <p className="mt-4 text-xs text-zinc-700">
          © 2026 BTOSTUDIO. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
