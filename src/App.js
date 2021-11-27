import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.components";
import { SearcBox } from "./components/search-box/search-box.components";

class App extends Component {
  state = {
    monsters: [],
    searchInput: "",
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchInput } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    return (
      <div className="App">
        <SearcBox
          placeholder={"Search Monster"}
          onChange={(e) => this.setState({ searchInput: e.target.value })}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
