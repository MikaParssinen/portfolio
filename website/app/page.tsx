
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";
export default function Home() {
  return (
    <div className="space-y-24">
      <section id="about" className="min-h-[50vh] scroll-mt-12">
        {/* ... */}
      </section>
      <section id="projects" className="min-h-[50vh] scroll-mt-12">
        {/* ... */}
      </section>
      <section id="about-you" className="min-h-[50vh] scroll-mt-12">
        <div className="flex items-center gap-8">
          <LiquidMetalButton label="Get Started" />
          <LiquidMetalButton viewMode="icon" />
        </div>
      </section>
    </div>

  );
}