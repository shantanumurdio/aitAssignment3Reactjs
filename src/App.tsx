import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/Login/LoginPage';
import Main from './Components/Body/Main';
import Employ from './Components/Sidebar/Employ/Employ';
import Company from './Components/Sidebar/Company/Company';
import CompFrom from "./Components/Sidebar/Company/CompTable/CompForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/main" element={<Main />} />
          <Route path="/employ" element={<Employ />} />
          <Route path="/company" element={<Company />} />
          {/* Ensure to pass onAdd prop to CompFrom */}
          <Route path="/compform" element={<CompFrom onAdd={handleAddProject} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// Define handleAddProject function here or import it from where it's defined
function handleAddProject(name: string, project: string, domain: string, backendTech: string) {
  // Implement logic to add project details
}
