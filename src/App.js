import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
  return (
      <BrowserRouter>
          < div className='app-wrapper'>
              <Header />
              <Nav />
              <div className='content-wrapper'>
                  <Route path='/profiles' component={Profile} />
                  <Route path='/massages' component={Dialogs} />
                  <Route path='/news' component={News} />
                  <Route path='/music' component={Music} />
                  <Route path='/setting' component={Setting} />
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
