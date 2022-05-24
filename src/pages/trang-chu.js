import { Container, Row, Col } from 'mdbreact';
import React, { Component, useState, useEffect } from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import SlideComponent from '../components/js/SlideComponent';
import ZaloComponent from '../components/js/ZaloComponent';
import { MDBCard, MDBCardImage, MDBCardText, MDBCardBody } from 'mdbreact';
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact';
import { MDBRipple } from 'mdb-react-ui-kit';
import CarouselPage from '../components/js/TestModule';

const TrangChu = () => {
  const [proudctInSets, setProductInSets] = useState([]);
  useEffect(() => {
    //alert(id)
    var res;
    fetch("https://server-spring-boot-api.herokuapp.com/api/v1/bathroomaccessories/producttype/2")
      .then(res => res.json())
      .then(
        (result) => {

          //alert(result.name)
          //data = result;

          setProductInSets(result); // Gọi Set Data, khi đó data sẽ thay đổi và nó sẽ gọi lại cái use Effect set Data bên trên
          //alert(data.name)
          //alert(result.length)
          //alert(this.props.match.params.id);
          //alert(result[0]);
          //this.setState({ maxPage: Math.floor(result.length / this.state.itemsPerPage) + 1 });
          //this.setState({ dataArray: result });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          alert(error);
        }
      )
    //alert(res.name)
  }, []);
  return (
    <div>
      <ZaloComponent />
      <div class="d-flex justify-content-center mb-5 " >
        <div className='col-lg-5'>
          <SlideComponent />
        </div>
      </div>

      <div className='container mb-5 '>
        <div className='row justify-content-center border-bottom border-info'>
          <div className='col-lg-8 d-flex align-items-center justify-content-center '>
            <h2 className='sp-home-title rounded-3 border text-uppercase text-light bg-info p-1'>COMBO PHỤ KIỆN</h2>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-8 d-flex align-items-center justify-content-center'>
            <div className='container'>
              <div class="row justify-content-center">
                {proudctInSets.map(item => (
                  <div class="col-lg-6 col-4 mb-5 d-flex align-items-center justify-content-center">
                    <a className='' href={'phu-kien-phong-tam/san-pham/' + item.id} style={{ textDecoration: 'none', color: "black" }}>
                      <div className='bpk-home-info bg-light p-2 shake-effect border rounded-3' style={{ borderRadius: "3px" }}>

                        <img src={item.imagelink} className='w-100' />
                        <div className='text-uppercase text-center font-weight-bold'>{item.name}</div>
                        <div className='text-uppercase text-center'>{item.newprice}</div>
                        <div className='text-uppercase text-center text-danger'><s>{item.oldprice}</s></div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


      </div>
      <div className='container mb-5'>
        <div className='row justify-content-center border-bottom border-info'>
          <div className='col-lg-8 d-flex align-items-center justify-content-center '>
            <h2 className='sp-home-title rounded-3 border text-uppercase text-light bg-info p-1'>MỘT SỐ SẢN PHẨM BÁN LẺ</h2>
          </div>
        </div>

      </div>

      <div className='' >

        <div className='row'>

          <div className='d-flex align-items-center justify-content-center'>
            <div className='col-lg-8 col-10'>
              <div class="row justify-content-start">
                <div class="col-lg-3 col-6 mb-5 d-flex align-items-center justify-content-center">
                  <a href='phu-kien-phong-tam/san-pham/1' style={{ textDecoration: 'none', color: "black" }}>
                    <div className='sp-home-info shake-effect bg-light border rounded-3' style={{ borderRadius: "5px" }}>

                      <img src='https://drive.google.com/uc?export=view&id=11w9GLenX8m9uh-yp3RIy4I6koTHIdTVs' className='w-100' />
                      <div className='font-weight-bold text-uppercase text-center'>Hộp cuộn giấy</div>
                      <div className='text-uppercase text-center'>1.000.000đ</div>
                      <div className='text-uppercase text-center text-danger'><s>2.000.000đ</s></div>
                    </div>
                  </a>
                </div>
                <div class="col-lg-3 col-6 mb-5 d-flex align-items-center justify-content-center">
                  <a href='phu-kien-phong-tam/san-pham/1' style={{ textDecoration: 'none', color: "black" }}>
                    <div className='sp-home-info shake-effect bg-light border rounded-3' style={{ borderRadius: "5px" }}>

                      <img src='https://drive.google.com/uc?export=view&id=11w9GLenX8m9uh-yp3RIy4I6koTHIdTVs' className='w-100' />
                      <div className='font-weight-bold text-uppercase text-center'>Hộp cuộn giấy</div>
                      <div className='text-uppercase text-center'>1.000.000đ</div>
                      <div className='text-uppercase text-center text-danger'><s>2.000.000đ</s></div>
                    </div>
                  </a>
                </div>
                <div class="col-lg-3 col-6 mb-5 d-flex align-items-center justify-content-center">
                  <a href='phu-kien-phong-tam/san-pham/1' style={{ textDecoration: 'none', color: "black" }}>
                    <div className='sp-home-info shake-effect bg-light border rounded-3' style={{ borderRadius: "5px" }}>

                      <img src='https://drive.google.com/uc?export=view&id=11w9GLenX8m9uh-yp3RIy4I6koTHIdTVs' className='w-100' />
                      <div className='font-weight-bold text-uppercase text-center'>Hộp cuộn giấy</div>
                      <div className='text-uppercase text-center'>1.000.000đ</div>
                      <div className='text-uppercase text-center text-danger'><s>2.000.000đ</s></div>
                    </div>
                  </a>
                </div>
                <div class="col-lg-3 col-6 mb-5 d-flex align-items-center justify-content-center">
                  <a href='phu-kien-phong-tam/san-pham/1' style={{ textDecoration: 'none', color: "black" }}>
                    <div className='sp-home-info shake-effect bg-light border rounded-3' style={{ borderRadius: "5px" }}>

                      <img src='https://drive.google.com/uc?export=view&id=11w9GLenX8m9uh-yp3RIy4I6koTHIdTVs' className='w-100' />
                      <div className='font-weight-bold text-uppercase text-center'>Hộp cuộn giấy</div>
                      <div className='text-uppercase text-center'>1.000.000đ</div>
                      <div className='text-uppercase text-center text-danger'><s>2.000.000đ</s></div>
                    </div>
                  </a>
                </div>
                <div class="col-lg-3 col-6 mb-5 d-flex align-items-center justify-content-center">
                  <a href='phu-kien-phong-tam/san-pham/1' style={{ textDecoration: 'none', color: "black" }}>
                    <div className='sp-home-info shake-effect bg-light border rounded-3' style={{ borderRadius: "5px" }}>

                      <img src='https://drive.google.com/uc?export=view&id=11w9GLenX8m9uh-yp3RIy4I6koTHIdTVs' className='w-100' />
                      <div className='font-weight-bold text-uppercase text-center'>Hộp cuộn giấy</div>
                      <div className='text-uppercase text-center'>1.000.000đ</div>
                      <div className='text-uppercase text-center text-danger'><s>2.000.000đ</s></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

      <div className='mb-5 container'>
        <div className='row justify-content-center '>
          <div className='home-commit-info grow col-lg-4 col-4 d-flex align-items-center justify-content-center' style={{ cursor: "pointer" }}>
            <div className='font-weight-bold p-2 text-dark commit-item border text-light text-center'>
              <i class="fas fa-check-circle"></i>
              <br></br>
              Giao hàng miễn phí
              <br></br>
              Đơn hàng từ 1 triệu
            </div>

          </div>
          <div className='home-commit-info grow col-lg-4 col-4 d-flex align-items-center justify-content-center' style={{ cursor: "pointer" }}>
            <div className='font-weight-bold p-2 text-dark commit-item border text-light text-center'>
              <i class="fas fa-handshake-alt"></i>
              <br></br>
              100% Chính hãng
              <br></br>
              Giá cả cực tốt
            </div>
          </div>
          <div className='home-commit-info grow col-lg-4 col-4 d-flex align-items-center justify-content-center' style={{ cursor: "pointer" }}>
            <div className='font-weight-bold p-2 text-dark commit-item border text-light text-center'>
              <i class="fas fa-wrench"></i>
              <br></br>
              Hỗ trợ, bảo hành 24/7
              <br></br>
              Mọi lúc mọi nơi
            </div>
          </div>
        </div>

      </div>
    </div>
  );

};

export default TrangChu;