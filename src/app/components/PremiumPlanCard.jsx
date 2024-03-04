import "./PremiumPlanCard.css";

export function BenefitCard(props) {
  return (
    <figure className="benefit">
      <div className="card-img">
        <img src={props.src} alt="Ad free" />
      </div>
      <figcaption className="benefit-info">{props.children}</figcaption>
    </figure>
  );
}
