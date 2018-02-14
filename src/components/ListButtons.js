import React from 'react';
import MainButton from './MainButton';
class ListButtons extends React.Component {
  Constructor(props) {
    super(props);
    this.state = {
      list: 0,
      lists: [
        [
          {
            text: "Health Status",
            link: 1
          }, {
            text: "Health behavior",
            link: 2
          }, {
            text: "Health Letarecy",
            link: 3
          }, {
            text: "Health Service",
            link: 4
          }
        ],
        [
          {
            text: "Perodic Checkups",
            link: "perodic"
          }, {
            text: "Smoking",
            link: "smoking"
          }, {
            text: "Physical Activity",
            link: "activity"
          }, {
            text: "Food and Nutrition",
            link: "food"
          }
        ]
      ]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(obj) {
    if (typeof obj.link === "number") {
      this.setState({list:obj.link});
    }else{
      //handleRedirct to obj.link;
    }

  }

  render(){
    return(
      <div>
        {this.state.lists[this.state.list].map(obj=>{
          return <MainButton title={obj.text} onButtonClick={this.handleClick(obj)}></MainButton>
        })}
      </div>
    );
  }

}

export default ListButtons;
