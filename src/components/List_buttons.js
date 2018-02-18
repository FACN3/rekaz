import React from 'react';
import { Redirect } from 'react-router';
import MainButton from './Main_button';
class ListButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: 0,
      lists: [
        [
          {
            text: "Health Status",
            link: 1,
            image: ""
          }, {
            text: "Health behavior",
            link: 2,
            image: ""
          }, {
            text: "Health Letarecy",
            link: 3,
            image: ""
          }, {
            text: "Health Service",
            link: 4,
            image: ""
          }
        ],
        [
          {
            text: "Perodic Checkups",
            link: "perodic",
            image: ""
          }, {
            text: "Smoking",
            link: "smoking",
            image: "../../public/assets/smoke-512.ico"
          }, {
            text: "Physical Activity",
            link: "activity",
            image: ""
          }, {
            text: "Food and Nutrition",
            link: "food",
            image: ""
          }
        ]
      ],
      redirect : ""
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleBackArrow = this.handleBackArrow.bind(this);
  }

  handleClick(obj) {
    if(typeof obj.link == "number"){
      this.setState({list:obj.link});
    }else{
      this.setState({redirect:obj.link});
    }
  }
  handleBackArrow(){
    this.setState({list:0});
  }

  render(){
    let  buttonsSectionHeader = "";
    if(this.state.list !== 0){
       buttonsSectionHeader = [
        <img src="../../public/assets/left-arrow.png" onClick={this.handleBackArrow} alt="go back arrow"/>,
        <h2>{this.state.lists[0][this.state.list - 1].text}</h2>
      ]
    }else{
       buttonsSectionHeader = <h2>Content</h2>;
    }
    if(this.state.redirect!==""){
      return <Redirect to={this.state.redirect} />;
    }
    return(
      <div>
        <div className="main-buttons-section-header">
          {buttonsSectionHeader}
        </div>
        <div className="main-buttons-container">
          {this.state.lists[this.state.list].map((obj,i)=>{
            return <MainButton key={i} title={obj.text}  img={obj.image} obj={obj} link={obj.link} onButtonClick={()=>{this.handleClick(obj)}}></MainButton>
          })}
        </div>
    </div>
    );
  }

}

export default ListButtons;