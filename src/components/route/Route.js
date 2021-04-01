import React from "react";
import { BrowserRouter, Switch,Route } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Home from "../home/Home";
import Signup from "../auth/Signup";
import Activate from "../auth/Activate";
import Signin from "../auth/Signin";
import Logout from "../auth/Logout";
import Forgot from "../auth/Forgot";
import Reset from "../auth/Reset";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Dashboard from "../dashboard/Dashboard";


const Routes = () => {
    return (

        <BrowserRouter>
        <Navbar/>
         <Switch>
             <PublicRoute exact  path ="/" component={Home}/>

            <PublicRoute restricted path="/signup" exact component={Signup}  />
            <Route restricted path="/signin" exact component={Signin}/>
            <PublicRoute 
             path="/auth/activate/:token" 
             exact 
             component={Activate}
             />
            <PublicRoute
            restricted
            path="/auth/password/forgot"
            exact
            component={Forgot}
            />
            <PublicRoute
            restricted
            path="/auth/password/reset/:token"
            exact
            component={Reset}
            />
            <PublicRoute
            path="/logout"
            exact 
            component={Logout}
            />

            <PrivateRoute path="/dashboard" exact component={Dashboard} />
 
         </Switch>


    </BrowserRouter>       
    )
};

export default Routes;