// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import AboutMe from './components/aboutMe';
import MyWork from './components/myWork';
import MyResume from './components/myResume';
import ContactMe from './components/contactMe';
import Footer from './components/footer';

function App() {
  return (
    <div>
    <Header></Header>
    <AboutMe></AboutMe>
    <MyWork></MyWork>
    <MyResume></MyResume>
    <ContactMe></ContactMe>
    <Footer></Footer>
    </div>
    );
}

export default App;
