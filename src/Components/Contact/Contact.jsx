export default function Contact() {
  return (
    <>
      <div id="contact" className="height4 color1"></div>
      <aside  className="height2 position-relative">
        <h1 className="text-uppercase fw-bold fs-1 position-absolute nine">
          contact section
        </h1>
        <div className="thirdLine"></div>
        <i className="fa-solid fa-star five position-absolute fs-5 eight"></i>

        <form className="position-absolute eight ten w-50">
          <div className="mt-1">
            <input
              type="text"
              className="border-0 inputs"
              placeholder="userName"
            />
            <hr />
          </div>
          <div className="mt-4">
            <input
              type="password"
              className=" border-0 inputs"
              placeholder="userAge"
            />
            <hr />
          </div>
          <div className="mt-4">
            <input
              type="password"
              className="border-0 inputs"
              placeholder="userEmail"
            />
            <hr />
          </div>
          <div className="mt-4">
            <input
              type="password"
              className="border-0 inputs"
              placeholder="userPassword"
            />
            <hr />
          </div>

          <button type="submit" className="btns">
            send message
          </button>
        </form>
      </aside>
    </>
  );
}
