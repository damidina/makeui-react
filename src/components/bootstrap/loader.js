import React, { Component } from "react";
import { BounceLoader } from "react-spinners";

class Loader extends Component {
  render() {
    return (
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          bottom: "0",
          right: "0"
        }}
      >
        <div
          style={{
            width: 60,
            textAlign: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <BounceLoader size={60} color={`#9EDCFF`} />
          Compiling...
        </div>
      </div>
    );
  }
}

export default Loader;
