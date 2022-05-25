import { Container } from 'mdbreact';
import React, { Component, useEffect } from 'react';
import axios from 'axios';
const GioiThieu = () => {
    useEffect(() => {
        //alert(id)
        var res;
        axios.get("https://server-spring-boot-api.herokuapp.com/api/v1/bathroomaccessories/" + 1)
            .then(res => {
                //alert(res.data.name)
            })
            
        //alert(res.name)
    }, []);
    return (
        <div className='gioi-thieu text-light'>

            <div class="row justify-content-center">
                <div class="col-lg-10 col-11">
                    <div className='row justify-content-center'>
                        <div className='col-lg-12 col-12 mb-3'>
                            <div class="sp-gt-header d-flex justify-content-center" style={{ fontSize: "35px" }}>
                                GIỚI THIỆU VỀ DOANH NGHIỆP TƯ NHÂN CƠ KHÍ CƯỜNG THỊNH
                            </div>
                        </div>
                        <div class="col-lg-8 col-12 mb-3">
                            <div class="d-flex justify-content-center sp-gt-content">
                                <div>
                                    <div className='sp-gt-title'>
                                        Phụ kiện phòng tắm RIWASU là một sản phẩm của doanh nghiệp tư nhân cơ khí Cường Thịnh.
                                    </div>
                                    <div className='sp-gt-content'>
                                        Sản phẩm sản xuất 100% từ chất liệu INOX 304, được làm bóng cẩn thận, tỉ mỉ giúp mang lại phong cách sang trọng cho không gian phòng tắm nhà bạn.
                                        Không chỉ vậy sản phẩm còn được bảo hành tới 5 năm từ chúng tôi, giúp cho quý khách hàng có thể yên tâm sử dụng sản phẩm. Bất kì sản phẩm nào bị hoăn gỉ, ố vàng hay hỏng hóc trong
                                        quá trình sử dụng mà vẫn còn thời gian bảo hành, chúng tôi cam kết cung cấp lại cho quý khách 1 sản phẩm hoàn toàn mới, tương tự
                                        như sản phẩm bị hỏng hóc!
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className='col-lg-4 col-12 mb-3'>
                            <div class="d-flex justify-content-center">
                                <img style={{ width: "250px", height: "250px" }} src='https://drive.google.com/uc?export=view&id=1MrPsmPYlzGkJ9X5Y443z1c7VJJjhut6_' alt="img" />
                            </div>

                        </div>
                        <div class="col-lg-8 col-12 mb-3">
                            <div class="d-flex justify-content-center">
                                <div>
                                    <div className='sp-gt-title'>Bộ phụ kiện vuông</div>
                                    <div className='sp-gt-content'>
                                        Các sản phẩm trong bộ phụ kiện này được thiết kế với chân đế vuông vắn, cứng cáp đem lại cảm giác
                                        chắc chắn, khoẻ mạnh cho không gian phòng tắm.
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className='col-lg-4 col-12 mb-3'>
                            <div class="d-flex justify-content-center">
                                <img style={{ width: "250px", height: "250px" }} src='https://drive.google.com/uc?export=view&id=1mrSduD_ikELcsiW-1Y2jBItA7k6Zo94M' alt="img" />
                            </div>

                        </div>
                        <div class="col-lg-8 col-12 mb-3">
                            <div class="d-flex justify-content-center">
                                <div>
                                    <div className='sp-gt-title'>Bộ phụ kiện đế dập</div>
                                    <div className='sp-gt-content'>
                                        Bộ phụ kiện đế dập có giá cao hơn đôi chút so với bộ phụ kiện vuông,
                                        chân đế của sản phẩm được dập tròn đem lại cảm giác mềm mại cho sản phẩm.
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-lg-4 col-12 mb-3'>
                            <div class="d-flex justify-content-center">
                                <img style={{ width: "250px", height: "250px" }} src='https://drive.google.com/uc?export=view&id=1mrSduD_ikELcsiW-1Y2jBItA7k6Zo94M' alt="img" />
                            </div>

                        </div>
                        <div class="col-lg-8 col-12 mb-3">
                            <div class="d-flex justify-content-center">
                                <div>
                                    <div className='sp-gt-title'>Bộ phụ kiện chân tiện</div>
                                    <div className='sp-gt-content'>
                                        Bộ phụ kiện chân tiện là bộ có giá cao nhất, tuy nhiên sản phẩm lại có được độ hoàn thiện rất cao, các góc cạnh
                                        được bo cong mềm mại, uyển chuyển cùng với đó là thân sản phẩm được làm dày bản, vô cùng chắc chắn sẽ đem đến cảm giác sang trọng,
                                        đầy lịch lãm cho không gian phòng tắm của bạn !
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-lg-4 col-12 mb-3'>
                            <div class="d-flex justify-content-center">
                                <img style={{ width: "250px", height: "250px" }} src='https://drive.google.com/uc?export=view&id=1mrSduD_ikELcsiW-1Y2jBItA7k6Zo94M' alt="img" />
                            </div>

                        </div>
                        <div class="col-lg-8 col-12 mb-3">
                            <div class="d-flex justify-content-center">
                                <div>
                                    <div className='sp-gt-title'>Mắc áo INOX 304</div>
                                    <div className='sp-gt-content'>
                                        Ngoài các combo phụ kiện hoàn chỉnh, chúng tôi còn cung cấp các sản phẩm mắc áo
                                        INOX 304 đầy chắc chắn và sang trọng !
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-lg-4 col-12 mb-3'>
                            <div class="d-flex justify-content-center">
                                <img style={{ width: "250px", height: "250px" }} src='https://drive.google.com/uc?export=view&id=1hN0ogNAU76B8KLz-URlpkjggwwZmI4v0' alt="img" />
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>

    );

};

export default GioiThieu;