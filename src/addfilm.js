import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label } from 'reactstrap';

class Addfilm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title:'',
      article:'',
      image:'',
      rate:''


    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  
handlechange=(event)=>{
    this.setState({
     [event.target.name]: event.target.value
    })
  }
addfilm=()=>{
    this.props.addmovie(
        {title:this.state.title, image:this.state.image, article:this.state.article, rate:this.state.rate })


    
}


  render() {
     
     
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>ADD MOVIE</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
          <Label for="exampleText">Affiche</Label>
          <Input type="textarea" name="image" id="exampleText" onChange={this.handlechange} value={this.state.image}  />
          <Label for="exampleText">Titre</Label>
          <Input type="textarea" name="title" id="exampleText"  onChange={this.handlechange} value={this.state.title}/>
          <Label for="exampleText">Synopsis</Label>
          <Input type="textarea" name="article" id="exampleText"  onChange={this.handlechange} value={this.state.article}/>
          <Label for="exampleText">Rate</Label>
          <Input type="textarea" name="rate" id="exampleText" onChange={this.handlechange} value={this.state.rate}  />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=>{this.addfilm();this.toggle()}}>Add Movie</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Addfilm;