import React from "react";
import {confirm} from './Confirmation';


class DoneButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: ""
      };
      this.handleOnClick = this.handleOnClick.bind(this);
      this.handleOnClickComplex = this.handleOnClickComplex.bind(this);
    }
  
    async handleOnClick() {
      console.log("hoge!");
      if (await confirm("Are your sure?")) {
        this.setState({
          message: "OK!"
        });
      } else {
        this.setState({
          message: "No!"
        });
      }
    }
  
    render() {
      return (
        <div>
          <div>
            <button onClick={this.handleOnClick}>simple</button>
          </div>
          <div>{this.state.message}</div>
        </div>
      );
    }
  }

  export default DoneButton;