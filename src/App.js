import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  function handleClick(e) {
    setValue(value + e.target.value);
  }

  return (
    <div className="container">
      <div className="calculator">
        <form>
          <div className="display">
            <input type="text" value={value} />
          </div>
          <div>
            <input
              type="button"
              value="AC"
              className="btn-ac"
              onClick={() => setValue("")}
            />
            <input
              type="button"
              value="DE"
              className="btn-blue"
              onClick={(e) => setValue(value.slice(0, -1))}
            />
            <input
              type="button"
              value="."
              className="btn-blue"
              onClick={handleClick}
            />
            <input
              type="button"
              value="/"
              className="btn-blue"
              onClick={handleClick}
            />
          </div>
          <div>
            <input type="button" value="7" onClick={handleClick} />
            <input type="button" value="8" onClick={handleClick} />
            <input type="button" value="9" onClick={handleClick} />
            <input
              type="button"
              value="*"
              className="btn-blue"
              onClick={handleClick}
            />
          </div>
          <div>
            <input type="button" value="4" onClick={handleClick} />
            <input type="button" value="5" onClick={handleClick} />
            <input type="button" value="6" onClick={handleClick} />
            <input
              type="button"
              value="+"
              className="btn-blue"
              onClick={handleClick}
            />
          </div>
          <div>
            <input type="button" value="1" onClick={handleClick} />
            <input type="button" value="2" onClick={handleClick} />
            <input type="button" value="3" onClick={handleClick} />
            <input
              type="button"
              value="-"
              className="btn-blue"
              onClick={handleClick}
            />
          </div>
          <div>
            <input type="button" value="00" onClick={handleClick} />
            <input type="button" value="0" onClick={handleClick} />
            <input
              type="button"
              value="="
              className="equal btn-blue"
              onClick={() => setValue(eval(value))}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
