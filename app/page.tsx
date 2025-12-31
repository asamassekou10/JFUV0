import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-none">
          JUST FUCKING USE v0.
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 text-white">
          STOP OVERTHINKING YOUR UI.
        </h2>
        <p className="text-lg md:text-xl text-[#888888] leading-relaxed max-w-2xl">
          You&apos;ve spent years fighting with CSS, z-index stacking contexts, and mobile breakpoints. That ends today.
        </p>
      </section>

      {/* The Pain Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 text-white">
          Your frontend is a disaster.
        </h2>
        <p className="text-lg md:text-xl text-[#888888] leading-relaxed mb-8">
          You&apos;ve been writing React for how long now? And you&apos;re STILL sitting there at 2 AM, trying to center a div inside a flex container that is somehow overflowing the viewport. Your designer is asking why the border-radius looks &quot;off.&quot; You don&apos;t even remember what flex-basis actually does.
        </p>
        
        {/* Code Block */}
        <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-none p-6 md:p-8 font-mono text-sm md:text-base mb-8">
          <div className="text-[#888888] mb-4">CSS</div>
          <pre className="text-white whitespace-pre-wrap">
{`/* style.css */
.wrapper {
  display: flex;
  justify-content: center; /* Why isn't this working? */
  align-items: middle; /* Wait, is it 'center' or 'middle'? */
  float: left; /* GOD HELP ME */
  width: 100% !important; /* The desperation commit */
}
/* mobile-fix-v4-final-real.css */
@media (max-width: 768px) {
  .container { display: none; } /* I give up */
}`}
          </pre>
        </div>

        <p className="text-lg md:text-xl text-[#888888] leading-relaxed">
          You have 5 different tailwind config files, a global.css that is 4,000 lines of copy-pasted StackOverflow answers, and a component library you built yourself that breaks every time you update Node.
        </p>
      </section>

      {/* The Solution Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 text-white">
          What the fuck is v0?
        </h2>
        <p className="text-lg md:text-xl text-[#888888] leading-relaxed mb-6">
          v0 is a generative UI system built by Vercel. It&apos;s for people who want to ship products, not align pixels. You describe the interface, and it writes the code. That&apos;s it. That&apos;s the whole fucking story.
        </p>
        <p className="text-lg md:text-xl text-[#888888] leading-relaxed">
          No fighting with grid layouts. No guessing Shadcn class names. No &quot;design system&quot; meetings that take 3 hours. Just working UI.
        </p>
      </section>

      {/* Reality Check Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 text-white">
          Stop pretending you&apos;re Apple.
        </h2>
        <p className="text-lg md:text-xl text-[#888888] leading-relaxed mb-6">
          You&apos;re building a B2B dashboard for 47 users. You don&apos;t need custom WebGL transitions. You don&apos;t need a &quot;bespoke design language.&quot; You need a sidebar, a table, and a settings page.
        </p>
        <p className="text-lg md:text-xl text-[#888888] leading-relaxed">
          v0 generates clean React code using Tailwind and Shadcn UI. It looks professional by default. It looks like you hired a senior frontend engineer, but actually, you just typed a sentence into a box.
        </p>
      </section>

      {/* Features Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-12 text-white">
          Why it&apos;s great
        </h2>
        <ul className="space-y-6">
          <li className="text-lg md:text-xl text-[#888888]">
            <span className="font-bold text-white">Prompt-to-UI:</span> Type &quot;Make a dark mode pricing table.&quot; Get code. Done.
          </li>
          <li className="text-lg md:text-xl text-[#888888]">
            <span className="font-bold text-white">Copy & Paste:</span> It gives you the React component. Paste it into your Next.js app. It works.
          </li>
          <li className="text-lg md:text-xl text-[#888888]">
            <span className="font-bold text-white">Shadcn UI Native:</span> It uses the industry standard. Accessible, clean, robust.
          </li>
          <li className="text-lg md:text-xl text-[#888888]">
            <span className="font-bold text-white">Iterative:</span> &quot;Make the button blue.&quot; &quot;Add a search bar.&quot; It listens.
          </li>
        </ul>
      </section>

      {/* Footer / Objections Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 text-white">
          &quot;But I need full control!&quot;
        </h2>
        <p className="text-lg md:text-xl text-[#888888] leading-relaxed mb-12">
          You HAVE full control. It generates code. It&apos;s just text. You can edit it. But you won&apos;t need to, because unlike your handwritten CSS, this actually works on mobile.
        </p>
        
        <div className="mb-12">
          <a 
            href="https://v0.dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button size="lg" className="text-lg md:text-xl h-16 md:h-20 px-10 md:px-16 font-bold">
              DEPLOY NOW <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </a>
        </div>

        <p className="text-sm md:text-base text-[#888888] mb-8">
          Not affiliated with Vercel. Just tired of waiting for your frontend.
        </p>

        <div className="border-t border-[#1a1a1a] pt-8 mt-12">
          <p className="text-sm md:text-base text-[#888888] leading-relaxed mb-4">
            Inspired by{" "}
            <a href="https://justfuckingusevercel.com" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">justfuckingusevercel.com</a>
            ,{" "}
            <a href="https://justfuckingusetailwind.com" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">justfuckingusetailwind.com</a>
            ,{" "}
            <a href="https://motherfuckingwebsite.com" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">motherfuckingwebsite.com</a>
            ,{" "}
            <a href="https://bettermotherfuckingwebsite.com" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">bettermotherfuckingwebsite.com</a>
            ,{" "}
            <a href="https://perfectmotherfuckingwebsite.com" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">perfectmotherfuckingwebsite.com</a>
            ,{" "}
            <a href="https://justfuckingusehtml.com" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">justfuckingusehtml.com</a>
            ,{" "}
            <a href="https://justfuckingusereact.com" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">justfuckingusereact.com</a>
            {" "}and the entire motherfucking website family.
          </p>
          <p className="text-sm md:text-base text-[#888888]">
            Built by{" "}
            <a href="https://x.com/asamassekou10" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
              Alhassane Samassekou
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  )
}
