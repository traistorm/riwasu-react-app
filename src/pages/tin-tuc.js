import React, { Component } from 'react';
class TinTuc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonArray: []
    };
  }
  componentDidMount() {
    //const response = await fetch('server-spring-boot-api.herokuapp.com/api/CheckKey111');
    //fetch("server-spring-boot-api.herokuapp.com/api/CheckKey")
    fetch("http://server-spring-boot-api.herokuapp.com/api/v1/CheckKey")
      .then(res => res.json())
      .then(
        (result) => {
          //alert(result[0]);
          this.setState({ jsonArray: result });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          alert(error);
        }
      )
  }


  render() {

    return (
      /*<div>
        {this.state.jsonArray.map(item => (
            <div>{item.id}</div>
          ))}
      </div>*/
      <div className='container'>
        <div className='row justify-content-center mb-3'>
          <div className='col-lg-12 col-11'>
            <div className=''>
              <div className='row tin-tuc-bg' style={{ borderRadius: "5px" }}>
                <div className='col-lg-3 col-4'>
                  <div className='p-2 zoom-hover d-flex'>
                    <img src='https://drive.google.com/uc?export=view&id=1GTgr6CyYtC11-pX8yDZbWOoZSaS5APY0' className='row justify-content-center align-self-center w-100' />
                  </div>
                </div>
                <div className='col-lg-9 col-8'>
                  <a className='text-decoration-none' href='#'>
                    <div style={{ fontSize: "30px" }} className='tt-title font-weight-bold text-primary'>Bồn cầu giá rẻ có đáng mua không?</div>
                  </a>

                  <div style={{ fontSize: "20px" }} className='tt-content'>
                    <div>- Liệu chúng ta có lên mua bồn cầu giá rẻ?</div>
                    <div>- Liệu chúng có thể sử dụng được trong một thời gian dài hay ưu nhược điểm của chúng</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row justify-content-center mb-3'>
          <div className='col-lg-12 col-11'>
            <div className=''>
              <div className='row tin-tuc-bg' style={{ borderRadius: "5px" }}>
                <div className='col-lg-3 col-4'>
                  <div className='p-2 zoom-hover d-flex'>
                    <img src='https://drive.google.com/uc?export=view&id=1GTgr6CyYtC11-pX8yDZbWOoZSaS5APY0' className='row justify-content-center align-self-center w-100' />
                  </div>
                </div>
                <div className='col-lg-9 col-8'>
                  <a className='text-decoration-none' href='#'>
                    <div style={{ fontSize: "30px" }} className='tt-title font-weight-bold text-primary'>Bồn cầu giá rẻ có đáng mua không?</div>
                  </a>

                  <div style={{ fontSize: "20px" }} className='tt-content'>
                    <div>- Liệu chúng ta có lên mua bồn cầu giá rẻ?</div>
                    <div>- Liệu chúng có thể sử dụng được trong một thời gian dài hay ưu nhược điểm của chúng</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    )
  }
}
export default TinTuc;