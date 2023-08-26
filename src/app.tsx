import Router, { Route } from "preact-router";
import { LoginPage } from './routes/login';
import { RegistrationPage } from "./routes/registration";
import { homePage } from "./routes/dashboard";
import { isLogged } from "./core/auth/auth";

export function App() {
  return (
    
    <Router>
      <Route path="/" component={LoginPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/registration" component={RegistrationPage} />
      {isLogged.value? <Route path="/dashboard" component={homePage}/> : <Route path="/dashboard" component={LoginPage}/>}
    </Router>
    
  )
}
