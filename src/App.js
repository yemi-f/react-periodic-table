import React, { useState } from 'react';
import './App.css';
import ElementPropertiesTable from './ElementPropertiesTable'
import axios from 'axios';


function App() {

  const [elements, setElements] = useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://neelpatel05.pythonanywhere.com/');
      setElements(response.data);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <ElementPropertiesTable elements={elements} />
    </div>
  );
}



export default App;
