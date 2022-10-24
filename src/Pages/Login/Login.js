import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import googleIcon from "../../assets/icons/google.png";
import facebookIcon from "../../assets/icons/fb.png";

const Login = () => {
  const [error, setError] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { providerLogIn, logIn, setLoading } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        if (user.emailVerified) {
          toast.success("Login Success!");
          navigate(from, { replace: true });
        }
        else {
          toast.error('Please verify your email.')
        }
      })
      .catch((error) => {
        console.error("error: ", error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      })
  };

  const handleGoogleSignIn = () => {
    providerLogIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        toast.success("Google Login Success!!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("error: ", error);
        setError(error.message);
      });
  };

  const handleFacebookSignIn = () => {
    providerLogIn(facebookProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        toast.success("Facebook Login Success!!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("error: ", error);
        setError(error.message);
      });
  };

  return (
    <div className=" bg-gray-900 bg-opacity-75">
      <div className="px-4 py-16 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 mx-auto">
        <div className="w-full mx-auto max-w-xl xl:px-8 xl:w-5/12">
          <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
            <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
              Please Login
            </h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-1 sm:mb-2">
                <label
                  htmlFor="email"
                  className="inline-block mb-1 font-medium"
                >
                  E-mail
                </label>
                <input
                  placeholder="john.doe@example.org"
                  required
                  type="email"
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                />
              </div>
              <div className="mb-1 sm:mb-2">
                <label
                  htmlFor="password"
                  className="inline-block mb-1 font-medium"
                >
                  Password
                </label>
                <input
                  placeholder="Password"
                  required
                  type={hidePassword ? "password" : "text"}
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  id="password"
                  name="password"
                />
              </div>
              <div className="mb-1 sm:mb-2">
                <input
                  onClick={() => setHidePassword(!hidePassword)}
                  id="show"
                  type="checkbox"
                />
                <label htmlFor="show" className="ml-1">
                  Show Password
                </label>
              </div>
              <p className="text-xs mt-3 text-red-600 sm:text-sm">{error}</p>
              <div className="mt-4 mb-2 sm:mb-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-purple-900 focus:shadow-outline focus:outline-none"
                >
                  Login
                </button>
              </div>
              <p>
                Don't have an account?{" "}
                <Link to="/register" className="text-orange-400 underline">
                  Create an account
                </Link>{" "}
              </p>
            </form>
          </div>
          <button
            onClick={handleGoogleSignIn}
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium border rounded-2xl mt-6 text-slate-300"
          >
            <img className="w-8 mr-3" src={googleIcon} alt="" />
            Continue with Google
          </button>
          <button
            onClick={handleFacebookSignIn}
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium border rounded-2xl mt-6 text-slate-300"
          >
            <img className="w-8 mr-3" src={facebookIcon} alt="" />
            Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
