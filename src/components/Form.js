import React from "react";
class Form extends React.Component {
  state = {};
  render() {
    return (
      <div className="hideDiv" style={{ display: this.props.style.display }}>
        <div className="hideInputDiv">
          <input
            onChange={this.props.inputState}
            className="input"
            type="text"
            value={this.props.input}
            placeholder="enter title"
          />
        </div>
    </div>
    );
  }
}
export default Form;
