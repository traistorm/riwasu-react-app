import { Container, Row, Col } from 'mdbreact';
import React, { Component, useState, useEffect } from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import SlideComponent from '../components/js/SlideComponent';
import ZaloComponent from '../components/js/ZaloComponent';
import QuantityIncrementButton from '../components/js/QuantityIncrementButton';
import { MDBCard, MDBCardImage, MDBCardText, MDBCardBody } from 'mdbreact';
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact';
import { MDBRipple } from 'mdb-react-ui-kit';
import CarouselPage from '../components/js/TestModule';
import { useNavigate, useSearchParams, useParams } from "react-router-dom";

function Person(props) {
  return <h2>I'm {props.name}!</h2>;
}

function SanPham(props) {
  let navigate = useNavigate();
  const [c, setc] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [newPrice, setNewPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [data, setData] = useState([]);
  const [colorStatus, setColorStatus] = useState("text-success");
  const { id } = useParams();

  //alert(fullName);
  // Có thể tạo nhiều hơn 1 useEffect trong function, tuỳ theo điều kiện callback [], [fullname] mà nó sẽ gọi hàm trong cái useEffect đó 1 hoặc nhiều lần
  useEffect(() => {
    //alert(id)
    var res;
    fetch("https://server-spring-boot-api.herokuapp.com/api/v1/bathroomaccessories/" + id)
      .then(res => res.json())
      .then(
        (result) => {

          //alert(result.name)
          //data = result;
          if (!result.status == "Còn hàng") {
            setColorStatus("text-danger");
          }
          //alert(result.newprice)
          setNewPrice(result.newprice.toLocaleString(
            undefined, // leave undefined to use the visitor's browser 
            // locale or a string like 'en-US' to override it.
            { minimumFractionDigits: 0 }
          ) + " Đ")
          setOldPrice(result.oldprice.toLocaleString(
            undefined, // leave undefined to use the visitor's browser 
            // locale or a string like 'en-US' to override it.
            { minimumFractionDigits: 0 }
          ) + " Đ")
          setData(result); // Gọi Set Data, khi đó data sẽ thay đổi và nó sẽ gọi lại cái use Effect set Data bên trên
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
  //const { id } = useParams();
  //alert(id)
  //alert(searchParams.get("test"));
  //alert(params[1]);
  return (
    <div>

      <ZaloComponent />

      <div class="d-flex justify-content-center mb-5" style={{}}>
        <div className='col-lg-8 col-10 bg-light d-flex align-content-center flex-wrap rounded-3 p-2' style={{ borderRadius: "5px" }}>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-4 col-12'>
                <div className='d-flex justify-content-center'>
                  <img src={data.imagelink} className='w-100' />
                </div>
              </div>
              <div className='sp-status-info col-lg-8 text-dark mt-2'>
                <div className='d-flex justify-content-center text-uppercase'>
                  <div>
                    <div className='font-weight-bold sp-sp-name'>{data.name}</div>
                    <div>Thương hiệu : {data.brand}</div>
                    <div className='text-uppercase'>Giá mới : {newPrice}</div>
                    <div className='text-uppercase text-danger'><s>Giá cũ : {oldPrice}</s></div>
                    <div>
                      Tình trạng :
                      <span className={colorStatus}>{" " + data.status}</span>
                    </div>
                    <div className='text-primary'>Đặt mua : 0989808585 </div>
                    {/*<QuantityIncrementButton/>
                            <div className='d-flex justify-content-start'>
                              <div className='bg-success p-2 mr-1'>Mua hàng</div>
                              <div className='bg-success p-2'>Thêm vào giỏ hàng</div>
                            </div>*/}

                  </div>

                </div>

              </div>
            </div>
            <div>
              <div className='sp-sp-describe-title mt-3 font-weight-bold'>
                <div>Thông tin sản phẩm</div>
              </div>
              <div className='sp-sp-describe'>
                <p><i class="fas fa-check-circle text-success"></i>{" Thương hiệu : " + data.brand}</p>
                <p><i class="fas fa-check-circle text-success"></i>{" Mã sản phẩm : " + data.productcode}</p>
                <p><i class="fas fa-check-circle text-success"></i>{" Xuất xứ : " + data.origin}</p>
                <p><i class="fas fa-check-circle text-success"></i>{" Chất liệu : " + data.material}</p>
                <p><i class="fas fa-check-circle text-success"></i>{" Tình trạng : " + data.status}</p>
                <p><i class="fas fa-check-circle text-success"></i>{" Bảo hành : " + data.insurance}</p>
                <div className='sp-sp-info-title font-weight-bold'>Mô tả sản phẩm</div>
                <p>{data.describe}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );

};

export default SanPham;