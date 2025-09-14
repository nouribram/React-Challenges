import React, { useState } from "react";
import "./App.css";

function App() {
  //state to store temperatures
  const [temp, setTemp] = useState({
    celsius: "",
    fahrenheit: "",
    kelvin: ""
  });

  //fuction to handle input changes
  const handleChange = (e) => {
     const {name, value} = e.target;

     //reset all values
     if (value === "") {
      setTemp({ celsius: "", fahrenheit: "", kelvin: ""});
      return;
     }
      
     //convert input value to a number
     const num = parseFloat(value);

     //calculate other temperature based on which input is changed
     switch (name) {
      case "celsius":
        setTemp({
          celsius: value,
          fahrenheit: (num * 9) / 5 + 32,
          kelvin: num + 273.15
        });
        break;

        case "fahrenheit":
          setTemp({
            celsius: ((num - 32) * 5) / 9,
            fahrenheit: value,
            kelvin: ((num - 32) * 5) / 9 + 273.15
          });
          break;

          case "kelvin":
            setTemp({
              celsius: num - 273.15,
              fahrenheit: ((num - 273.15) * 9) / 5 + 32,
              kelvin: value
            });
            break;

            default:
              break;
     }
  };

  return(
    <div className="container">
       <h1>Temperature Converter</h1>

       <div className="input-group">
        <label>Celsius (°C)</label>
        <input
         type="number"
         name="celsius"
         value={temp.celsius}
         onChange={handleChange}
         />
       </div>

       <div className="input-group">
         <label>Fahrenheit (°F)</label>
         <input
          type="number"
          name="fahrenheit"
          value={temp.fahrenheit}
          onChange={handleChange}
         />
       </div>

       <div className="input-group">
         <label>Kelvin (K)</label>
         <input 
           type="number"
           name="kelvin"
           value={temp.kelvin}
           onChange={handleChange}
         />
       </div>
    </div>
  );
} 

export default App;