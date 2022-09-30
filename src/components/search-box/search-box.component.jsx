import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    const { className, onChangeHandler, placeholder } = this.props;

    return (
      <input
        className={className}
        type="search"
        placeholder={placeholder}
        onChange={(event) => onChangeHandler(event)}
      />
    );
  }
}

export default SearchBox;
