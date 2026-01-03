import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../../context/UserContext";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState("");

  const [user, setUser] = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    setUserData({
      email: email,
      password: password,
    });
    // console.log(userData);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        {
          email: email.trim(),
          password: password.trim(),
        }
      );
      if (response.status === 200) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem("token", data.token);
        navigate("/home");
      }
    } catch (error) {
      console.error(error);
    }

    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-16 mb-6" src="/uber-logo.png" alt="logo" />
        <form onSubmit={(e) => submitHandler(e)}>
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
        <Link
          to="/captain-login"
          className="bg-[#10b461] flex items-center justify-center text-white font-semibold rounded border px-4 py-2 mb-5 w-full text-lg placeholder:text-sm"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
