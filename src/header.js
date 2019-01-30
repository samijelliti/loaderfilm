import React, { Component } from 'react';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            // keyword:''
         }
    }

    handelchange=(event)=>{
        // this.setState({keyword:event.target.value})
        this.props.searchname(event.target.value)
    }
    render() { 
        return ( 
            <div>
                <h1>Top 50 Best Films of 2018</h1>
                <input type='text' onChange={this.handelchange}/>
                
            </div>
           
         );
    }
}
 
export default Header;