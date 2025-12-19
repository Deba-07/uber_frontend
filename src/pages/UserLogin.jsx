import { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    setUserData({
      email: email,
      password: password,
    });
    console.log(userData);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-16 mb-6" src="/uber-logo.png" alt="logo" />
        <form onClick={(e) => submitHandler(e)}>
          <h3 className="text-lg font-medium mb-2">What's Your Email</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            placeholder="email@example.com"
            className="bg-[#eeeeee] rounded border px-4 py-2 mb-7 w-full text-lg placeholder:text-sm"
          />
          <h3 className="text-lg font-medium mb-2">Enter Your Password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            placeholder="password"
            className="bg-[#eeeeee] rounded border px-4 py-2 mb-7 w-full text-lg placeholder:text-sm"
          />
          <button className="bg-[#111] text-white font-semibold rounded border px-4 py-2 mb-7 w-full text-lg placeholder:text-sm">
            Login
          </button>
        </form>
        <p className="text-center">
          New here?{" "}
          <Link to="/signup" className="text-blue-500">
            Create new account
          </Link>
        </p>
      </div>
      <div>
        <Link to='/captain-login' className="bg-[#10b461] flex items-center justify-center text-white font-semibold rounded border px-4 py-2 mb-5 w-full text-lg placeholder:text-sm">
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
