import content from "@/data/content.json";

import { CallToAction } from "@/components/CallToAction";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Hero } from "@/components/Hero";

export default function IndexPage() {
  const { title, subtitle } = content.header;
  return (
    <div>
      <Hero title={title} subtitle={subtitle} />
      <main>
        <FeatureGrid features={content.features} />
        <CallToAction
          text={content.footer.callToAction}
          buttons={content.footer.buttons as any}
        />
      </main>
    </div>
  );
}
