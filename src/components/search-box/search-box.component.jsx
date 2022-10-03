import "./search-box.styles.css";

const SearchBox = ({ className, onChangeHandler, placeholder }) => (
  <input
    className={className}
    type="search"
    placeholder={placeholder}
    onChange={(event) => onChangeHandler(event)}
  />
);

export default SearchBox;
