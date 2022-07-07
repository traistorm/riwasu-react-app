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
        interval={8000}
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://i.imgur.com/HZ4XwhV.jpg"
                alt="First slide"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="text-primary slide-info h3-responsive slide-home-title font-weight-bold text-uppercase">COMBO Bộ phụ kiện vuông</h3>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://i.imgur.com/Nh3AVuI.jpg"
                alt="Second slide"
              />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="text-primary slide-info h3-responsive slide-home-title font-weight-bold text-uppercase">Vắt khăn vuông</h3>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://i.imgur.com/HZ4XwhV.jpg"
                alt="Third slide"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="text-primary slide-info h3-responsive slide-home-title font-weight-bold text-uppercase">COMBO Bộ phụ kiện chân tiện</h3>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://i.imgur.com/PoWrued.jpg"
                alt="Four slide"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="text-primary slide-info h3-responsive slide-home-title font-weight-bold text-uppercase">Hộp giấy INOX 304</h3>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="5">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://i.imgur.com/74DBnxW.jpg"
                alt="Four slide"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="text-primary slide-info h3-responsive slide-home-title font-weight-bold text-uppercase">Vắt khăn giàn INOX 304</h3>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="6">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://i.imgur.com/HZ4XwhV.jpg"
                alt="Third slide"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="text-primary slide-info h3-responsive slide-home-title font-weight-bold text-uppercase">COMBO Bộ phụ kiện đế dập</h3>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
  );
}

export default SlideComponent;