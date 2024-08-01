import img1 from "../../assets/poert1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";
export default function Portoflio() {
  return (
    <>
      <div className="height4 color1"></div>
      <section id="portfolio" className="position-relative height7">
        <h1 className="text-uppercase fw-bold fs-1 position-absolute seven">
          Portfolio component
        </h1>
        <div className="thirdLine"></div>
        <i className="fa-solid fa-star five position-absolute fs-5 eight"></i>
        <div className="container containerImgs1">
          <div className="row  justify-content-between width1">
            <div className="col-4 w-25 height6">
              <img className="h-100 rounded-3" src={img1} />
            </div>
            <div className="col-4 w-25 height6">
              <img className="h-100 rounded-3" src={img2} />
            </div>
            <div className="col-4 w-25 height6">
              <img className="h-100 rounded-3" src={img3} />
            </div>
          </div>
          <div className="row  justify-content-between width1 mt-5">
            <div className="col-4 w-25 height6">
              <img className="h-100 rounded-3" src={img1} />
            </div>
            <div className="col-4 w-25 height6">
              <img className="h-100 rounded-3" src={img2} />
            </div>
            <div className="col-4 w-25 height6">
              <img className="h-100 rounded-3" src={img3} />
            </div>
          </div>
        </div>{" "}
      </section>
    </>
  );
}
