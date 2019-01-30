import React, { Component } from 'react';
import {Container, Row, Card, CardImg, CardText, CardBody,
    CardTitle, Button, Col } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';
    import Star from './Star'
  


class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
         const {saleh}=this.props
        return ( 
       
        
           
                <Col sm="4">
        <Card>
          <CardImg top width="40%" height="200px" src={saleh.image} alt=" image film" />
          <CardBody>
            <CardTitle>{saleh.title}</CardTitle>
            <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={saleh.rate}        />
            <CardText>{saleh.article}</CardText>
            <Button>Watch</Button>
          </CardBody>
        </Card>
        </Col>
        
      
       );
    }
}
 
export default Item;