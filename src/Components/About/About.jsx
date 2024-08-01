export default function About() {
  return (
    <>
      <div className="height4 color1"></div>
      <aside id="about" className="height5 color2 position-relative">
        <h1 className="text-uppercase fw-bold fs-1 text-light position-absolute four ">
          about component
        </h1>
        <div className="secondLine"></div>
        <i className="fa-solid fa-star five position-absolute fs-5 text-light"></i>
        <div className="position-absolute d-flex text-light justify-content-evenly six text-center">
          <p className="paragraph">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className="paragraph">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </aside>
    </>
  );
}
