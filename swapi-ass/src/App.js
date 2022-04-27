import logo from "./logo.svg";
import style from "./App.module.css";
import Table from "./Components/Table";
import { useState } from "react";
const axios = require("axios");

function App() {
  const [people, setPeople] = useState([]);
  const addRandom = async () => {
    let random = Math.floor(Math.random() * 83);
    axios
      .get("https://swapi.dev/api/people/" + random)
      .then(function (response) {
        // handle success
        // console.log(response);
        setPeople([...people, response.data]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        if (error) {
          addRandom();
        }
      })
      .then(function () {
        // always executed
      });
  };

  const deleteEnter = (index) => {
    let newList = people.filter((el, i) => {
      return i !== index;
    });
    setPeople(newList);
  };
  return (
    <div className={style.App}>
      <header className={style.AppHeader}>
        <div style={{ width: "30em", border: "solid", padding: "2em" }}>
          <button onClick={() => addRandom()}>Add Record</button>
          <Table del={deleteEnter} peoples={people}></Table>
        </div>
      </header>
    </div>
  );
}

export default App;
