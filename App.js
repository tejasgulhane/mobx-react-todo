import './App.css';
import Todo from './Component/Todo';
import { observe } from 'mobx';
import Login from './Component/Login'
import Signup from './Component/Signup'
import Maintodo from './Component/Maintodo'
import {Routes,Route} from 'react-router-dom'

import { observer } from 'mobx-react'

const App = observer(({store}) => {

console.log(store);
  return (
    <>
          <Routes>
              <Route exact path="/" element={<Signup />}/>
              <Route exact path="/login" element={<Login />}/>
              <Route exact path="/todos" element={<Maintodo store={store} />}/>
          </Routes>
    </>
  );
}
)

export default App;
