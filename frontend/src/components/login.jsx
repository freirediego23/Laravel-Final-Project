import React from "react";

function login() {
  return (
    <div>
      <h1 className=" text-center">Login site</h1>
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
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default login;
