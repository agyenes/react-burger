import React from 'react';
import './App.module.css';

import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <p>The are the children</p>
      </Layout>
    </div>
  );
}

export default App;
