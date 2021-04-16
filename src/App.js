import React, { Component } from "react";
import Palette from "./Palette/Palette";
import seedColors from "./seedColor/seedColor";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  render() {
    console.log();
    return (
      <div>
        <Palette palette={generatePalette(seedColors[4])} />
      </div>
    );
  }
}

export default App;