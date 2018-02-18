import React, {Component} from 'react';

class Figure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: ""
    }
    this.handleFigureClick = this.handleFigureClick.bind(this);
    let flipped="";
  }

  componentDidMount(){
    if(this.props.flipped!=this.state.flipped){
      this.setState({flipped:this.props.flipped});
    }
  }
  componentDidUpdate(){
    if(this.props.flipped!=this.state.flipped){
      this.setState({flipped:this.props.flipped});
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
