const Photos = () => {
  return (
    <div className="page-content hero">
      <section className="sticky">
        <div className="gallery-wrapper">
          <div className="col side-1">
            <Image src="someimage.png" alt="some image" />
            <Image src="someimage.png" alt="some image" />
            <Image src="someimage.png" alt="some image" />
          </div>
          <div className="col side-2">
            <Image src="someimage.png" alt="some image" />
            <Image src="someimage.png" alt="some image" />
            <Image src="someimage.png" alt="some image" />
          </div>
          <div className="col main">
            <Image src="someimage.png" alt="some image" />
            <Image src="someimage.png" alt="some image" />
            <Image src="someimage.png" alt="some image" />
          </div>
          <div className="col side-3">
            <Image src="someimage.png" alt="some image" />
            <Image src="someimage.png" alt="some image" />
            <Image src="someimage.png" alt="some image" />
          </div>
          <div className="col side-4">
            <Image src="someimage.png" alt="some image" />
            <Image src="someimage.png" alt="some image" />
            <Image src="someimage.png" alt="some image" />
          </div>
        </div>
      </section>
      <div className="container">
        <section className="hero">
          <div className="hero-img">
            <Image src="someimage.jpg" alt="" />
          </div>
          <div className="header">
            <h1>Serene</h1>
            <h1>drift</h1>
          </div>
        </section>
        <section className="intro">
          <div className="tagline">
            <p>Inspired visulas for creators of calm and beauty</p>
          </div>
          <div className="divider"></div>
          <div className="intro-header">
            <h1>elevating</h1>
            <h1>serenity</h1>
          </div>
        </section>
        <section className="ws"></section>
        <section className="outro">
          <h1>crafted calm</h1>
          <h1>and beauty</h1>
        </section>
        <section className="footer">
          <div className="footer-bg">
            <Image src={"someimage.jpg"} alt="aomeimage" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Photos;
