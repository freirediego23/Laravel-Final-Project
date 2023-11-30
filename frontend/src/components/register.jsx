import React from "react";

function register() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <h1 className=" text-center">Sign Up</h1>
      <div className="flex justify-center align-middle mt-auto mb-auto">
        <form action="">
          <label htmlFor="usuario">Usuario</label>
          <br />
          <input type="text" name="usuario" />
          <br />
          <label htmlFor="usuario">Password</label>
          <br />
          <input type="text" name="clave" />
          <br />
          <label htmlFor="usuario">Habilitado</label>
          <br />
          <select name="" id="" value={selectedOption} onChange={handleChange}>
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default register;
