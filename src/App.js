import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Works} from "./works/Works";
import {NeedJob} from "./needJob/needJob";
import Contacts from "./contacts/contacts";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <NeedJob/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
