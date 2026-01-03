import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainRegister = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/register`,
        captainData
      );

      if (response.status === 201) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem("token", data.token);
        navigate("/captain-home");
      }
    } catch (error) {
      console.error(error);
    }

    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-16 mb-6" src="/uber-driver.png" alt="logo" />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-base font-medium mb-2">What's Your Name</h3>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              className="bg-[#eeeeee] rounded border px-4 py-2 mb-6 w-1/2 text-base placeholder:text-sm"
            />
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              className="bg-[#eeeeee] rounded border px-4 py-2 mb-6 w-1/2 text-base placeholder:text-sm"
            />
          </div>
          <h3 className="text-base font-medium mb-2">What's Your Email</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            placeholder="email@example.com"
            className="bg-[#eeeeee] rounded border px-4 py-2 mb-6 w-full text-base placeholder:text-sm"
          />
          <h3 className="text-base font-medium mb-2">Enter Your Password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            placeholder="password"
            className="bg-[#eeeeee] rounded border px-4 py-2 mb-6 w-full text-base placeholder:text-sm"
          />
          <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
          <div className="flex gap-4 mb-7">
            <input
              required
              className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="Vehicle Color"
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value);
              }}
            />
            <input
              required
              className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="Vehicle Plate"
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value);
              }}
            />
          </div>
          <div className="flex gap-4 mb-7">
            <input
              required
              className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
              type="number"
              placeholder="Vehicle Capacity"
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value);
              }}
            />
            <select
              required
              className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value);
              }}
            >
              <option value="" disabled>
                Select Vehicle Type
              </option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>
          <button className="bg-[#111] text-white font-semibold rounded border px-4 py-2 mb-4 w-full text-lg placeholder:text-sm">
            Signup
          </button>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <Link to="/captain-login" className="text-blue-500">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[12px] leading-4">
          By proceeding, you consent to get messages, including by automated
          means, from Uber and it's affiliates to the email provided
        </p>
      </div>
    </div>
  );
};

export default CaptainRegister;
