import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ImageAndParagraph from "./components/ImageAndParagraph";

function App() {
  return (
    <div className="App">
      <Header logo={logo} text="Learn React">
        {/* questi elementi diventeranno il valore di this.props.children per questa istanza del componente Header */}
        <p>Sono figlio di header</p>
        <ul>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
        </ul>
      </Header>
      <Header logo={logo} text="Learn it good">
        {/* questo h5 diventerà il valore di this.props.children per questa istanza del componente Header */}
        <h5>sono un h5 del secondo header</h5>
      </Header>
      <Header logo={logo} text="Make sure to learn it">
        {/* questo button diventerà il valore di this.props.children per questa istanza del componente Header */}
        <button>Sono button del terzo header</button>
      </Header>
      <ImageAndParagraph logo={logo} />
    </div>
  );
}

export default App;
