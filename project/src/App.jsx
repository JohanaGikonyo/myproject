import { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [percent, setPercent] = useState('');
  const [showRedBox, setShowRedBox] = useState(false);
 const [quiz, setQuiz]=useState(false)
  const percentage = () => {
    setPercent((num1 / num2) * 100);
  };

  const clear = () => {
    setNum1('');
    setNum2('');
    setPercent('');
    setShowRedBox(false); // Reset to hide red box
  };

  const review = () => {
    setShowRedBox(true); // Show red box when "PREVIEW" button is clicked
  };

  return (
    <div className='cal2'>
      {/* <h1 className='btn btn-block'>Calculation 2</h1> */}
      {
        quiz?<div>

          
        </div>
        
        :
         <div>
        <h4>Fabric Shrinkage Calculator</h4>
        <div className='select1'>
          <input type="text" placeholder="Enter fabric" />
          <select name="" id="" placeholder="select Wash Type" value="Select Wash Type">
            <option></option>
          </select>
        </div>
        <div className='select2'>
          <label>Select Calculation Type:</label>
          <select >
            <option value="">X is what percentage of Y</option>
            <option value="">What is X percentage of Y</option>
          </select>
        </div>
        <input type="number" onChange={(e) => setNum1(e.target.value)} value={num1} />
        <br />
        <label>is what % of </label>
        <br />
        <input type="number" onChange={(e) => setNum2(e.target.value)} value={num2} />
        <p style={{color:"red"}}>Answer {` ${percent} %`}</p>
        <div className="box-container"> {/* Container for the boxes */}
          <div className='d-flex '><p className='m-3'>{num2}</p>
          { num1 && num2 && ( // Render red box if showRedBox is true and num1 and num2 are provided
              <div
                className="box" /* Apply both classes */
                style={{ height: `${num2}vh`,width: `${num2}vh` }}
              ></div>
            )}

         
          
          </div> {/* Original blue box */}

          {showRedBox && num1 && num2 && ( // Render red box if showRedBox is true and num1 and num2 are provided
            <div
              className="box red-box" /* Apply both classes */
              style={{ width: `${(((num1 / num2) * 100) / 100) * num2}vh` , height:`${num2}vh`}}
            >{num1}</div>
          )}
        </div>
        <div className='submits'>
          <button onClick={clear} className='btn btn-danger'>CLEAR</button>
          <button onClick={percentage} className='btn btn-primary'>CALCULATE</button>
        </div>
        <div className='submits'>
          <button className='btn btn-dark'>PRINT</button>
          <button className='btn btn-success' onClick={review}>PREVIEW</button>
        </div>
      </div>
      }
      
     
    </div>
  );
}

export default App;
