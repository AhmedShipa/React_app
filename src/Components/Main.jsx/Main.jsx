import img from "../../assets/3d-avatar-cartoon-character_113255-92271-removebg-preview.png";

export default function Main() {
  return (
    <>
      <div id="nav" className="height2 color2 position-relative">
        <img className="img1 position-absolute" src={img} />
        <h1 className="text-uppercase fw-bold fs-1 text-light position-absolute one ">
          start framework
        </h1>
        <div className="line"></div>
        <i className="fa-solid fa-star two position-absolute fs-5 text-light"></i>
      </div>
      <div className="position-absolute three text-light">
        <span>Graphic Artist - </span>
        <span>Web Designer - </span>
        <span>Illustrator</span>
      </div>
    </>
  );
}
