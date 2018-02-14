import React, {Component} from 'react';

class Figure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: ""
    }
    this.handleFigureClick = this.handleFigureClick.bind(this);
  }

  componentDidMount(){
    if(this.props.id <= this.props.percentage){
      setTimeout(()=> this.setState({flipped: "flipped"}) , this.props.id * 200)

    }
  }

  handleFigureClick() {
    if (this.state.flipped == "flipped") {
      this.setState({flipped: ""});
    } else {
      this.setState({flipped: "flipped"});
    }
  }
  render() {
    return (<div className={"card clickcard " + this.state.flipped} onClick={this.handleFigureClick}>
      <div className="front face"></div>
      <div className="back face"></div>
    </div>);
  }
}

export default Figure;
