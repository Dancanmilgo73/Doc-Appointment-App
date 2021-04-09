import "./App.css";
import Home from "./components/Home";
import NewAppointment from "./components/NewAppointment";
import Login from "./components/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Admin from "./components/Admin/Admin.js";
import Data from "./components/MockData";
import Reserve from "./components/Reserve";
function App() {
  const [doctorData, setDoctorData] = [Data];

  return (
    <div className="App">
      <h1>Doctor appointment</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home doctorData={doctorData} />
          </Route>
          <Route path="/new-appointment/:id">
            <NewAppointment doctorData={doctorData} />
          </Route>
          <Route path="/new-appointment/:id/reservation">
            <Reserve doctorData={doctorData} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          {/* <Route path="/admin/create">
              <Create />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
