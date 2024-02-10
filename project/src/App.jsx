import { useState } from 'react';
import './App.css';
import Shrinkage from './components/Shrinkage';

function App() {
  const [num1, setNum1] = useState(18);
  const [num2, setNum2] = useState(30);
  const [percent, setPercent] = useState();
  const [showRedBox, setShowRedBox] = useState(false);
  const [quiz, setQuiz] = useState('percentage');
  const [calc, setCalc] = useState();
  const [answer, setAnswer] = useState('');
  const [name, setName]=useState('')
  const [display, setdisplay]=useState(false)
  const [option, setOption]=useState()

  const percentage = () => {
    if (quiz === "percentageOf") {
      setPercent((num1 / num2) * 100);
      setAnswer(`Answer ${Math.round(percent)}%`);
      
    } else if (quiz === 'percentage') {
      setPercent((num1 / 100) * num2);
      setAnswer(`Answer ${Math.round(percent)}`);
      
    } else {
      setCalc(<Shrinkage names={name} option={option}/>);
    }
  };

  const clear = () => {
    setNum1('');
    setNum2('');
    setPercent('');
    setShowRedBox(false); // Reset to hide red box
  };
  const handleChange = (event) => {
    setOption(event.target.value);
    
  
  };
  const handleoption=(e)=>{
    setQuiz(e.target.value)
    if (e.target.value === "percent2") {
      setdisplay(false);
    } else {
      setdisplay(true);
    }
  }

  const review = () => {
    setShowRedBox(true); // Show red box when "PREVIEW" button is clicked
  };

  return (
    <div>
      <div className='cal2'>
        <h1 className='btn btn-block'> Fabrinc Shinkage Calculator</h1>
        <div className='btn btn-block'>{calc}</div>
       { display?<div className='select1'>
          <input type="text" placeholder="Enter fabric" onChange={(e)=>{setName(e.target.value)}} />
          <select name="" onChange={handleChange} value={option}>
          <option value="">Select Wash Type</option>
            <option value="Raw Wash">Raw Wash</option>
            <option value="Stone Wash">Stone Wash</option>
            <option value="Mineral Wash">Mineral Wash</option>
            <option value="Vintage Wash">Vintage Wash</option>
            <option value="Acid Wash">Acid Wash</option>
            <option value="Snow Wash">Snow Wash</option>
            <option value="Enzyme Wash">Enzyme Wash</option>
            <option value="Sand Wash">Sand Wash</option>
            <option value="Silicon Wash">Silicon Wash</option>
            <option value="Bleach Wash">Bleach Wash</option>
            <option value="Destroy Wash">Destroy Wash</option>
            <option value="Whiskers">Whiskers</option>
            <option value="Spray Stone Wash">Spray Stone Wash</option>
            <option value="pigment Dyed Wash">pigment Dyed Wash</option>
            <option value="Wrapping up">Wrapping up</option>
            <option value="Other:">Other:</option>
          </select>
        </div>:''
}
        <div className='select2'>
          <label>Select Calculation Type:</label>
          <select onChange={handleoption} value={option}>
            
            <option value="percentageOf">X is what percentage of Y</option>
            <option value="percentage" >What is X percentage of Y</option>
            <option value="percent2" >Fabric % Increase/Decrease</option>
          </select>
        </div>

        {quiz === 'percent2' ? (
    <Shrinkage names={name} option={option}/>
) : (
    ''
)}


        {quiz === 'percentageOf' ? (
          <div>
            <input type="number" onChange={(e) => setNum1(e.target.value)} value={num1} />
            <br />
            <label>is what % of </label>
            <br />
            <input type="number" onChange={(e) => setNum2(e.target.value)} value={num2} />
            <p style={{ color: "red" }}>{answer}</p>
            <div className="box-container">
              <div className='d-flex '>
                <p className='m-3'>{num2}</p>
                {num1 && num2 && (
                  <>
                    <div
                      className="box"
                      style={{ height: `${num2}vh`, width: `${num2}vw` }}
                    ></div>
                  </>
                )}
              </div>
              <div className='d-flex align-items-center pt-50% ' >
                <box-icon name='chevron-left'></box-icon>
                <hr style={{ width: `${num2}vw`, backgroundColor: "red" }} />
              </div>

              {showRedBox && num1 && num2 && (
                <div
                  className="box red-box"
                  style={{ width: `${(((num1 / num2) * 100) / 100) * num2}vh`, height: `${num2}vh` }}
                >
                  <div className='d-flex align-items-center pt-50% '>
                    <box-icon name='chevron-left'></box-icon>
                    <hr style={{ width: "100%", backgroundColor: "red" }} />
                  </div>
                  {num1}
                </div>
              )}
            </div>
              <div className='submits'>
          <button onClick={clear} className='btn btn-danger'>CLEAR</button>
          <button onClick={percentage} className='btn btn-dark'>CALCULATE</button>
        </div>
        <div className='submits'>
          <button className='btn btn-dark'>PRINT</button>
          <button className='btn btn-success' onClick={review}>PREVIEW</button>
        </div>
          </div>
        ) : null}

        {quiz === "percentage" && (
          <div>
            <br />
            <label>What is</label><br />
            <input type="number" onChange={(e) => setNum1(e.target.value)} value={num1} /><br /><p>% Of</p>

            <br />
            <input type="number" onChange={(e) => setNum2(e.target.value)} value={num2} />
            <p style={{ color: "red" }}>{answer}</p>
            <div className="box-container">
              <div className='d-flex '>
                <p className='m-3 '>{num2}</p>
                {num1 && num2 && (
                  <div
                    className="box"
                    style={{ height: `${num2}vh`, width: `${num2}vw` }}
                  ></div>
                )}
              </div>
              <div className='d-flex align-items-center pt-50% justify-content-center w-100%'>
                <box-icon name='chevron-left'></box-icon>
                <hr style={{ width: '100%', backgroundColor: "red" }} />
              </div>
              {showRedBox && num1 && num2 && (
                <div
                  className="box red-box"
                  style={{ width: `${percent}vw`, height: `${num2}vh` }}
                >
                  <div className='d-flex align-items-center pt-50% justify-content-center' style={{ width: `${Math.round(percent)}vw`, color: "red" }}>
                    <box-icon name='chevron-left'></box-icon>
                    <hr style={{ width: "100%", backgroundColor: "red" }} />
                  </div>
                  <p>{Math.round(percent)}</p>
                </div>
              )}
            </div>
            <div className='submits'>
          <button onClick={clear} className='btn btn-danger'>CLEAR</button>
          <button onClick={percentage} className='btn btn-dark'>CALCULATE</button>
        </div>
        <div className='submits'>
          <button className='btn btn-dark'>PRINT</button>
          <button className='btn btn-success' onClick={review}>PREVIEW</button>
        </div>
          </div>
        )}

      
      </div><br /><br />
      {/* <Shrinkage /> */}
    </div>
  );
}

export default App;
