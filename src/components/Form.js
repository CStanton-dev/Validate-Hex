import { useState } from "react";
import validateHex from "./ValidateHex";
import "./styles/Form.module.css";

export default function Form() {
  const [hex, setHex] = useState("");
  const validation_ID = document.getElementById("validation");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const formValidation = validateHex(hex);
    if (formValidation === true) {
      validation_ID.innerHTML = "Valid Hex Code!";
      validation_ID.setAttribute("data-result", "valid");
    } else {
      validation_ID.innerHTML = "Invalid Hex Code...";
      validation_ID.setAttribute("data-result", "invalid");
    }

    console.log(validation_ID.getAttribute("data-result"));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="hex-code"
          value={hex}
          onChange={(e) => setHex(e.target.value)}
          placeholder="Enter a hexidecimal..."
          required
        />
        <input type="submit" name="submit" value="Validate Hex" />
      </form>
      <p id="validation"></p>
    </div>
  );
}
