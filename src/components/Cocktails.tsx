import { cocktailLists, mockTailLists } from "../constants";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function Cocktails() {
  useGSAP(() => {
    const parallaxTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    parallaxTimeLine.from("#c-left-leaf", {
      x: -100,
      y: 100,
      ease: "none",
    });

    parallaxTimeLine.from("#c-right-leaf", {
      y: 100,
      x: 100,
    });
  });

  return (
    <>
      <section id="cocktails" className="noisy">
        <img
          src="/images/cocktail-left-leaf.png"
          alt="l-leaf"
          id="c-left-leaf"
        />
        <img
          src="/images/cocktail-right-leaf.png"
          alt="r-leaf"
          id="c-right-leaf"
        />

        <div className="list">
          <div className="popular">
            <h2>Most Popular Cocktails</h2>
            <ul>
              {cocktailLists.map(({ name, country, detail, price }) => (
                <li key={name}>
                  <div className="md:me-28">
                    <h3>{name}</h3>
                    <p>
                      {country} | {detail}{" "}
                    </p>
                  </div>

                  <span>- {price}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="popular">
            <h2>Most Loved Mockktails</h2>
            <ul>
              {mockTailLists.map(({ name, country, detail, price }) => (
                <li key={name}>
                  <div className="md:me-28">
                    <h3>{name}</h3>
                    <p>
                      {country} | {detail}{" "}
                    </p>
                  </div>

                  <span>- {price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cocktails;
