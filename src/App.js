import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  state = {
    //style is an object to check the styling if they're turned on or off to be used when rendering the textbox
    style: { bold: false, italic: false, underline: false },
    color: "black"
  };
  //this function receive the style "bold","underline" etc and checks the corrosponding switch within "state.style" and flips the value
  setStyle = style => {
    let styling = this.state.style;
    styling[style] = !styling[style];
    this.setState({ style: styling });
  };
  //the following 3 functions are for rendering and check the state and activates the styling if true
  fontweight = () => {
    if (this.state.style.bold) {
      return "bold";
    }
    return "";
  };
  fontstyle = () => {
    if (this.state.style.italic) {
      return "italic";
    }
    return "";
  };
  textdecorationline = () => {
    if (this.state.style.underline) {
      return "underline";
    }
    return "";
  };
  render() {
    let styleNames = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];

    let stylingBoxes = styleNames.map(style => {
      return (
        <button
          onClick={() => this.setStyle(style)}
          style={styles[style]}
          key={style}
        >
          {style}
        </button>
      );
    });

    let colorBoxes = colors.map(color => {
      return (
        <button
          onClick={() => this.setState({ color: color })}
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
        />
      );
    });

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        <textarea
          style={{
            color: this.state.color,
            fontWeight: this.fontweight(),
            fontStyle: this.fontstyle(),
            textDecorationLine: this.textdecorationline()
          }}
        />
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
