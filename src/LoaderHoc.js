import React, { Component } from 'react';
import './LoaderHoc.css'

const LoaderHoc =(WrappedComponent) => {
    return class LoaderHoc extends Component {
        render(){
            return this.props.isloading === true ? < div className="loader"></div> :<WrappedComponent{...this.props}/>
        }
    }
}

export default LoaderHoc