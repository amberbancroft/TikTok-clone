import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './components/NavBar/index';
import HomePage from './components/HomePage/index';
import ProtectedRoute from './components/auth/ProtectedRoute';
import User from './components/ProfilePage/index';
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

  const DefaultRoutes = () => {
    return (
      <>
        <NavBar loaded={loaded} />
        {loaded && (
          <Switch>
            <Route path='/' exact={true} >
              <HomePage/>
            </Route>
            <Route path='/videos/:videoId' exact={true}>
              <SingleVideoPage/>
            </Route>
            <ProtectedRoute path='/users/:userId' exact={true} >
              <User/>
            </ProtectedRoute>
          </Switch>
        )}
      </>
    )
  }

  // const SpecialRoutes = () => {
  //   return (
  //     <Route path='/videos/:videoId' exact={true}>
  //       <SingleVideoPage/>
  //     </Route>
  //   )
  // }

  return (
    <BrowserRouter>
      <Switch>
        {/* <Route component={SpecialRoutes} exact={true}/> */}
        <Route component={DefaultRoutes} exact={true}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
