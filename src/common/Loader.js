import React from "react";
import loader from '../assets/Infinity-1s-124px.svg'

const Loader = (props) => {
    return <div style={{width: '100px'}}>
        {props.isFetching ? <img src={loader} /> : null}
    </div>
}
export default Loader