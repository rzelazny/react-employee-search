import React from "react";
import "./style.css";

// This component lets us use a bootstrap input element without worrying about class names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
function Input(props) {
  return (
    <form className="input-group input-group-lg" onSubmit = {props.onSubmit}>
      <label htmlFor="form-control"> <i className="fa fa-search fa-2x label" aria-hidden="true"></i></label>
      <input className="form-control" type="text" {...props} />
    </form>
  );
}

export default Input;
