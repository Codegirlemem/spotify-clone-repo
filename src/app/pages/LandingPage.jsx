import { LandingPageHeader } from "../components/header/LandingPageHeader";
import PremiumFeatures from "../components/features/PremiumFeatures";

import PremiumInfo from "../components/hero/PremiumInfo";

import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div>
      <LandingPageHeader />
      <PremiumInfo />
      <PremiumFeatures />
    </div>
  );
}
