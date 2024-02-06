import { useState } from "react";

function Shrinkage() {

    const [W1, setW1] = useState('');
  const [L1, setL1] = useState('');
  const [W2, setW2] = useState('');
  const [L2, setL2] = useState('');
  const [percent, setPercent] = useState('');
  const [showRedBox, setShowRedBox] = useState(false);
  
  const percentage = () => {
 
          setPercent(  <div><p>AW-W={Math.round(((W2-W1)/W1)*100)}%</p>
              <p>AW-L={Math.round(((L2-L1)/L1)*100)}%</p>
              </div>)
  };

  const clear = () => {
    setW1('');
    setW2('');
    setL1('');
    setL2('');
    setPercent('');
    setShowRedBox(false); // Reset to hide red box
  };

  const review = () => {
    setShowRedBox(true); // Show red box when "PREVIEW" button is clicked
  };
  return (
    <div>
        <h1>Fabrinc Shrinkage Update</h1>
        
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

            <div >
                <p>Select calculation Type:</p>
                <select>
                    <option value="">Fabric % Increase/Decrease</option>
                </select>
                <div className="opt">
                    <div className="bw">
                <div>
                    <label htmlFor="">BW Square Width</label>
                    <input type="number" onChange={(e)=>{setW1(e.target.value)}} value={W1}/>
                </div>
                <div >
                    <label htmlFor="">BW Square Length</label>
                    <input type="number" onChange={(e)=>{setL1(e.target.value)}} value={L1}/>
                </div>
                </div>
                <div className="aw">
                <div>
                    <label htmlFor="">AW Square Width</label>
                    <input type="number" onChange={(e)=>{setW2(e.target.value)}} value={W2}/>
                </div>
                <div>
                    <label htmlFor="">AW Square Length</label>
                    <input type="number" onChange={(e)=>{setL2(e.target.value)}} value={L2}/>
                </div>
                </div>
                </div>
            </div>
            <div className="dimensions">
            {percent}
            </div>
            <div className="box-container">
                 {/* Container for the boxes */}
              <div className='d-flex '><p className='m-3'></p>
                {W1 && L1 && ( // Render red box if showRedBox is true and num1 and num2 are provided
                  <div
                    className="box" /* Apply both classes */
                    style={{ height: `${W1}vh`, width: `${L1}vh` }}
                  ></div>
                )}



              </div> {/* Original blue box */}

              {showRedBox && W1 && L1 && ( // Render red box if showRedBox is true and num1 and num2 are provided
                <div>
                <div
                  className="box red-box" /* Apply both classes */
                  style={{ width: `${L2}vh`, height: `${W2}vh` }}
                ></div>
               
                </div>
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
   
  )
}

export default Shrinkage