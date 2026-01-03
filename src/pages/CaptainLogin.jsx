import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../../context/CaptainContext";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/login`,
        {
          email: email.trim(),
          password: password.trim(),
        }
      );

      if (response.status === 200) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem("token", data.token);
        navigate("/captain-home");
      }

      setEmail("");
      setPassword("");
    } catch (error) {
      const err = error.response?.data;
    }
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-16 mb-6" src="/uber-driver.png" alt="logo" />

        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's Your Email</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email@example.com"
            className="bg-[#eeeeee] rounded border px-4 py-2 mb-7 w-full text-lg"
          />

          <h3 className="text-lg font-medium mb-2">Enter Your Password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="password"
            className="bg-[#eeeeee] rounded border px-4 py-2 mb-7 w-full text-lg"
          />

          <button
            type="submit"
            className="bg-[#10b461] text-white font-semibold rounded px-4 py-2 mb-7 w-full text-lg"
          >
            Login
          </button>
        </form>

        <p className="text-center">
          Get behind the wheel and earn{" "}
          <Link to="/captain-signup" className="text-blue-500">
            become a Captain today!
          </Link>
        </p>
      </div>

      <Link
        to="/login"
        className="bg-[#111] flex items-center justify-center text-white font-semibold rounded px-4 py-2 mb-5 w-full text-lg"
      >
        Sign in as User
      </Link>
    </div>
  );
};

export default CaptainLogin;
