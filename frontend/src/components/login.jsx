import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import axios from "axios";

function login() {
  // const [credentials, setCredentials] = useState({
  //   usuario: "",
  //   clave: "",
  // });

  // const handleChange = (e) => {
  //   setCredentials({
  //     ...credentials,
  //     [e.target.name]: e.target.value,
  //   });
  // };

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
          <button
            className="p-2 text-white bg-blue-500 rounded-sm"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
      <div className="text-center mt-3">
        <p>
          Not an user? Sign up{" "}
          <a className="text-blue-500" href="/register">
            Here
          </a>
        </p>
      </div>
    </div>
  );
}

export default login;
