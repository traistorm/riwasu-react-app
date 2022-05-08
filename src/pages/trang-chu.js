import { Container } from 'mdbreact';
import React, { Component }  from 'react';

const TrangChu = () => {
    return (
        <div className='trang-chu text-light'>
            <h1 style={{textAlign : "center"}}>GIỚI THIỆU VỀ DOANH NGHIỆP TƯ NHÂN CƠ KHÍ CƯỜNG THỊNH</h1>
                
            <div class="d-flex justify-content-evenly">
                <div class="col-lg-4">
                    <p>
                    Phụ kiện phòng tắm RIWASU là một sản phẩm của doanh nghiệp tư nhân cơ khí Cường Thịnh.
                    </p>
                
                    <br></br>
                    <p>
                        Sản phẩm sản xuất 100% từ chất liệu INOX 304, được làm bóng cẩn thận, tỉ mỉ giúp mang lại phong cách sang trọng cho không gian phòng tắm nhà bạn. 
                        Không chỉ vậy sản phẩm còn được bảo hành tới 5 năm từ chúng tôi, giúp cho quý khách hàng có thể yên tâm sử dụng sản phẩm. Bất kì sản phẩm nào bị hoăn gỉ, ố vàng hay hỏng hóc trong 
                        quá trình sử dụng mà vẫn còn thời gian bảo hành, chúng tôi cam kết cung cấp lại cho quý khách 1 sản phẩm hoàn toàn mới, tương tự 
                        như sản phẩm bị hỏng hóc!
                    </p>
                    
                </div>
                <div class="col-lg-4">
                    <img style={{width : "250px", height : "250px"}} src='https://drive.google.com/uc?export=view&id=19x0wziC-u5hKwzYhyhUbYwVCx5_9N2ee' alt="img"/>
                </div>
            </div>
        
        </div>
        
    );
    
  };
  
  export default TrangChu;