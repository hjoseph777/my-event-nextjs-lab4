import ToggleContent from "./components/ToggleContent";
import FilteredList from "./components/FilteredList";
import ValidationForm from "./components/ValidationForm";
import HoverCard from "./components/HoverCard";

export default function Home() {
  return (
    <div className="min-h-screen p-6 sm:p-12">
      <main className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center mb-12">Interactive Components Demo</h1>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Button Click Event</h2>
          <div className="p-4 bg-foreground/[.02] rounded-lg">
            <ToggleContent />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Form Submission</h2>
          <div className="p-4 bg-foreground/[.02] rounded-lg">
            <ValidationForm />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Conditional Rendering</h2>
          <div className="p-4 bg-foreground/[.02] rounded-lg">
            <FilteredList />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Hover Interaction</h2>
          <div className="p-4 bg-foreground/[.02] rounded-lg">
            <HoverCard />
          </div>
        </section>
      </main>
    </div>
  );
}
