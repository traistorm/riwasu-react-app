import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

class CustomizedSlider extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {thumbValue1 : "0", thumbValue2 : "500000", minValue : "0", maxValue : "5000000", thumb1 : "0", thumb2 : "5000000"};
        this.updateRange = this.updateRange.bind(this);
    }
    updateRange(event)
    {
        var temp = event.target.value;
        const myArray = String(temp).split(",");
        this.state.thumbValue1 = parseInt(parseFloat(myArray[0] / 100) * this.state.maxValue).toLocaleString(undefined, { minimumFractionDigits: 0 });
        this.state.thumbValue2 = parseInt(parseFloat(myArray[1] / 100) * this.state.maxValue).toLocaleString(undefined, { minimumFractionDigits: 0 });
        // var minValue = myArray[0];
        // var maxValue = myArray[1];
        this.setState({thumb1 : parseInt(parseFloat(myArray[0] / 100) * this.state.maxValue)});
        this.setState({thumb2 : parseInt(parseFloat(myArray[1] / 100) * this.state.maxValue)});
    }
    render(){
        return(
            <Box sx={{ width: "100%" }}>
      
            <Slider
                track="inverted"
                aria-labelledby="track-inverted-range-slider"
                getAriaValueText={valuetext}
                defaultValue={[0, 100]}
                marks={marks}
                onChange={this.updateRange}
            />
            <div class="d-flex justify-content-between">
                <div>{this.state.thumbValue1 + "Đ"}</div>
                <input type="hidden" id='thumb1' name='thumb1' value={this.state.thumb1} />
                <div><i class="fas fa-arrow-alt-right"></i></div>
                <input type="hidden" id='thumb2' name='thumb2' value={this.state.thumb2} />
                <div>{this.state.thumbValue2 + "Đ"}</div>
            </div>
            
            
            </Box>
        )
        
    };
}

const marks = [
  {
    value: 0,
    label: '',
  },
  {
    value: 20,
    label: '',
  },
  {
    value: 37,
    label: '',
  },
  {
    value: 100,
    label: '',
  },
];

function valuetext(value) {
  return `${value}°C`;
}
function test(event) {
    //alert(event.target.value)
  }

  export default CustomizedSlider;