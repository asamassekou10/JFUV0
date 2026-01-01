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
          You&apos;ve spent years fighting with CSS, z-index stacking contexts, and mobile breakpoints. That ends today. Build full-stack apps from prompt to production in minutes.
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
          v0 is an AI-powered development platform built by Vercel that turns ideas into production-ready, full-stack web apps. Through a conversational chat interface, it generates sophisticated UIs and backend logic from natural language. You go from prompt to production in minutes. That&apos;s it. That&apos;s the whole fucking story.
        </p>
        <p className="text-lg md:text-xl text-[#888888] leading-relaxed mb-6">
          v0 empowers anyone to build functional web applications faster without writing code manually. It supports popular frontend frameworks and UI libraries, with best-in-class expertise in Next.js, React, Tailwind CSS, shadcn/ui, and the AI SDK. The code generated is ready to deploy on Vercel&apos;s globally scalable infrastructure.
        </p>
        <p className="text-lg md:text-xl text-[#888888] leading-relaxed">
          No fighting with grid layouts. No guessing Shadcn class names. No &quot;design system&quot; meetings that take 3 hours. No backend boilerplate. Just working applications that deploy to Vercel&apos;s enterprise-grade infrastructure with one click.
        </p>
      </section>

      {/* How It Works Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 text-white">
          How the fuck does it work?
        </h2>
        <p className="text-lg md:text-xl text-[#888888] leading-relaxed mb-8">
          v0 supports the full development lifecycle from idea to production. Here&apos;s how:
        </p>
        <ul className="space-y-6 mb-8">
          <li className="text-lg md:text-xl text-[#888888]">
            <span className="font-bold text-white">Prompt:</span> Describe what you want, upload screenshots or mockups, or import Figma designs. v0 transforms any input into working code. Write in any language—v0 doesn&apos;t care if you speak English or Klingon.
          </li>
          <li className="text-lg md:text-xl text-[#888888]">
            <span className="font-bold text-white">Iterate:</span> Add features, adjust visuals in Design Mode, edit code directly, or apply your design system for consistent branding. It listens. It fixes. It doesn&apos;t argue.
          </li>
          <li className="text-lg md:text-xl text-[#888888]">
            <span className="font-bold text-white">Integrate:</span> Connect databases, AI models, external APIs, GitHub, and MCP integrations. Build full data-driven applications. Authentication, databases, APIs—all of it.
          </li>
          <li className="text-lg md:text-xl text-[#888888]">
            <span className="font-bold text-white">Ship:</span> Publish with one click on Vercel, add custom domains, and share with your team. No setup. No configuration. Just deployment.
          </li>
          <li className="text-lg md:text-xl text-[#888888]">
            <span className="font-bold text-white">Manage:</span> Collaborate in shared workspaces with permissions, security controls, and usage insights. Team plans enable multiple users to work together.
          </li>
          <li className="text-lg md:text-xl text-[#888888]">
            <span className="font-bold text-white">Embed:</span> Use v0 in your existing development environment through integrations with Cline, Cursor, Zed, or the v0 Model API. It works where you work.
          </li>
        </ul>
      </section>

      {/* Reality Check Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 text-white">
          Stop pretending you&apos;re Apple.
        </h2>
        <p className="text-lg md:text-xl text-[#888888] leading-relaxed mb-6">
          You&apos;re building a B2B dashboard for 47 users. You don&apos;t need custom WebGL transitions. You don&apos;t need a &quot;bespoke design language.&quot; You need a sidebar, a table, authentication, a database connection, and a settings page.
        </p>
        <p className="text-lg md:text-xl text-[#888888] leading-relaxed mb-6">
          v0 handles everything from simple components to full-stack apps. Landing pages, dashboards, e-commerce sites, data visualization tools, internal tools, mobile-responsive apps—you can build anything. It generates clean React code using Next.js, Tailwind, and Shadcn UI. It handles full-stack apps with databases, APIs, and authentication. It looks professional by default.
        </p>
        <p className="text-lg md:text-xl text-[#888888] leading-relaxed">
          It looks like you hired a senior engineer, but actually, you just typed a sentence into a box. And you don&apos;t need coding knowledge. Zero. None. Describe what you want using natural language and v0 handles the technical implementation.
        </p>
      </section>

      {/* Features Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-12 text-white">
          Why it&apos;s great
        </h2>
        <ul className="space-y-6 mb-12">
          <li className="text-lg md:text-xl text-[#888888]">
            <span className="font-bold text-white">vs. General LLMs:</span> v0 generates interactive UIs and deployable full-stack apps, not isolated code snippets. It&apos;s not a chatbot—it&apos;s a development platform.
          </li>
          <li className="text-lg md:text-xl text-[#888888]">
            <span className="font-bold text-white">vs. AI-Augmented IDEs:</span> v0 provides a collaborative, conversational environment where PMs, designers, engineers, and other professionals can build together across the full product development cycle. Not just code completion—actual collaboration.
          </li>
          <li className="text-lg md:text-xl text-[#888888]">
            <span className="font-bold text-white">vs. Code Generation Products:</span> v0 delivers best-in-class Next.js expertise backed by Vercel&apos;s enterprise infrastructure and security, unlike standalone tools without proven production infrastructure.
          </li>
          <li className="text-lg md:text-xl text-[#888888]">
            <span className="font-bold text-white">vs. AI-Powered Design Tools:</span> v0 generates production-ready code with backend logic and deployment, not prototype-only designs. It&apos;s not Figma—it&apos;s an app.
          </li>
          <li className="text-lg md:text-xl text-[#888888]">
            <span className="font-bold text-white">Figma & Screenshots:</span> Upload designs or mockups. v0 converts them into working apps with pixel-perfect accuracy. Your designer&apos;s vision, actually working.
          </li>
          <li className="text-lg md:text-xl text-[#888888]">
            <span className="font-bold text-white">Full-Stack Ready:</span> Authentication, databases, external APIs, GitHub integration, MCP integrations. It&apos;s not just UI—it&apos;s complete applications.
          </li>
          <li className="text-lg md:text-xl text-[#888888]">
            <span className="font-bold text-white">Code Editing:</span> Export the code to work locally or edit directly in v0. Bi-directional Git integration allows seamless syncing between local development and v0. You have full control.
          </li>
          <li className="text-lg md:text-xl text-[#888888]">
            <span className="font-bold text-white">Vercel Integration:</span> Deep integration with the Vercel ecosystem. One-click deployment to enterprise-grade infrastructure, with SOC 2 Type 2 compliance, strong security, and global scalability.
          </li>
        </ul>
        <p className="text-lg md:text-xl text-[#888888] leading-relaxed mb-6">
          <span className="font-bold text-white">Who can use it?</span> Anyone with an idea. Founders ship MVPs quickly. Product managers prototype without waiting on design queues. Designers test real interactions early. Engineers skip boilerplate code. Sales engineers produce custom demos instantly. Marketers launch pages independently. v0 removes technical barriers.
        </p>
        <p className="text-lg md:text-xl text-[#888888] leading-relaxed">
          <span className="font-bold text-white">Do you need a new account?</span> No. Your Vercel account gives you access to v0. Just go to v0.app and log in. That&apos;s it.
        </p>
      </section>

      {/* Pricing Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 text-white">
          How much does it cost?
        </h2>
        <p className="text-lg md:text-xl text-[#888888] leading-relaxed mb-6">
          v0 offers 5 plans:
        </p>
        <ul className="space-y-4 mb-8">
          <li className="text-lg md:text-xl text-[#888888]">
            <span className="font-bold text-white">Free:</span> No cost. For people looking to explore.
          </li>
          <li className="text-lg md:text-xl text-[#888888]">
            <span className="font-bold text-white">Premium:</span> $20/month. For higher limits and power users.
          </li>
          <li className="text-lg md:text-xl text-[#888888]">
            <span className="font-bold text-white">Team:</span> $30/user/month. For fast moving teams and collaboration.
          </li>
          <li className="text-lg md:text-xl text-[#888888]">
            <span className="font-bold text-white">Business:</span> $100/user/month. For privacy conscious teams.
          </li>
          <li className="text-lg md:text-xl text-[#888888]">
            <span className="font-bold text-white">Enterprise:</span> For large companies that require additional security.
          </li>
        </ul>
      </section>

      {/* Footer / Objections Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 text-white">
          &quot;But I need full control!&quot;
        </h2>
        <p className="text-lg md:text-xl text-[#888888] leading-relaxed mb-6">
          You HAVE full control. It generates code. It&apos;s just text. You can edit it locally, export it to your existing projects, or sync with Git. The bi-directional Git integration allows seamless syncing between local development and v0. You own the code generated based on your queries and prompts.
        </p>
        <p className="text-lg md:text-xl text-[#888888] leading-relaxed mb-12">
          But you won&apos;t need to, because unlike your handwritten CSS, this actually works on mobile. And desktop. And everywhere else. v0 follows secure coding best practices, and deployed apps benefit from Vercel&apos;s enterprise-grade infrastructure with SOC 2 Type 2 compliance.
        </p>
        
        <div className="mb-12">
          <a 
            href="https://v0.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button size="lg" className="text-lg md:text-xl h-16 md:h-20 px-10 md:px-16 font-bold">
              START BUILDING <ArrowRight className="ml-2 h-6 w-6" />
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
