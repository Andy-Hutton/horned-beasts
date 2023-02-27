import { Component } from "react";
import HornedBeast from "./HornedBeasts";

class Main extends Component {
  render() {
    return (
      <main>
        <HornedBeast />
        <HornedBeast />
        <HornedBeast />
        <HornedBeast />
      </main>
    );
  }
}

export default Main;
