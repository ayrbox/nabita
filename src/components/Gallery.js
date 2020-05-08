import React from "react";

const Gallery = () => {
  return (
    <section className="page-section" id="gallery">
      <div className="container">
        <h4 className="page-section-heading text-center pb-5">Gallery</h4>
        <div className="row">
          <div className="col-md-6 align-self-center">
            <a
              className="gallery-image"
              rel="gallery"
              href="images/gallery/gallery_photo_1.jpg"
            >
              <img
                className="img-fluid"
                src="images/gallery/thumb/gallery_photo_1.jpg"
                alt="Image Description"
              />
              <div className="text-overlay">
                <span className="text">Game</span>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a
              className="gallery-image mb-3"
              rel="gallery"
              href="images/gallery/gallery_photo_2.jpg"
            >
              <img
                className="img-fluid"
                src="images/gallery/thumb/gallery_photo_2.jpg"
                alt="Image Description"
              />
              <div className="text-overlay">
                <span className="text">South Asian Games 2016</span>
              </div>
            </a>

            <a
              className="gallery-image"
              rel="gallery"
              href="images/gallery/gallery_photo_3.jpg"
            >
              <img
                className="img-fluid"
                src="images/gallery/thumb/gallery_photo_3.jpg"
                alt="Image Description"
              />
              <div className="text-overlay">
                <span className="text">South Asian Game 2016</span>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a
              className="gallery-image mb-3"
              rel="gallery"
              href="images/gallery/gallery_photo_4.jpg"
            >
              <img
                className="img-fluid"
                src="images/gallery/thumb/gallery_photo_4.jpg"
                alt="Image Description"
              />
              <div className="text-overlay">
                <span className="text">World Championship</span>
              </div>
            </a>
            <a
              className="gallery-image"
              rel="gallery"
              href="images/gallery/gallery_photo_5.jpg"
            >
              <img
                className="img-fluid"
                src="images/gallery/thumb/gallery_photo_5.jpg"
                alt="Image Description"
              />
              <div className="text-overlay">
                <span className="text">
                  10+
                  <br />
                  view photos
                </span>
              </div>
            </a>
            <img
              className="gallery-image d-none"
              rel="gallery"
              href="images/gallery/gallery_photo_6.jpg"
            />
            <img
              className="gallery-image d-none"
              rel="gallery"
              href="images/gallery/gallery_photo_7.jpg"
            />
            <img
              className="gallery-image d-none"
              rel="gallery"
              href="images/gallery/gallery_photo_8.jpg"
            />
            <img
              className="gallery-image d-none"
              rel="gallery"
              href="images/gallery/gallery_photo_9.jpg"
            />
            <img
              className="gallery-image d-none"
              rel="gallery"
              href="images/gallery/gallery_photo_10.jpg"
            />
            <img
              className="gallery-image d-none"
              rel="gallery"
              href="images/gallery/gallery_photo_11.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
