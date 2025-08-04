import { useGSAP } from "@gsap/react";
import { navLinks } from "../constants";
import gsap from "gsap";

function Navbar() {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });

  return (
    <nav>
      <div className="flex-between w-full px-6">
        <a href="#home" className="flex items-center gap-2 ">
          <img src="images/logo.png" alt="logo" className="h-10 w-10" />
          <p>Velvet Pour</p>
        </a>

        <ul className="">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
