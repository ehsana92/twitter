import React from 'react';
import Layout from "./layout/Layout";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "../pages/home/Home";
import P404 from "../pages/404/404"
import TweetsByHashTag from "../pages/tweetsByHashtag/TweetsByHashTag";
import TweetsByUser from '../pages/tweetsByUser/TweetsByUser'
import AuthPage from '../pages/auth/AuthPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TweetProvider } from '../context/TweetContext'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <PublicRoute path={"/login"} component={AuthPage} />
          <PrivateRoute path={"/"} render={() => {
            return <TweetProvider>
              <Layout>
                <Switch>
                  <Route exact path={"/"} component={Home} />
                  <Route exact path={"/hashtags/:hashtag"} component={TweetsByHashTag} />
                  <Route exact path={"/users/:id/:name"} component={TweetsByUser} />
                  <Route component={P404}></Route>
                </Switch>
              </Layout>
            </TweetProvider>
          }} />
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};
const isLogin = () => !!localStorage.getItem("x-auth-token");

const PublicRoute = ({ component, ...props }) => {
  return <Route {...props} render={(props) => {
    if (isLogin())
      return <Redirect to={"/"} />
    else return React.createElement(component, props);
  }
  } />
}

const PrivateRoute = ({ render, ...props }) => {
  return <Route {...props} render={(props) => {
    if (isLogin())
      return render(props);
    else return <Redirect to={"/login"} />
  }} />
}


export default App;