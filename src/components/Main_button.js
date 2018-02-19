import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
class MainButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: "main-buttons flip"
    };
  }
  componenetDidMount() {
    this.setState({style: "main-buttons"});
  }

  render() {

    return (<div className={this.state.style} onClick={this.props.onButtonClick} >
      <img className="iconImg" src={this.props.img} alt={this.props.title + "icon"}/> {
        this.props.title.split(" ").map((text, i) => {
          return <span key={i}>{text}</span>
        })
      }
      <img className="arrow" src="./public/assets/more-blue.png" alt=""/>
    </div>);

  }
}
export default  MainButton;
