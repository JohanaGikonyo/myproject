import { useState } from "react";

function Shrinkage() {
  // const { names, option } = props; 
  const [W1, setW1] = useState(20);
  const [L1, setL1] = useState(30);
  const [W2, setW2] = useState('');
  const [L2, setL2] = useState('');
  const [name, setName]=useState('')
  
  const [option, setOption]=useState()
  
  const [percent, setPercent] = useState('');
  const [showRedBox, setShowRedBox] = useState(false);

  const percentage = () => {

    setPercent(<div><p>AW-W={Math.round(((W2 - W1) / W1) * 100)}%</p>
      <p>AW-L={Math.round(((L2 - L1) / L1) * 100)}%</p>
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
  const handleChange = (event) => {
    setOption(event.target.value);
  };

  const review = () => {
    setShowRedBox(true); // Show red box when "PREVIEW" button is clicked
  };
  
  return (
    <div className='cal2'>
      <div className='select1'>
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
          </div>
      {
          showRedBox?
          <div className="reviews">
            
            <div>
              <p>Fabric Name:<p style={{color:"red"}}>{name}</p></p>
              <p>Fabric Wash Used:<p style={{color:"red"}}>{option}</p></p>
            </div>
            <div>
              <p>BW Square Width:{W1}</p>
              <p style={{color:"red"}}>AW Square Width:{W2}</p>
              <p>BW Square Length:{L1}</p>
              <p style={{color:"red"}}>AW Square Length:{L2}</p>
            </div>
            <div className=""><p>Fabric Shrinkage:<p style={{color:"red"}}>{percent}</p></p></div>
          </div>
          
          :
          <>
  
        <div >
        
          <div className="opt">
            <div className="bw">
              <div>
                <label htmlFor="">BW Square Width</label><br />
                <input type="number" onChange={(e) => { setW1(e.target.value) }} value={W1} />
              </div>
              <div >
                <label htmlFor="">BW Square Length</label><br />
                <input type="number" onChange={(e) => { setL1(e.target.value) }} value={L1} />
              </div>
            </div>
            <div className="aw">
              <div>
                <label htmlFor="">AW Square Width</label><br />
                <input type="number" onChange={(e) => { setW2(e.target.value) }} value={W2} />
              </div>
              <div>
                <label htmlFor="">AW Square Length</label><br />
                <input type="number" onChange={(e) => { setL2(e.target.value) }} value={L2} />
              </div>
            </div>
          </div>
        </div>
        </>
        }
      
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
      
        
        <div >
          {showRedBox && W1 && L1 && ( // Render red box if showRedBox is true and num1 and num2 are provided
            <div className="vrs">
              <div
                className="box red-box" /* Apply both classes */
                style={{ width: `${L2}vh`, height: `${W2}vh`, bottom: "0px" }}
              >

                <div className='d-flex align-items-center pt-50% ' ><box-icon name='chevron-left'></box-icon><hr style={{ width: `${W2}vw`, backgroundColor: "red" }} /></div>
                {/* <div className='d-block align-items-center tp-0%' ><box-icon name='chevron-up'></box-icon><hr style={{ height: `${L2}vh`, backgroundColor: "red" , width:"2px"}} /></div>
                 */}
              </div>
           
            </div>
          )}
        </div>


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

  )
}

export default Shrinkage