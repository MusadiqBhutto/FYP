import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch,  useSelector } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice.js";
import OAuth from "../components/OAuth.jsx";

const SignIn = () => {

  const [formData, setFormData] = useState({});  
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {  
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);

      if (data.success == false) {
        dispatch(signInFailure(data.message));
        return;
      }

      dispatch(signInSuccess(data));
      navigate("/");
      
    } catch (error) {
      dispatch(signInFailure(error.message));
    }

  };

  return (
    <section className="h-screen">
      <div className="container h-full px-6 py-24">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="/assets/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>
    <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}        
        />
        <button disabled={loading} className="bg-[#1E3A8A] shadow-xl text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          {loading ? "Loading..." : "Sign In"}
        </button>
        <OAuth />
      </form>

      <div className="flex gap-2 mt-5">
        <p>Dont have an account?</p>
        <Link to={"/sign-up"}>
        <span className="text-[#3B71CA]">Sign Up</span>
        </Link>
      </div>
      {error && <p className="text-red-500 m">{error}</p>}
    </div>
    </div>
    </div>
    </section>
  );
};

export default SignIn;
