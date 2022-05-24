import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer
} from "mdbreact";
import { MDBMask, MDBCarouselCaption } from "mdbreact";

const SlideComponent = () => {
  return (
    <div>
      <MDBCarousel
      activeItem={1}
      length={6}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
      interval = {5000}
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://drive.google.com/uc?export=view&id=1L4DYaBbeBVwUSnKmSEG88ucSWiMKIkPo"
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive slide-home-title font-weight-bold">Kệnh kính INOX 304</h3>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://drive.google.com/uc?export=view&id=1iEnFaBZRg6Je95B6L3Jbjeb1RbhEE08u"
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive slide-home-title font-weight-bold">Khay cốc INOX 304</h3>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://drive.google.com/uc?export=view&id=1GTgr6CyYtC11-pX8yDZbWOoZSaS5APY0"
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive slide-home-title font-weight-bold">Khay xà phòng INOX 304</h3>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="4">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://drive.google.com/uc?export=view&id=1RatDEug_EoLpyGg8GjBJDmhW8JmBLMGe"
              alt="Four slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive slide-home-title font-weight-bold">Hộp giấy INOX 304</h3>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="5">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://drive.google.com/uc?export=view&id=1dA7HViNDd0REYaSGseJptMvVt9AvSeLR"
              alt="Four slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive slide-home-title font-weight-bold">Vắt khăn INOX 304</h3>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="6">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://drive.google.com/uc?export=view&id=1WVdGYx0snm8uw55OIPemGKNLsj678biw"
              alt="Four slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive slide-home-title font-weight-bold">Mắc áo INOX 304</h3>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </div>
  );
}

export default SlideComponent;