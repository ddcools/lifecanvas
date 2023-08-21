import React from 'react';
import './App.css';
import routes from './routes/routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          { routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              element={<route.component/>}
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
