import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import AllProducts from "../components/AllProducts";

const Home = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch user details from localStorage
    const user = JSON.parse(localStorage.getItem("userDetails"));
    console.log(user);

    setUserName(user.name || "");
  }, []);

  const handleLogout = async () => {
    try {
      localStorage.removeItem("token");
      toast.success("Logged out successfully!");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Navbar userName={userName} handleLogout={handleLogout} />
      <HeroSection />
      <AllProducts />
      <ToastContainer />
    </div>
  );
};

export default Home;
