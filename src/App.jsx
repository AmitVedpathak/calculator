import { useState } from "react";
import "./App.css";
import { evaluate } from "mathjs";

function App() {
  const [value,setValue] = useState('')

  function calculate() {
    try {
      const result = evaluate(value)
      setValue(result)
    } catch (error) {
      setValue('Error')
      setTimeout(() => {
        setValue('')
      }, 1000);
    }
  }

  return (
    <>
      <div className="container">
        <div className="calculator">
          <form action="">
            <h1 className="heading">Calculator</h1>
            <div className="display">
              <input type="text" value={value} readOnly/>
            </div>
            <div>
              <input type="button" value="AC" onClick={()=>setValue("")}/>
              <input type="button" value="DE" onClick={()=>setValue(value.slice(0,-1))}/>
              <input type="button" value="." onClick={(e)=> setValue(value + e.target.value)}/>
              <input type="button" value="/" onClick={(e)=> setValue(value + e.target.value)}/>
            </div>
            <div>
              <input type="button" value="7" onClick={(e)=> setValue(value + e.target.value)}/>
              <input type="button" value="8" onClick={(e)=> setValue(value + e.target.value)}/>
              <input type="button" value="9" onClick={(e)=> setValue(value + e.target.value)}/>
              <input type="button" value="*" onClick={(e)=> setValue(value + e.target.value)}/>
            </div>
            <div>
              <input type="button" value="4" onClick={(e)=> setValue(value + e.target.value)}/>
              <input type="button" value="5" onClick={(e)=> setValue(value + e.target.value)}/>
              <input type="button" value="6" onClick={(e)=> setValue(value + e.target.value)}/>
              <input type="button" value="+" onClick={(e)=> setValue(value + e.target.value)}/>
            </div>
            <div>
              <input type="button" value="1" onClick={(e)=> setValue(value + e.target.value)}/>
              <input type="button" value="2" onClick={(e)=> setValue(value + e.target.value)}/>
              <input type="button" value="3" onClick={(e)=> setValue(value + e.target.value)}/>
              <input type="button" value="-" onClick={(e)=> setValue(value + e.target.value)}/>
            </div>
            <div>
              <input type="button" value="00" onClick={(e)=> setValue(value + e.target.value)}/>
              <input type="button" value="0" onClick={(e)=> setValue(value + e.target.value)}/>
              <input type="button" value="=" className="equal" onClick={calculate}/>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
