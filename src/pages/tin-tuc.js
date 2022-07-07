import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
function TinTuc(props) {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    //alert(id)
    axios.get("https://server-spring-boot-api.herokuapp.com/api/v1/news?page=1&itemsperpage=6")
      .then(res => {
        setNewsData(res.data); // Gọi Set Data, khi đó data sẽ thay đổi và nó sẽ gọi lại cái use Effect set Data bên trên
      })

  }, []);
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
            {newsData.map(item => (
              <div className='row tin-tuc-bg mt-3' style={{ borderRadius: "5px" }}>
                <div className='col-lg-3 col-4'>
                  <div className='p-2 zoom-hover d-flex justify-content-center'>
                    <img style={{ width: "250px", height: "250px" }} src={item.imagelink} className='tt-image ' />
                  </div>
                </div>
                <div className='col-lg-9 col-8'>
                  <a className='text-decoration-none' href={"tin-tuc-noi-dung/" + item.id}>
                    <div style={{ fontSize: "25px" }} className='tt-title font-weight-bold text-primary'>{item.title}</div>
                  </a>

                  <div style={{ fontSize: "16px" }} className='tt-content'>
                    {item.describe}
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

    </div>

  )
}
export default TinTuc;