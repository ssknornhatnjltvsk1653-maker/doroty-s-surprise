import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Sparkles, Gift } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { BlossomBackground } from "@/components/experience/BlossomBackground";
import { Particles, Reveal } from "@/components/experience/Reveal";
import { FloatingHearts, burstHearts } from "@/components/experience/Hearts";
import { PasswordGate } from "@/components/experience/PasswordGate";

const TITLE = "Happy National Couple Day, Doroty ❤️";
const DESC =
  "A little interactive surprise Manav made for Doroty — for National Couple Day, and for every ordinary day she makes better.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Experience,
});

const section = "relative mx-auto w-full max-w-3xl px-6 py-24 sm:px-8 sm:py-32";
const eyebrow = "text-[0.65rem] tracking-[0.42em] text-muted-foreground uppercase";

function Experience() {
  const [unlocked, setUnlocked] = useState(false);
  const [ready, setReady] = useState(false);
  const onReady = useCallback((v: boolean) => setReady(v), []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = unlocked ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [unlocked]);

  return (
    <main className="relative min-h-screen text-foreground">
      <AnimatePresence>
        {!unlocked && <PasswordGate key="gate" onUnlock={() => setUnlocked(true)} />}
      </AnimatePresence>

      {unlocked && (
        <>
          <BlossomBackground onReady={onReady} />
          <FloatingHearts count={10} opacity={0.32} className="fixed inset-0 z-[5]" />
          {ready && (
            <motion.div
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.6, ease: [0.22, 0.61, 0.36, 1] }}
              className="relative z-10"
            >
              <Hero />
              <ThankYou />
              <BetterLife />
              <Appreciate />
              <LittleMoments />
              <ReminderCard />
              <Letter />
              <Finale />
            </motion.div>
          )}
        </>
      )}
    </main>
  );
}

/* ── Hero ───────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <Particles count={20} />
      <div className={section}>
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.9em", filter: "blur(14px)" }}
          animate={{ opacity: 0.75, letterSpacing: "0.42em", filter: "blur(0px)" }}
          transition={{ duration: 2.2, ease: [0.22, 0.61, 0.36, 1] }}
          className={eyebrow}
        >
          national couple day · manav &amp; doroty
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 34, filter: "blur(18px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 2, delay: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-8 text-4xl leading-[1.15] sm:text-6xl"
        >
          Happy National
          <br />
          Couple Day <span className="text-blush">❤️</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 22, filter: "blur(14px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.8, delay: 1.5, ease: [0.22, 0.61, 0.36, 1] }}
          className="font-script mt-6 text-4xl text-blush sm:text-5xl"
        >
          For my beautiful Doroty
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.6, delay: 2.3 }}
          className="mt-9 h-px w-40 origin-left bg-[var(--gradient-glow)] opacity-70"
        />

        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.8, delay: 2.9, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-9 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          Honestly, Doroty, today is just a nice excuse. I don't need a special date on a calendar
          to know how lucky I am — but since the world decided couples get a day, I made you
          something. Scroll slowly. I wrote all of it thinking about you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.4, duration: 1.4 }}
          className="mt-16 flex items-center gap-3 text-xs tracking-[0.3em] text-muted-foreground uppercase"
        >
          <motion.span
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
          scroll, my love
        </motion.div>
      </div>
    </section>
  );
}

/* ── Thank you ──────────────────────────────────────────────── */
function ThankYou() {
  return (
    <section className={section}>
      <Reveal>
        <p className={eyebrow}>thank you, doroty ❤️</p>
        <h2 className="mt-5 text-3xl leading-tight sm:text-5xl">
          Thank you for being <span className="text-blush italic">mine</span>
        </h2>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="card-premium sheen mt-12 p-7 sm:p-10">
          <Particles count={10} />
          <p className="relative text-lg leading-relaxed text-foreground/90 sm:text-xl">
            Thank you for saying yes to me, Doroty. For choosing me on the good days and staying on
            the ones where I'm honestly not my best. You're the best girlfriend I could have asked
            for, and I don't say that as a compliment — I say it because I notice it constantly.
          </p>
          <p className="relative mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Thank you for the time you give me, for listening properly instead of just waiting for
            your turn to talk, and for making me feel like I'm someone worth being excited about.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

/* ── You make my life better ────────────────────────────────── */
function BetterLife() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setTilt({
      x: ((e.clientY - r.top) / r.height - 0.5) * -7,
      y: ((e.clientX - r.left) / r.width - 0.5) * 7,
    });
  };

  return (
    <section className={section}>
      <Reveal>
        <div
          ref={ref}
          onPointerMove={handleMove}
          onPointerLeave={() => setTilt({ x: 0, y: 0 })}
          style={{ perspective: 1200 }}
        >
          <motion.div
            animate={{ rotateX: tilt.x, rotateY: tilt.y }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            className="glass sheen animate-drift relative overflow-hidden p-8 sm:p-14"
            style={{ transformStyle: "preserve-3d", boxShadow: "var(--shadow-dream)" }}
          >
            <Particles count={14} />
            <p className={`relative ${eyebrow}`}>you make my life better</p>
            <h2 className="relative mt-6 text-3xl leading-tight sm:text-4xl">
              Ordinary days stopped feeling ordinary
            </h2>
            <p className="relative mt-7 text-lg leading-relaxed text-foreground/90 sm:text-xl">
              Nothing dramatic changed when you came into my life, Doroty. It's smaller and better
              than that. A normal evening feels warmer because I get to tell you about it. A boring
              day gets interesting the second your name shows up on my phone.
            </p>
            <p className="relative mt-6 text-lg leading-relaxed text-muted-foreground italic">
              You didn't make my life louder. You made it feel like home.
            </p>
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}

/* ── Things I appreciate ────────────────────────────────────── */
const cards = [
  {
    title: "Your presence",
    body: "Even quiet time with you feels full. I don't have to perform around you, and that's rare.",
  },
  {
    title: "Your personality",
    body: "Stubborn in the best way, funny without trying, kind when nobody's watching. You're never boring, Doroty.",
  },
  {
    title: "How you make me feel",
    body: "Calmer. Braver. Like the version of me I actually like being.",
  },
  {
    title: "The little things",
    body: "The way you check on me, remember the small stuff I mentioned once, and notice when something's off before I say it.",
  },
  {
    title: "Everything we've shared",
    body: "All our conversations, jokes only we understand, and the moments I replay when I miss you.",
  },
  {
    title: "That you're just you",
    body: "You never try to be anyone else with me. Honestly, that's my favourite thing about you.",
  },
];

function Appreciate() {
  return (
    <section className={section}>
      <Reveal>
        <p className={eyebrow}>things i appreciate about you</p>
        <h2 className="mt-5 text-3xl leading-tight sm:text-5xl">
          A short list that could have been endless
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.07}>
            <motion.div
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98, y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="card-premium relative h-full overflow-hidden p-6 sm:p-7"
            >
              <Heart className="h-4 w-4 text-blush" fill="currentColor" />
              <h3 className="mt-4 text-2xl leading-snug">{c.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{c.body}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ── Our little moments ─────────────────────────────────────── */
const moments = [
  {
    tag: "the first time",
    body: "The beginning of us — still one of my favourite things to think about, Doroty.",
  },
  {
    tag: "late talks",
    body: "Those conversations that were supposed to be five minutes and somehow weren't.",
  },
  {
    tag: "your laugh",
    body: "I keep saying dumb things on purpose just to hear it again.",
  },
  {
    tag: "quiet company",
    body: "Doing absolutely nothing together, and it still counting as a good day.",
  },
  {
    tag: "the small check-ins",
    body: "\"Did you eat?\" somehow means more than long speeches ever could.",
  },
  {
    tag: "everything ahead",
    body: "All the little moments we haven't collected yet. I'm greedy for those.",
  },
];

function LittleMoments() {
  return (
    <section className={section}>
      <Reveal>
        <p className={eyebrow}>our little moments</p>
        <h2 className="mt-5 text-3xl leading-tight sm:text-5xl">
          Not big events — just <span className="text-blush italic">us</span>
        </h2>
      </Reveal>

      <div className="relative mt-14 pl-7 sm:pl-10">
        <div className="absolute top-0 bottom-0 left-1 w-px bg-gradient-to-b from-transparent via-rose/60 to-transparent" />
        <div className="space-y-5">
          {moments.map((m, i) => (
            <Reveal key={m.tag} delay={i * 0.08}>
              <div className="relative">
                <span className="absolute top-8 -left-[1.6rem] h-2 w-2 rounded-full bg-rose shadow-[0_0_16px_4px_color-mix(in_oklab,var(--rose)_45%,transparent)] sm:-left-[2.35rem]" />
                <motion.div
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.985 }}
                  transition={{ type: "spring", stiffness: 240, damping: 20 }}
                  className="glass sheen p-6 sm:p-8"
                  style={{
                    background:
                      i % 2 === 0
                        ? "var(--glass-bg)"
                        : "linear-gradient(160deg, color-mix(in oklab, var(--rose) 14%, transparent), color-mix(in oklab, white 3%, transparent))",
                  }}
                >
                  <p className={eyebrow}>{m.tag}</p>
                  <p className="mt-3 text-lg leading-relaxed text-foreground/90 sm:text-xl">
                    {m.body}
                  </p>
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── A little reminder ──────────────────────────────────────── */
function ReminderCard() {
  const [open, setOpen] = useState(false);

  return (
    <section className={`${section} text-center`}>
      <Reveal>
        <p className={eyebrow}>a little reminder</p>
        <h2 className="mt-5 text-3xl leading-tight sm:text-5xl">
          Something I want you to keep
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mx-auto mt-12 max-w-xl">
          <AnimatePresence mode="wait" initial={false}>
            {!open ? (
              <motion.button
                key="closed"
                type="button"
                onClick={(e) => {
                  setOpen(true);
                  burstHearts(e.clientX, e.clientY, 16);
                  if ("vibrate" in navigator) {
                    try {
                      navigator.vibrate(15);
                    } catch {
                      /* ignore */
                    }
                  }
                }}
                whileTap={{ scale: 0.96 }}
                exit={{ opacity: 0, scale: 0.94, filter: "blur(12px)" }}
                animate={{ y: [0, -6, 0] }}
                transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
                className="card-premium sheen w-full px-8 py-14"
              >
                <Gift className="mx-auto h-7 w-7 text-blush" />
                <p className="mt-6 text-sm tracking-[0.3em] uppercase">tap to open</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  it's short, but I mean every word of it
                </p>
              </motion.button>
            ) : (
              <motion.div
                key="open"
                initial={{ opacity: 0, scale: 0.9, filter: "blur(18px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
                className="card-premium relative overflow-hidden p-8 sm:p-12"
              >
                <Particles count={14} />
                <Sparkles className="relative mx-auto h-5 w-5 text-gold" />
                <p className="font-display relative mt-6 text-2xl leading-snug text-blush italic sm:text-3xl">
                  On the days you feel like too much or not enough, Doroty — you're exactly right to
                  me. Nothing about you needs fixing.
                </p>
                <p className="relative mt-6 leading-relaxed text-muted-foreground">
                  Come back and read this whenever you forget.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Reveal>
    </section>
  );
}

/* ── For you, Doroty (letter) ───────────────────────────────── */
const letter = [
  "I'm not great at saying things like this out loud, so I'm writing it instead.",
  "Being with you is easy in the way that matters. I don't have to hold anything back or pretend to be more interesting than I am. You already like the real version, which still surprises me a little.",
  "Thank you for being patient with me, for putting up with my mood swings, and for the way you take care of me without making it a big deal. I notice. I always notice.",
  "I love the way we talk about nothing for hours. I love that you're my first thought when something good happens, and the first person I want when something goes wrong.",
  "I hope we get a lot more of this — more late conversations, more inside jokes, more ordinary evenings that quietly turn into favourite memories.",
  "Happy National Couple Day, Doroty. Thank you for being my girlfriend, and for being one of the best parts of my life.",
];

function Letter() {
  return (
    <section className={section}>
      <Reveal>
        <p className={eyebrow}>for you, doroty</p>
        <h2 className="mt-5 text-3xl leading-tight sm:text-5xl">
          A letter I actually mean
        </h2>
      </Reveal>

      <div className="card-premium sheen relative mt-12 space-y-7 p-7 sm:p-12">
        <Particles count={12} />
        {letter.map((line, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <p className="relative text-lg leading-relaxed text-foreground/90 sm:text-xl">{line}</p>
          </Reveal>
        ))}
        <Reveal delay={0.3}>
          <p className="font-script relative pt-2 text-3xl text-blush sm:text-4xl">
            yours, Manav ❤️
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Finale ─────────────────────────────────────────────────── */
function Finale() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pb-28">
      <Particles count={22} />
      <FloatingHearts count={12} opacity={0.4} />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-55 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--rose) 42%, transparent), transparent 70%)",
        }}
      />
      <div className={`${section} text-center`}>
        <Reveal>
          <h2 className="text-3xl leading-[1.2] sm:text-5xl">
            Happy National Couple Day,
            <br />
            <span className="text-blush italic">Doroty ❤️</span>
          </h2>
        </Reveal>

        <div className="mt-12 space-y-6">
          {[
            "Thank you for being my girlfriend.",
            "Thank you for being such a big part of my life.",
            "Thank you for every moment we share, and the happiness you bring into my normal days.",
            "Thank you for being someone this important to me.",
          ].map((line, i) => (
            <Reveal key={line} delay={0.3 + i * 0.3}>
              <p className="text-lg leading-relaxed text-foreground/90 sm:text-xl">{line}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-16">
            <AnimatePresence mode="wait" initial={false}>
              {!revealed ? (
                <motion.button
                  key="btn"
                  type="button"
                  onClick={(e) => {
                    setRevealed(true);
                    burstHearts(e.clientX, e.clientY, 24);
                  }}
                  exit={{ opacity: 0, scale: 0.94, filter: "blur(10px)" }}
                  whileTap={{ scale: 0.95 }}
                  className="card-premium sheen px-8 py-4 text-sm tracking-[0.3em] uppercase"
                >
                  one last thing
                </motion.button>
              ) : (
                <motion.div
                  key="msg"
                  initial={{ opacity: 0, scale: 1.08, filter: "blur(20px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1.6, ease: [0.22, 0.61, 0.36, 1] }}
                >
                  <p
                    className="font-script mx-auto max-w-2xl text-4xl leading-tight text-blush sm:text-6xl"
                    style={{
                      textShadow: "0 0 50px color-mix(in oklab, var(--rose) 55%, transparent)",
                    }}
                  >
                    With love, Manav ❤️
                  </p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.4, delay: 1.2 }}
                    className="mt-8 text-xs tracking-[0.35em] text-muted-foreground uppercase"
                  >
                    made especially for doroty
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-24 text-[0.65rem] tracking-[0.35em] text-muted-foreground/80 uppercase">
            made with love by manav for doroty ❤️
          </p>
        </Reveal>
      </div>
    </section>
  );
}
