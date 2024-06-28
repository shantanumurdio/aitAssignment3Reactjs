import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Components/Login/LoginPage";
import Main from "./Components/Body/Main";
import Employ from "./Components/Sidebar/Employ/Employ";
import Company from "./Components/Sidebar/Company/Company";
import CompFrom from "./Components/Sidebar/Company/CompTable/CompForm";
import { Provider } from "react-redux";
import store from "./Components/Redux/store"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/main" element={<Main />} />
            <Route path="/employ" element={<Employ />} />
            <Route path="/company" element={<Company />} />
            <Route path="/compform" element={<CompFrom />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
