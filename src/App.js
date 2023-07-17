import './App.css'
import { NavLink, useRoutes} from 'react-router-dom';
import routes from './routes'
import Header from './components/Header.jsx';
function App() {
  function computedClassName({isActive}){
    return isActive ? 'list-group-item customiseLink' : 'list-group-item'
  }

  //Generate corresponding route rules based on the route table
  const element = useRoutes(routes)
  
  return (
    <div className="App">
      <div>
        <div className="row">
          <Header/>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* router link */}
              <NavLink className={computedClassName} to="/about">About</NavLink>
            <NavLink className={computedClassName} to="/home" >Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* register router */}
                {element}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
