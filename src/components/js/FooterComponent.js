import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import Iframe from './Ifrane';

export default function FooterComponent() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>

        </div>

      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='font-weight-bold text-uppercase text-dark info-footer-container col-md-3 col-lg-4 col-xl-4 mx-auto mb-4 text-left'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i class="fas fa-gem"></i> Thông tin
                <h6>______</h6>
              </h6>
              <p>
                DOANH NGHIỆP TƯ NHÂN CƠ KHÍ CƯỜNG THỊNH
              </p>
              <p>Số điện thoại : 0989.80.85.85</p>
              <p>Email : DncuongthinhInox@gmail.com</p>
              <p>Địa chỉ : Quảng Bố - Quảng Phú - Lương Tài - Bắc Ninh</p>
            </div>

            {/*<div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'></h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </div>*/}

            <div className='col-md-4 col-lg-3 col-xl-4 mx-auto mb-md-0 mb-4 text-left'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i class="fas fa-pager"></i> Fanpage</h6>
              <p className='' style={{}}>
                <Iframe />
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='foter-container text-center text-dark p-4 text-primary' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>

        <a target="_blank" className='text-primary text-decoration-none' href='https://www.facebook.com/PhuKienPhongTamRIWASU'>
          © 2022 COPYRIGHT DOANH NGHIỆP TƯ NHÂN CƠ KHÍ CƯỜNG THỊNH
        </a>
      </div>
    </MDBFooter>
  );
}