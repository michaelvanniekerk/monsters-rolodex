import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      filter: "",
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("mount");
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      )
    );
  }

  onFilterChange = (event) => {
    this.setState(() => ({
      filter: event.target.value.toLocaleLowerCase(),
    }));
  };

  render() {
    console.log("render");

    const { monsters, filter } = this.state;
    const { onFilterChange } = this;

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onFilterChange}
        />

        {monsters
          .filter((monster) =>
            monster.name.toLocaleLowerCase().includes(filter)
          )
          .map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>;
          })}
      </div>
    );
  }
}

export default App;
