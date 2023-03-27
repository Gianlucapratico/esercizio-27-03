import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonComponent text="Clicca qui" />
        <ButtonComponent text="Ciao" />
        <ButtonComponent text="Hello" />

        <ImageComponent
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvEQFDIuBr5ssNtCuurrJssdot6kJDpT64H_5fBk7Zu9UzWQx6kvYruU4n1SWeOlAWs0&usqp=CAU"
          alt="tigre"
        />
        <ImageComponent
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH-p635x9k6oLuC15YjiYkXQCofMuVnY3RKA&usqp=CAU"
          alt="lupo"
        />
      </header>
    </div>
  );
}

export default App;
