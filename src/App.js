import Header from "./components/Header";
import DrumBase from "./components/DrumBase";

function App() {
  return (
    <div id="drum-machine" className="container">
      <Header />
      <DrumBase />
      <footer className="fixed-bottom text-center mb-2">
        <small>
          Developed by{" "}
          <a className="link-primary" href="https://github.com/ShadeVI">
            ShadeVI
          </a>
        </small>
      </footer>
    </div>
  );
}

export default App;
