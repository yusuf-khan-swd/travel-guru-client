import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import googleIcon from "../../assets/icons/google.png";
import facebookIcon from "../../assets/icons/fb.png";

const Register = () => {
  const [error, setError] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const { providerLogIn, createUser, setUserData, emailVerification } =
    useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const firstName = form.firstName.value.replace(/\s\s+/g, " ");
    const lastName = form.lastName.value.replace(/\s\s+/g, " ");
    const name = firstName + " " + lastName;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password !== confirm) {
      return setError(`Password did not matched`);
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");

        setUserData({
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            emailVerification().then(() => {
              toast.success(
                "Registration is successFull. Please Verify your email. "
              );
            });
          })
          .catch((error) => setError(error.message));
      })
      .catch((error) => setError(error.message));
  };

  const handleGoogleSignIn = () => {
    providerLogIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error("error: ", error));
  };

  const handleFacebookSignIn = () => {
    providerLogIn(facebookProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Facebook Sign In Success!");
        setError("");
      })
      .catch((error) => {
        console.error("error: ", error);
        setError(error.message);
      });
  };

  return (
    <div className=" bg-gray-900 bg-opacity-75">
      <div className="px-4 py-16 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="w-full mx-auto max-w-xl xl:px-8 xl:w-5/12">
          <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
            <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
              Please Register
            </h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-1 sm:mb-2">
                <label
                  htmlFor="firstName"
                  className="inline-block mb-1 font-medium"
                >
                  First Name
                </label>
                <input
                  placeholder="John"
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  id="firstName"
                  name="firstName"
                />
              </div>
              <div className="mb-1 sm:mb-2">
                <label
                  htmlFor="lastName"
                  className="inline-block mb-1 font-medium"
                >
                  Last Name
                </label>
                <input
                  placeholder="Doe"
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  id="lastName"
                  name="lastName"
                />
              </div>
              <div className="mb-1 sm:mb-2">
                <label
                  htmlFor="photoURL"
                  className="inline-block mb-1 font-medium"
                >
                  Photo URL
                </label>
                <input
                  placeholder="photoURL"
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  id="photoURL"
                  name="photoURL"
                />
              </div>
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
                <label
                  htmlFor="confirm"
                  className="inline-block mb-1 font-medium"
                >
                  Confirm Password
                </label>
                <input
                  placeholder="Password"
                  required
                  type={hidePassword ? "password" : "text"}
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  id="confirm"
                  name="confirm"
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
                  Register
                </button>
              </div>
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-orange-400 underline">
                  Login
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

export default Register;
