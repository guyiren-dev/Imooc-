import React,{Component} from 'react';
import {HashRouter,Route} from 'react-router-dom';
import App from './App';
import Admin from './admin';
import Login from './pages/login';
import Buttons from './pages/UI/button';
import Nomatch from './pages/noMatch';

export default class IRouter extends Component{

  render(){
    return(
      <HashRouter>
        <App>
          <Route path='/login' component={Login}/>
          <Route path='/admin' render = {()=>(
            <Admin>
              <Route exact={true} path='/admin/ui/buttons' 
                     component={Buttons}/>
              <Route component={Nomatch}/>
            </Admin>
          )}/>         
        </App> 
        
      </HashRouter>
    )
  }
}