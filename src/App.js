import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import   Home  from './layout/Home'
import About from './view/About'
import Contact from './view/Contact'
import Login from './view/Login'
import Register from './view/Register'
import OurService from './view/OurService'
import CreateAcount from './layout/CreateAcount'
import  './css/bootstrap.min.css'
import '../node_modules/antd/dist/antd.css'
function App() {
  return (
             <Router>
    <div className="App">
          

          <Navbar/>

 
           <Switch>
           <Route path="/" exact component={Home} /> 
              <Route path="/login"  component={Login} />
                           <Route path="/register" component={Register} />
                  <Route path="/ourservice" component={OurService} />



            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
                        <Route path="/addacount" component={CreateAcount} />


               </Switch>
               

               
                
          <Footer/>
    </div>
           </Router>
  );
}

export default App;
