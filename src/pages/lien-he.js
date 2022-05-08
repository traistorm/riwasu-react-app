import { Container } from 'mdbreact';
import React, { Component }  from 'react';

const GioiThieu = () => {
    return (
        <div className='lien-he text-light'>
            <h1 style={{textAlign : "center"}}>LIÊN HỆ</h1>
                
                <div class="d-flex justify-content-center flex-column" style={{textAlign : "center"}}>
                    <div className=''>
                        Quý khách hàng có thể liên hệ trực tiếp tới số điện thoại : 0989808585
                    </div>
                    <div className=''>
                        hoặc email : DncuongthinhInox@gmail.com
                    </div>
            
                    <div className=''>
                        Địa chỉ doanh nghiệp : Quảng Bố - Quảng Phú - Lương Tài - Bắc Ninh
                    </div>
                    <div className=''>
                        Giờ làm việc : 7h00 - 20h00
                    </div>
                </div>
                
        </div>
        
    );
    
  };
  
  export default GioiThieu;