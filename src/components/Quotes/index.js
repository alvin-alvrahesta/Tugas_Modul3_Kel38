import React, { Component } from "react";
export default class Quotes extends Component {
  render() {
    return (
      <div
        className="flex items-center justify-end bg-white mr-8"
        style={{ height: "100%" }}
      >
        <div className="flex-shrink-0 mr-3 ">
          <img src={this.props.quimage} alt="Footer" className="m-8 w-20" />
        </div>
        <div className="text-xl">
          <h3 className="block font-extrabold text-grey-800">
            "{this.props.quotes}"
          </h3>
          <p className="block text-grey-800">- {this.props.author}</p>
        </div>
      </div>
    );
  }
}
