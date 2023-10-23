import { useState } from 'react';

function App() {

  const [age, setAge] = useState();

  const calculateAge = () => {
    const birthDate = new Date(document.getElementById('date').value);
    const difference = Date.now() - birthDate.getTime();
    const age = new Date(difference); 
    setAge(Math.abs(age.getUTCFullYear() - 1970));
  }

  return (
    <div className='d-flex align-items-center justify-content-center flex-column' style={{height:"100vh", width:"100vw"}}>
      <h1>Age Calculator</h1>
      <input type="date" id="date" className='m-4'></input>
      <button onClick={calculateAge} className='btn btn-primary mb-2'>Calculate Age</button>
      {age && <h5>Your age is: {age}</h5>}
    </div>
  );
}

export default App;