import React from 'react';
import Item from './item';
import LoaderHoc from './LoaderHoc.js'
import {Container, Row, Col} from 'reactstrap'
import './list.css'
const Liste =({news})=> {
    return(
    
       <div className="cardfilm">
                {news.map((el,index)=>{return <Item  key={index} saleh={el} />})}
             
                </div>
       
    )      
}
export default LoaderHoc(Liste)