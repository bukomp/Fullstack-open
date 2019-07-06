import React from "react";

const Filter = (props) => {
  return (<form>
    filter shown with
    <input
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  </form>)
}

export default Filter;