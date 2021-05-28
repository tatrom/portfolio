import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Works} from "./works/Works";
import Footer from "./footer/Footer";
import ContactsContainer from "./contacts/contactsContainer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <ContactsContainer/>
            <Footer/>

        </div>
    );
}

export default App;
