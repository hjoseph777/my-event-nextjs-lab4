import Image from "next/image";
import ToggleContent from "./components/ToggleContent";
import FilteredList from "./components/FilteredList";
import ValidationForm from "./components/ValidationForm";
import HoverCard from "./components/HoverCard";
import { usePathname } from 'next/navigation';

export default function HomePage() {
  const basePath = '/my-event-nextjs-lab4';
  
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-4xl mx-auto grid gap-12">
        {/* Requirement 2: Button Click Event */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Requirement 2: Button Click Event</h2>
          <div className="p-6 bg-foreground/[.02] rounded-lg">
            <ToggleContent />
          </div>
        </section>

        {/* Requirement 3: Form Handling */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Requirement 3: Form Submission</h2>
          <div className="p-6 bg-foreground/[.02] rounded-lg">
            <ValidationForm />
          </div>
        </section>

        {/* Requirement 4: Conditional Rendering */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Requirement 4: Conditional Rendering</h2>
          <div className="p-6 bg-foreground/[.02] rounded-lg">
            <FilteredList />
          </div>
        </section>

        {/* Requirement 5: Hover Interaction */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Requirement 5: Hover Interaction</h2>
          <div className="p-6 bg-foreground/[.02] rounded-lg">
            <HoverCard />
          </div>
        </section>
      </main>

      <footer className="mt-20 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={`${basePath}/file.svg`}
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={`${basePath}/window.svg`}
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={`${basePath}/globe.svg`}
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
