import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import LoginForm from './components/auth/LoginForm/index';
// import SignUpForm from './components/auth/SignUpForm/index';
import NavBar from './components/NavBar/index';
import HomePage from './components/HomePage/index';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import SingleVideoPage from './components/SingleVideoPage/index'
import { authenticate } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar loaded={loaded} />
      {loaded && (
        <Switch>
          <Route path='/' exact={true} >
            <HomePage/>
          </Route>
          <Route path='/videos/:videoId' exact>
            <SingleVideoPage/>
          </Route>
          <ProtectedRoute path='/users' exact={true} >
            <UsersList/>
          </ProtectedRoute>
          <ProtectedRoute path='/users/:userId' exact={true} >
            <User/>
          </ProtectedRoute>
        </Switch>
      )}
    </BrowserRouter>
  );
}

export default App;
