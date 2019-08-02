import React ,{Component} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'; 
import Data from '../src/component/Data'
class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
        <Switch>
        
        <Route exact path="/" component={Data} />
        {/* <Layout>
          <PrivateRoute path="/CreateEvent" component={CreateEvent}/>
          <PrivateRoute path="/Home" component={Home}/>
          <PrivateRoute path="/EventDetails/:id" component={EventDetails}/>
          {/* <PrivateRoute path="*" component={NotFound}/> */}
          {/* <PrivateRoute path="/mySubscription" component={Subscription} />
          <PrivateRoute path="/editEvent/:id" component={EditEvent}/>
          </Layout> */} */}

        </Switch>
      </BrowserRouter>
      
    );
  }
}
 
export default App;