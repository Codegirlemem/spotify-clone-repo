import style from "./Features.module.css";
import { featuresArr } from "./featuresArr";

export default function Features() {
  return (
    <div className={style.features}>
      {featuresArr.map((arr) => {
        return (
          <figure className={style.card}>
            <div className={style.cardImg}>
              <img src={arr.image} alt={arr.title} />
            </div>
            <figcaption className={style.cardText}>
              <h3>{arr.title}</h3>
              <p>{arr.description}</p>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );

  // benefitsArr.map((arr) => {
  //   return (
  //     <figure className="benefit">
  //       <div className="card-img">
  //         <img src={arr.image} alt={arr.title} />
  //       </div>
  //       <figcaption className="benefit-info">
  //         <h3>{arr.title}</h3>
  //         <p>{arr.description}</p>
  //       </figcaption>
  //     </figure>
  //   );
  // });
}
