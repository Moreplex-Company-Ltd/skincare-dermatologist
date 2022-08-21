
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/Home';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route index exact element={<Home />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
