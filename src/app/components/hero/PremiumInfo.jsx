import style from "./PremiumInfo.module.css";
import Button from "../UI/Button";

export default function LandingPageMain() {
  return (
    <section className={style.premiumInfo}>
      <section className={style.main}>
        <h1>Get Premium free for 1 month </h1>
        <p className={style.premiumPrice}>
          Just ₹119/month after. Debit and credit cards accepted. Cancel
          anytime.
        </p>
        <div className={style.premiumInfoBtns}>
          <Button color="black" bgColor="black">
            Get started
          </Button>
          <Button>See other plans</Button>
        </div>

        <p className={style.terms}>
          <span>Terms and conditions apply</span>. 1 month free not available
          for users who have already tried Premium.
        </p>
      </section>

      {/* <section className="premium-plans">
        <BenefitCard src={BenefitCardImg2}>
          <h3>Ad-free music listening</h3>
          <p>Enjoy uninterrupted music</p>
        </BenefitCard>
      </section> */}
    </section>
  );
}

// function PremiumPlans() {}
