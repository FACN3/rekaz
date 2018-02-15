import React, {Component} from 'react';

class Figure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: "",
      update:this.props.update
    }
    this.handleFigureClick = this.handleFigureClick.bind(this);
    let flipped="";
  }

  componentDidMount(){
    if(this.props.id < this.props.percentage){
      setTimeout(()=> this.flipped="flipped", this.props.id * 200)

    }
  }
  componentDidUpdate(){
    if(this.props.id < this.props.percentage){
      setTimeout(()=> this.flipped="flipped", this.props.id * 200)

    }else{
      setTimeout(()=> this.flipped="" , this.props.id * 200)

    }
  }


  handleFigureClick() {
    if (this.flipped == "flipped") {
    this.flipped="";
    } else {
      this.flipped="flipped";
    }
  }
  render() {
    return (<div className={"card clickcard " + this.props.flipped} onClick={this.handleFigureClick}>
      <div className="front face"></div>
      <div className="back face"></div>
    </div>);
  }
}

export default Figure;
