import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <Router>
      <Route path='/' component={HomeScreen} exact />
      <Route path='/product/:id' component={ProductScreen} />
      <Footer />
    </Router>
  );
}

export default App;
