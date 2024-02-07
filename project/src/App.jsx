import { useState } from 'react';
import './App.css';
import Shrinkage from './components/Shrinkage';
import { Route, Routes } from 'react-router-dom';
import Navigations from './components/Navigations';
function App() {
  const [num1, setNum1] = useState(18);
  const [num2, setNum2] = useState(30);
  const [percent, setPercent] = useState();
  const [showRedBox, setShowRedBox] = useState(false);
  const [quiz, setQuiz] = useState('')
  const [calc, setcalc]=useState(<h2>Calculator 2</h2>)
  const [answer, setAnswer]=useState()
 
  
  const percentage = () => {
    if (quiz==="percentageOf"){
      setPercent((num1 / num2) * 100);
      setAnswer(`Answer ${Math.round(percent)}%`)
      
    }
   else{
    setPercent((num1/100)*num2)
    setAnswer(`Answer ${Math.round(percent)}`)
    
   } 
   
    
    
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
    <div >
      {/* <h1 className='btn btn-block'>Calculation 2</h1> */}
      
          <div className='cal2'>
                 <h1 className='btn btn-block'> Fabrinc Shinkage Calculator</h1>    
            <div className='btn btn-block'>{calc}</div>
            <div className='select1'>
              <input type="text" placeholder="Enter fabric" />
              
              <select name="" >
                <option value="">Raw Wash</option>
                <option value="">Stone Wash</option>
                <option value="">Mineral Wash</option>
                <option value="">Vintage Wash</option>
                <option value="">Acid Wash</option>
                <option value="">Snow Wash</option>
                <option value="">Enzyme Wash</option>
                <option value="">Sand Wash</option>
                <option value="">Silicon Wash</option>
                <option value="">Bleach Wash</option>
                <option value="">Destroy Wash</option>
                <option value="">Whiskers</option>
                <option value="">Spray Stone Wash</option>
                <option value="">pigment Dyed Wash</option>
                <option value="">Wrapping up</option>
                <option value="">Other:</option>
              </select>
              
            </div>
            <div className='select2'>
              <label>Select Calculation Type:</label>
              <select onChange={(e)=>{setQuiz(e.target.value)}}>
                <option value="percentageOf">X is what percentage of Y</option>
                <option value="percentage">What is X percentage of Y</option>
              </select>
            </div>

            {
        (quiz==='percentageOf')?
         (<div>
<input type="number" onChange={(e) => setNum1(e.target.value)} value={num1} />
            <br />
            <label>is what % of </label>
            <br />
            <input type="number" onChange={(e) => setNum2(e.target.value)} value={num2} />
            <p style={{ color: "red" }}>{answer}</p>
            <div className="box-container"> {/* Container for the boxes */}
              <div className='d-flex '><p className='m-3'>{num2}</p>
                {num1 && num2 && ( // Render red box if showRedBox is true and num1 and num2 are provided
                  <>
                  <div
                    className="box" /* Apply both classes */
                    style={{ height: `${num2}vh`, width: `${num2}vw` }}
                  ></div>
                  
                  </>
                )}



              </div> {/* Original blue box */}
              <div className='d-flex align-items-center pt-50% ' ><box-icon name='chevron-left'></box-icon><hr style={{width:`${num2}vw`,backgroundColor:"red"}}/></div>

              {showRedBox && num1 && num2 && ( // Render red box if showRedBox is true and num1 and num2 are provided
                <div
                  className="box red-box" /* Apply both classes */
                  style={{ width: `${(((num1 / num2) * 100)/100)*num2}vh`, height: `${num2}vh` }}
                ><div className='d-flex align-items-center pt-50% '><box-icon name='chevron-left'></box-icon><hr style={{width:`100%`,backgroundColor:"red"}}/></div>{num1}</div>
              )}
            </div>
        </div>
  )
          :
            (<div>
              <br/>
               <label>What is</label><br/>
<input type="number" onChange={(e) => setNum1(e.target.value)} value={num1} /><br/><p>% Of</p>
            
           
            <br />
            <input type="number" onChange={(e) => setNum2(e.target.value)} value={num2} />
            <p style={{ color: "red" }}>{answer}</p>
            <div className="box-container"> {/* Container for the boxes */}
              <div className='d-flex '><p className='m-3 '>{num2}</p>
                {num1 && num2 && ( // Render red box if showRedBox is true and num1 and num2 are provided
                  <div
                    className="box" /* Apply both classes */
                    style={{ height: `${num2}vh`, width: `${num2}vw` }}
                  ></div>
                )}
                
                </div> 
                <div className='d-flex align-items-center pt-50% justify-content-center w-100%'><box-icon name='chevron-left'></box-icon><hr style={{width:'100%',backgroundColor:"red"}}/></div>
 {/* Original blue box */}

              {showRedBox && num1 && num2 && ( // Render red box if showRedBox is true and num1 and num2 are provided
                <div
                  className="box red-box" /* Apply both classes */
                  style={{ width: `${percent}vw`, height: `${num2}vh` }}
                ><div className='d-flex align-items-center pt-50% justify-content-center' style={{width:`${Math.round(percent)}vw`, color:"red"}}><box-icon name='chevron-left'></box-icon><hr style={{width:"100%",backgroundColor:"red"}}/></div><p>{Math.round(percent)}</p></div>
              )}
            </div>
            </div>)
}
            <div className='submits'>
              <button onClick={clear} className='btn btn-danger'>CLEAR</button>
              <button onClick={percentage} className='btn btn-dark'>CALCULATE</button>
            </div>
            <div className='submits'>
              <button className='btn btn-dark'>PRINT</button>
              <button className='btn btn-success' onClick={review}>PREVIEW</button>
            </div>
          </div><br/><br/>
      
{/* <Navigations/>
<Routes>
<Route path='shrink' element={< Shrinkage/>}/>
</Routes> */}
< Shrinkage/>

    </div>
  );
}

export default App;
