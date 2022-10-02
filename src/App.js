import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      filter: "",
    };
  }

  setFilter = (event) => {
    this.setState(() => {
      return { filter: event.target.value.toLocaleLowerCase() };
    });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {}
        )
      )
    );
  }

  render() {
    const { setFilter } = this;
    const { monsters, filter } = this.state;

    const filteredMonsters = monsters.filter((m) =>
      m.name.toLocaleLowerCase().includes(filter)
    );

    return (
      <div className="App">
        <h1 className="app-title">Monsters :-|</h1>
        <SearchBox
          onChangeHandler={setFilter}
          placeholder="Search Monsters"
          className="search-box"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
