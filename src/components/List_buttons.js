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
            link: 1,
            image: "../../public/assets/stethoscope.png"
          }, {
            link: 2,
            image: "../../public/assets/heart.png"
          }, {
            link: 3,
            image: "../../public/assets/Litracy.png"
          }, {
            link: 4,
            image: "../../public/assets/charity.png"
          }
        ],
        [
          {
            link: "perodic",
            image: "../../public/assets/medical-checkup.png"
          }, {
            link: "smoking",
            image: "../../public/assets/smoke-512.ico"
          }, {
            link: "activity",
            image: "../../public/assets/physical-activity.png"
          }, {
            link: "food",
            image: "../../public/assets/nutrition.png"
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
        <img key="goBackArrow" src="../../public/assets/left-arrow.png" onClick={this.handleBackArrow} alt="go back arrow"/>,
        <h2 key="bottunListHeader">{this.props.languages.ButtonsContent[0]}</h2>
      ]
    }else{
       buttonsSectionHeader = <h2>{this.props.languages.content}</h2>;
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
            return <MainButton key={i} title={this.state.list===0?this.props.languages.ButtonsContent[i]:this.props.languages.ButtonStatus[i]}  img={obj.image} obj={obj} link={obj.link} onButtonClick={()=>{this.handleClick(obj)}}></MainButton>
          })}
        </div>
    </div>
    );
  }

}

export default ListButtons;
