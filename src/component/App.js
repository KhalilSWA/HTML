import React from 'react';
import Card from "./Card"

const App = () => {
  const data = [
    {
    Name: 'Khalil',
    Age: '123',
    Adress : '456', 
    },
  ];

return (<div className='mainContainer'>
  <h1></h1>
  <Card namesList={data} />
  </div>)


}


  
export default App;
