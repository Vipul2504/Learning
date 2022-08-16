import { Component } from "react";

class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date().getSeconds()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date().getSeconds()
      });
    }
  
    render() {
      return (
        <div className="clock">
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date}.</h2>
        </div>
      );
    }
  }

export default Clock;