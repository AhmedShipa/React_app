import { useEffect } from "react";
import { useState } from "react";

export default function Navbar() {
  let [height, setHeight] = useState(100);
  let handleScroll = () => {
    if (window.scrollY > 50) {
      setHeight(70);
    } else {
      setHeight(110);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div
          style={{ height: `${height}px`, transition: "1s" }}
          className="container-fluid color1 nav height1"
        >
          <ul className="w-100 h-100 navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row justify-content-around  align-items-center">
            <li className="nav-item">
              <a
                className="text-uppercase fw-bold fs-2 text-decoration-none text-light margin1"
                href="#nav"
              >
                Start framework
              </a>
            </li>
            <ul className="list-unstyled d-flex flex-row margin2">
              <li className="nav-item ">
                <a
                  className="navlinks nav-link active text-uppercase fw-bold text-light fs-6 p-3"
                  aria-current="page"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="navlinks  nav-link text-uppercase fw-bold text-light fs-6 p-3"
                  href="#portfolio"
                >
                  portfolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="navlinks nav-link text-uppercase fw-bold text-light fs-6 p-3"
                  href="#contact"
                >
                  contact
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </nav>
    </>
  );
}
