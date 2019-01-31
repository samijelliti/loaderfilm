import React, { Component } from 'react';
import './App.css';
import Header from './header'
import Liste from './liste'
import Star from './Star'
import Addfilm from './addfilm'


const newstab=[{
  image:'https://i.guim.co.uk/img/media/e01c0c2169b7214cf87b48820f67a2fd090d7dda/0_0_2500_1499/master/2500.jpg?width=800&quality=85&auto=format&fit=max&s=bb8bcef1cedba99f36d903acccbe8ae2',
  title:'Loveless',
  article: "Second masterwork in a row from Leviathan director Andrey Zvyagintsev, a bleak, unnerving tale of a toxic disintegrating marriage and a child that disappears from home",
  rate:'3',
},
  
  {
  image:'https://i.guim.co.uk/img/media/0e93ee585102803068f68a38d8046c82a6c261db/0_541_4083_2450/master/4083.jpg?width=620&quality=85&auto=format&fit=max&s=db8e8983b4aaf1eeea131fc92d4b5cbb',
  title:'Cold War',
  article:'Gorgeous-looking epic from Paweł Pawlikowski, in which a Polish singer and pianist fall in love but find their relationship thwarted and stalled by geopolitical events outside their control',
  rate:'3',
  },
  {
  image:'https://i.guim.co.uk/img/media/2c5b6c2ead73fea4065dcc36b13a04467151a938/393_0_2920_1752/master/2920.jpg?width=800&quality=85&auto=format&fit=max&s=a01738bc4cfc4044c43685fb7bbf5e48',
  title:'Coco',
  article:'Cute Pixar animation about a kid searching for his musical inspiration in the underworld, after he is accidentally transported there during Mexico’s Day of the Dead celebrations.',
  rate:'4',
},
  {
  image:'https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_UX182_CR0,0,182,268_AL_.jpg',
  title:'Mission: Impossible - ',
  article:'Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.',
  rate:'2'},
  {

    image:'https://i.guim.co.uk/img/media/0e93ee585102803068f68a38d8046c82a6c261db/0_541_4083_2450/master/4083.jpg?width=620&quality=85&auto=format&fit=max&s=db8e8983b4aaf1eeea131fc92d4b5cbb',
    title:'Cold War',
    article:'Gorgeous-looking epic from Paweł Pawlikowski, in which a Polish singer and pianist fall in love but find their relationship thwarted and stalled by geopolitical events outside their control',
    rate:'3',
    },
    {
    image:'https://i.guim.co.uk/img/media/2c5b6c2ead73fea4065dcc36b13a04467151a938/393_0_2920_1752/master/2920.jpg?width=800&quality=85&auto=format&fit=max&s=a01738bc4cfc4044c43685fb7bbf5e48',
    title:'Coco',
    article:'Cute Pixar animation about a kid searching for his musical inspiration in the underworld, after he is accidentally transported there during Mexico’s Day of the Dead celebrations.',
    rate:'4',
  },
    {
    image:'https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_UX182_CR0,0,182,268_AL_.jpg',
    title:'Mission: Impossible - ',
    article:'Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.',
    rate:'2',
}]


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      news:newstab ,
      filtred:newstab,
      // title:'',
      // article:'',
      // image:''
      isloading: true
     }
}


search=(keyword)=>{
let filter1=this.state.news.filter((el,i)=>{return el.title.toLocaleLowerCase().indexOf(keyword)>-1})
this.setState({filtred:filter1})
}
searchrate=(x)=>{
  let filter2=this.state.news.filter((el,index)=>{return el.rate==x})
  this.setState({filtred:filter2})
}



// addmovie =()=>{
//   this.setState({newstab: this.state.newstab.concat({title:this.state.title, image:this.state.image, article:this.state.synopsis  })})

// }

addmovie =(newmovie)=>{
  this.setState({
    news: this.state.news.concat(newmovie),
    filtred:this.state.filtred.concat(newmovie)

})
}

interval=setTimeout(() => { 
  this.setState({isloading:false})
  
}, 1000);

  render() {
    return (
      <div className="App">
        <Header searchname={this.search}/>
        <Star searchrate={this.searchrate}/>
        <Addfilm handlechange={this.handlechange} addmovie={this.addmovie}/>
        <Liste news={this.state.filtred} isloading={this.state.isloading}/>
      </div>
    );
  }
}

export default App;
