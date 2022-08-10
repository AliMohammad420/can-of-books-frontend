import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import Login from './Auth/Login';
import Logout from './Auth/Logout';
import Profile from './profile';
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import AddBook from './Add';
import ManegeBooks from './ManegeBooks';

class App extends React.Component {
  render() {
    return (
      <>
         <Router>
          <Header />
          <Routes>
          <Route 
              exact path="/"
              element={<BestBooks />}
            >
               </Route>
            <Route 
              exact path="/Profile"
              element={<Profile />}
            >
              
            </Route>
            <Route 
              exact path="/Login"
              element={<Login />}
              
            >
              
            </Route>
            <Route 
              exact path="/About"
              element={<About />}
              
            >

            </Route>
            <Route 
              exact path="/AddBook"
              element={<AddBook />}
              
            >

            </Route>
            <Route 
              exact path="/DeleteBook"
              element={<ManegeBooks />}
              
            >

            </Route>

            
            <Route 
              exact path="/logout"
              element={<Logout />}
              
            >

            </Route>
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}


export default App;