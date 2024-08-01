export default function Footer() {
  return (
    <>
      <footer>
        <div className="color1 padding1 height3 d-flex flex-row justify-content-between text-light text-center align-items-center">
          <div>
            <h3 className="text-uppercase fs-3">location</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className=" mb-4">
            <h3 className="fs-2 text-uppercase">around the web</h3>
            <i className="fa-brands fa-facebook icon pt-2 "></i>
            <i className="fa-brands fa-twitter icon pt-2 "></i>
            <i className="fa-brands fa-linkedin-in icon pt-2 "></i>
            <i className="fa-solid fa-globe icon pt-2 "></i>
          </div>
          <div className="padding2">
            <h3>ABOUT FREELANCER</h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created
              <br /> by Route
            </p>
          </div>
        </div>
        <div className="color3 height4 text-center">
          <p className="text-light pt-4">Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}
