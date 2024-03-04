import "./LandingPageMain.css";
import Button from "./UI/Button";
import { BenefitCard } from "./PremiumPlanCard";

// Imagaes
import BenefitCardImg1 from "../assets/ad-free-music.svg";
import BenefitCardImg2 from "../assets/offline-plaback.svg";
import BenefitCardImg3 from "../assets/play-everywhere.svg";
import BenefitCardImg4 from "../assets/pay-your-way.svg";

export default function LandingPageMain() {
  return (
    <section className="premium-info">
      <section className="main">
        <h1>Get Premium free for 1 month </h1>
        <p className="premium-price">
          Just ₹119/month after. Debit and credit cards accepted. Cancel
          anytime.
        </p>
        <div className="premium-info-btns">
          <Button border="2px solid black" bgColor="black">
            Get started
          </Button>
          <Button border="2px solid white">See other plans</Button>
        </div>

        <p className="terms">
          <span>Terms and conditions apply</span>. 1 month free not available
          for users who have already tried Premium.
        </p>
      </section>
      <section className="premium-benefits">
        <h2>The power of Premium</h2>
        <div className="benefits">
          <BenefitCard src={BenefitCardImg1}>
            <h3>Ad-free music listening</h3>
            <p>Enjoy uninterrupted music</p>
          </BenefitCard>
          <BenefitCard src={BenefitCardImg2}>
            <h3>Offline playback</h3>
            <p>Save your data by listening offline.</p>
          </BenefitCard>
          <BenefitCard src={BenefitCardImg3}>
            <h3>Play everywhere</h3>
            <p>Listen on your speakers, TV, and other favorite devices.</p>
          </BenefitCard>
          <BenefitCard src={BenefitCardImg4}>
            <h3>Pay your way</h3>
            <p>Prepay with Paytm, UPI, and more.</p>
          </BenefitCard>
        </div>
      </section>

      <section className="premium-plans">
        <BenefitCard src={BenefitCardImg2}>
          <h3>Ad-free music listening</h3>
          <p>Enjoy uninterrupted music</p>
        </BenefitCard>
      </section>
    </section>
  );
}

// function PremiumPlans() {}
