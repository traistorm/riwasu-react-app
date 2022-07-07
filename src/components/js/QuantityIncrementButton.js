import React from 'react';

const QuantityIncrementButton = () => {
    return (
        <div class="input-group-prepend mb-2">
            <button type="button" class="btn btn-outline-secondary">-</button>
            <input value={1} type="text" class="form-control text-center" style={{width : "20%"}}/>
            <button type="button" class="btn btn-outline-secondary">+</button>
        </div>                
    );
}
export default QuantityIncrementButton;