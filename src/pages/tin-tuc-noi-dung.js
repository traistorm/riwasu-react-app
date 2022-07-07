import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Editor } from 'react-draft-wysiwyg';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';


function TinTucNoiDung(props) {
    const [content, setContent] = useState('');
    const [state, setState] = useState("EditorState.createEmpty()");
    const [img, setImg] = useState('');
    const { id } = useParams();
    const [news, setNews] = useState([]);

    useEffect(() => {
        //alert(id)
        axios.get("https://server-spring-boot-api.herokuapp.com/api/v1/news/" + id)
            .then(res => {
                setNews(res.data); // Gọi Set Data, khi đó data sẽ thay đổi và nó sẽ gọi lại cái use Effect set Data bên trên
            })

    }, []);
     
    function doSomething() {
        var test = content.replaceAll("\"", "'");
        
        alert(test);
        axios.post('https://server-spring-boot-api.herokuapp.com/api/v1/news', null, {params : {data : test}})
            .then(res => {
                alert(res.status);
                setNews(res.data); // Gọi Set Data, khi đó data sẽ thay đổi và nó sẽ gọi lại cái use Effect set Data bên trên
            },
            error => {
                alert(error);
            })
        // do something here
    }
    return (

        /*<div>
          {this.state.jsonArray.map(item => (
              <div>{item.id}</div>
            ))}
        </div>*/
        <div className='container'>

            <div className='row justify-content-center mb-3'>
                <div className='col-lg-12 col-11 bg-light' style={{ borderRadius: "5px" }}>
                    <SunEditor onChange={(content) => { setContent(content) }}
                        setOptions={{
                            buttonList: [
                                // default
                                ['undo', 'redo'],
                                ['bold', 'underline', 'italic', 'list'],
                                ['table', 'link', 'image'],
                                ['fullScreen']
                            ]

                        }} />
                    <div onClick={doSomething}>AAA</div>
                    <div className=''>
                        {
                            <div>
                                <div className='row justify-content-center'>
                                    <h1 className='tt-title' style={{ fontSize: "25px" }}>{news.title}</h1>
                                </div>
                                <div className='mt-3 ttnd-content' style={{ fontSize: "15px" }}>
                                    Hiện nay trên thị trường có đa dạng các loại mẫu bồn cầu với mức giá khác nhau phù hợp với yêu cầu của khách hàng. Nhưng phổ biến nhất vẫn là những mẫu bồn cầu giá rẻ dưới 1 triệu, hướng tới đối tượng khách hàng không chỉ ở nông thôn, mà thành thị cũng sử dụng rất nhiều, đặc biệt là nhà trọ, khu chung cư nhằm tiết kiệm chi phí, nhưng vẫn mang lại hiệu quả cao.

                                    Một số nhãn hiệu như Bồn cầu Viglacera, Landsign, Caesar ( Đài Loan), Dolacera, Hảo Cảnh (Việt Nam), dù không nổi tiếng và đắt đỏ như TOTO, Inax, Grohe, nhưng vẫn được đông đảo người tiêu dùng lựa chọn. Nếu bạn đang muốn mua bồn cầu giá rẻ dưới 1 triệu nhưng không biết chọn loại nào thì tốt? Hãy đọc ngay bài viết này bởi chúng tôi sẽ giới thiệu chi tiết về các mẫu bồn cầu có giá dưới 1 triệu đồng đến từ những thương hiệu uy tín nhất.
                                    <h3>1. Mẫu bồn cầu giá rẻ dưới 1 triệu Viglacera</h3>
                                    Bàn Cầu 2 khối Viglacera VI77 Nắp thường V1102
                                    <img className='ttnd-img' src='https://i.imgur.com/hh4We3n.jpg' alt='img' />
                                    Mẫu bàn cầu tới từ thương hiệu thiết bị vệ sinh thuần Việt Viglacera. Thiết kế đơn giản nhưng có độ bền cao, hoạt động mạnh mẽ, hiệu quả và rất tiết kiệm nước nhờ công nghệ xả siphon. Trong đó chế độ xả 1 lần nước 0,6 L với áp lực nước: 0.05 MPa ~ 0.75 MPa.

                                    Bồn cầu 2 khối Viglacera VI77 Nắp thường V1102 kích thước bệt Dài x Cao x Rộng (620x780x368mm), phù hợp với cả nhà tắm diện tích nhỏ lẫn lớn. Kết hợp cùng với công nghệ tráng men chống dính siêu bền, nhất định chinh phục được cả những khách hàng khó tính.
                                    <h3>2. Mẫu bàn cầu bệt vệ sinh giá rẻ Landsign</h3>
                                    Bàn cầu Landsign 2 khối LS2KG
                                    Bệt vệ sinh Landsign LS2KG xuất xứ từ Việt Nam, gồm nắp đậy bồn cầu, phụ kiện, xả, sử dụng hệ thống xả gạt và có nắp đóng thường. Bồn cầu có áp lực nước mạnh, 0.05 ~ 0.70 (Mpa)  với lỗ tâm thoát sàn 28cm nên dễ dàng xả trôi mọi vết bẩn.
                                    <img className='ttnd-img' src='https://i.imgur.com/hh4We3n.jpg' alt='img' />
                                    Bàn cầu Landsign tay gạt được làm từ chất liệu men sáng bóng, chống dính. Phù hợp cho các công trình nhà cấp 4, nhà trọ, công trình công cộng… Có 3 màu cho khách hàng lựa chọn: Màu trắng, xanh cốm, xanh da trời.
                                    <h3>3. Mẫu bàn cầu giá rẻ thương hiệu Caesar</h3>
                                    Bồn cầu bệt Caesar với công nghệ sản xuất Đài Loan, được sản xuất tại Việt Nam có giá thành hợp lý, chất lượng đảm bảo, bền lâu. Phổ biến nhất là 2 loại C1230 và C1250.
                                    <img className='ttnd-img' src='https://i.imgur.com/hh4We3n.jpg' alt='img' />
                                    Bệt cầu xổm Caesar C1230
                                    Đây là loại bồn cầu giá rẻ tới từ thương hiệu Caesar. Bồn cầu là loại ngồi xổm, gạt tay, thiết kế đơn giản, gọn gàng mà độc đáo, sang trọng, đem lại sự tiện lợi cho người sử dụng.

                                    Với chế độ xả thẳng, lượng nước tối đa 6L, áp lực nước 0.1- 0.4MPa, tâm thoát nước 30cm, đem lại khả năng hoạt động mạnh mẽ, hiện đại.
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>

        </div>

    )
}
export default TinTucNoiDung;