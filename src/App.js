import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import ProfileContainer from "./components/Profile/ProfileContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import { Route } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (
          < div className='app-wrapper'>
              <Header />
              <Nav />
              <div className='content-wrapper'>
                  <Route path='/profiles/:userId?' render={() => <ProfileContainer />}  />
                  <Route path='/massages' render={() => <DialogsContainer />}  />
                  <Route path='/news' render={() => <News />} />
                  <Route path='/music' render={() => <Music />} />
                  <Route path='/setting' render={() => <Setting />} />
                  <Route path='/users' render={() => <UsersContainer />}  />
              </div>
          </div>
  );
}

export default App;
