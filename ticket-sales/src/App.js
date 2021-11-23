import React from 'react'
import 'antd/dist/antd.css';
import MovieDisplayList from './components/MovieDisplayList';
import SeatDisplayList from './components/SeatDisplayList';
import { Col, Row } from 'antd';

function App() {
  return (
    <div>
      <MovieDisplayList />
      <SeatDisplayList />
    </div>
  );
}

export default App;
