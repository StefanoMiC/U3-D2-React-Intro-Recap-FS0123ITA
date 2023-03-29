import { Component } from "react";
import ImageAndParagraph from "./ImageAndParagraph";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <ImageAndParagraph logo={this.props.logo} />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          {this.props.text}
        </a>
        {this.props.children}
        {/*this.props.children (o props.children in una funzione) permette di ricevere elementi dall'esterno 
        che saranno quelli inseriti tra il tag di apertura e chiusura del componente Header 
        questo ci dà la possibilità di customizzare questo componente ancora di più con strutture diverse 
        per le varie istanze e utilizzi che avremo
        in base a dove posizionerai il codice dinamico this.props.children, lì sarà il punto in cui gli elementi verranno visualizzati
        
        avrai tu il controllo sulla loro posizione*/}
      </header>
    );
  }
}
export default Header;
