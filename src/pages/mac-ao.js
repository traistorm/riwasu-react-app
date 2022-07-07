import { Container, Row, Col } from 'mdbreact';
import React, { Component } from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import SlideComponent from '../components/js/SlideComponent';
import ZaloComponent from '../components/js/ZaloComponent';
import QuantityIncrementButton from '../components/js/QuantityIncrementButton';
import { MDBCard, MDBCardImage, MDBCardText, MDBCardBody } from 'mdbreact';
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact';
import { MDBRipple } from 'mdb-react-ui-kit';
import CarouselPage from '../components/js/TestModule';
import ReactSlider from 'react-slider';
import CustomizedSlider from '../components/js/Slider';
import { Slider, value } from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import { yellow, red } from '@mui/material/colors';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useParams, Navigate } from 'react-router-dom'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import axios from 'axios';


class MacAo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1, isFilter: false, dataArray: [], maxPage: 1, itemsPerPage: 12, statusCodeReturn: 200, dataArrayTemp: [],
            sortType: "nothing"
        };
        //const [searchParams, setSearchParams] = useSearchParams();
        //const {token} = useParams();
    }

    componentDidMount() {
        //const response = await fetch('server-spring-boot-api.herokuapp.com/api/CheckKey111');
        //fetch("server-spring-boot-api.herokuapp.com/api/CheckKey")


        //alert(searchParams.get("test"));
        axios.get("https://server-spring-boot-api.herokuapp.com/api/v1/coathanger?page=1&itemsperpage=12")
            .then(
                (result) => {
                    //alert(this.props.match.params.id);
                    //alert(result[0]);
                    this.setState({ maxPage: Math.floor(result.data.length / this.state.itemsPerPage) + 1 });
                    this.setState({ dataArray: result.data });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    //alert(error);
                }
            )
    }
    render() {
        const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

        const handleFilter = (event) => {
            let minRange = document.getElementById("thumb1").value;
            let maxRange = document.getElementById("thumb2").value;
            let result;
            this.setState({ currentPage: 1 });
            this.setState({ isFilter: true });
            axios.get("https://server-spring-boot-api.herokuapp.com/api/v1/coathanger?page=" + this.state.currentPage + "&minRange=" + minRange + "&maxRange="
                + maxRange + "&sortType=" + this.state.sortType + "&itemsperpage=" + this.state.itemsPerPage)
                .then(
                    (result) => {
                        //alert(this.props.match.params.id);
                        //alert(result[0]);
                        //alert(result.length);
                        //alert(this.state.statusCodeReturn);
                        this.setState({ maxPage: Math.floor(result.data.length / this.state.itemsPerPage) + 1 });
                        this.setState({ dataArray: result.data });
                        //alert(this.state.dataArray.length);
                        //alert(this.state.maxPage);
                        this.forceUpdate();
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        //alert(error);
                    }
                )
            if (this.state.statusCodeReturn == 200) {
                //this.setState({ dataArray: this.state.dataArrayTemp });
                //this.forceUpdate();
            }
        }
        const handleChangePage = (event, newPage) => {
            this.setState({ currentPage: newPage });
            //alert(newPage)
            if (!this.state.isFilter) {
                axios.get("https://server-spring-boot-api.herokuapp.com/api/v1/coathanger?page=" + newPage + "&itemsperpage=12")
                    .then(
                        (result) => {
                            //alert(this.props.match.params.id);
                            //alert(result[0]);
                            this.setState({ dataArray: result.data });
                            this.forceUpdate();
                        },
                        // Note: it's important to handle errors here
                        // instead of a catch() block so that we don't swallow
                        // exceptions from actual bugs in components.
                        (error) => {
                           //alert(error);
                        }
                    )
            }
            else {
                let minRange = document.getElementById("thumb1").value;
                let maxRange = document.getElementById("thumb2").value;
                let result;
                //alert(newPage)
                this.setState({ currentPage: newPage });
                this.setState({ isFilter: true });

                axios.get("https://server-spring-boot-api.herokuapp.com/api/v1/coathanger?page=" + newPage + "&minRange=" + minRange + "&maxRange="
                    + maxRange + "&sortType=" + this.state.sortType + "&itemsperpage=" + this.state.itemsPerPage)
                    .then(
                        (result) => {
                            //alert(this.props.match.params.id);
                            //alert(result[0]);
                            //alert(result.length);
                            //alert(this.state.statusCodeReturn);
                            this.setState({ maxPage: Math.floor(result.data.length / this.state.itemsPerPage) + 1 });
                            this.setState({ dataArray: result.data });
                            //alert(this.state.dataArray.length);
                            //alert(this.state.maxPage);
                            this.forceUpdate();
                        },
                        // Note: it's important to handle errors here
                        // instead of a catch() block so that we don't swallow
                        // exceptions from actual bugs in components.
                        (error) => {
                            //alert(error);
                        }
                    )
                if (this.state.statusCodeReturn == 200) {
                    //this.setState({ dataArray: this.state.dataArrayTemp });
                    //this.forceUpdate();
                }
            }

        };
        const handleRadioButtonChange = (event) => {
            //alert(event.target.value)
            this.setState({ sortType: event.target.value });
        };
        return (
            <div>
                <ZaloComponent />
                <div class="d-flex justify-content-center mb-5">
                    <div className='col-xl-10 col-lg-10 col-12 row'>
                        <div className='col-xl-2 col-lg-2 col-sm-12 col-12 text-dark '>
                            <form className=''>
                                <div className='bg-light p-3' style={{ borderRadius: "3px" }}>
                                    <div className='d-flex justify-content-center mt-1' >
                                        <div className='border border-primary p-1' style={{ borderRadius: "3px" }}>LỌC SẢN PHẨM</div>
                                    </div>

                                    <div className='mt-2' style={{ borderStyle: "dotted" }}>
                                        <FormControl>

                                            <RadioGroup
                                                aria-labelledby="demo-controlled-radio-buttons-group"
                                                name="controlled-radio-buttons-group"
                                                onChange={handleRadioButtonChange}
                                                defaultValue="nothing"
                                            >

                                                <FormControlLabel className='ml-1' value="priceIncrease" control={<Radio color="primary" />} label="Giá tăng dần" />
                                                <FormControlLabel className='ml-1' value="priceDecrease" control={<Radio color="secondary" />} label="Giá giảm dần" />
                                                <FormControlLabel className='ml-1' value="mostView" control={<Radio color="success" />} label="Xem nhiều nhất" />
                                                <FormControlLabel className='ml-1' value="nothing" control={<Radio color="primary" />} label="Không gì" />
                                            </RadioGroup>
                                        </FormControl>
                                    </div>

                                    <div>Khoảng giá</div>
                                    <CustomizedSlider />
                                    <br></br>
                                    <div class="btn btn-primary mb-1" onClick={handleFilter}>Lọc</div>
                                </div>


                            </form>
                        </div>

                        <div className='dssp-container danh-sac-san-pham-bg col-xl-10 col-lg-10 col-sm-10 col-12 text-dark'>
                            <div className='d-flex justify-content-center mt-1 mb-2'>
                                <h3 className='dssp-titile border border-primary p-2 bg-light' style={{ borderRadius: "3px" }}>DANH SÁCH SẢN PHẨM</h3>
                            </div>

                            <div>
                                <div className='col-lg-12'>
                                    <div class="row justify-content-start">
                                        {this.state.dataArray.map(item => (
                                            <div class="col-lg-3 col-6 mb-5 d-flex align-items-center justify-content-center">
                                                <a className='' href={"mac-ao/san-pham/" + item.id} style={{ textDecoration: 'none', color: "black" }}>
                                                    <div className='shake-effect sp-bg ma-info p-1'>

                                                        <div class="d-flex justify-content-center">
                                                            <img src={item.imagelink} className='p-2 pkpt-item-image' style={{ width: "250px", height: "250px" }} />
                                                        </div>
                                                        <div className='text-uppercase text-center font-weight-bold'>{item.name}</div>
                                                        <h6 className='text-uppercase text-center'>{item.newprice.toLocaleString(
                                                            undefined, // leave undefined to use the visitor's browser 
                                                            // locale or a string like 'en-US' to override it.
                                                            { minimumFractionDigits: 0 }
                                                        ) + " Đ"}</h6>
                                                        <div className='pk-home-price text-uppercase text-center'>(Giá bán đại lý)</div>
                                                    </div>
                                                </a>

                                            </div>
                                        ))}

                                    </div>
                                    <div className='d-flex justify-content-center mb-2'>
                                        <Stack spacing={2}>
                                            <Pagination count={this.state.maxPage} variant="outlined" onChange={handleChangePage} />
                                        </Stack>
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


export default MacAo;