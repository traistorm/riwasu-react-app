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
      interval = {8000}
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img 
              className="d-block w-100"
              src="https://i.ibb.co/KrzbPpQ/OS1A0091.jpg"
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive slide-home-title font-weight-bold text-uppercase">COMBO Bộ phụ kiện vuông</h3>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/Dw2hfXg/OS1A0128.jpg"
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive slide-home-title font-weight-bold text-uppercase">Khay cốc INOX 304</h3>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/KrzbPpQ/OS1A0091.jpg"
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive slide-home-title font-weight-bold text-uppercase">COMBO Bộ phụ kiện chân tiện</h3>
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
            <h3 className="h3-responsive slide-home-title font-weight-bold text-uppercase">Hộp giấy INOX 304</h3>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="5">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/XkL0rdC/15.jpg"
              alt="Four slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive slide-home-title font-weight-bold text-uppercase">Vắt khăn giàn INOX 304</h3>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="6">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/hZ9n5Lf/OS1A0174.jpg"
              alt="Four slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive slide-home-title font-weight-bold text-uppercase">Mắc áo INOX 304</h3>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </div>
  );
}

export default SlideComponent;