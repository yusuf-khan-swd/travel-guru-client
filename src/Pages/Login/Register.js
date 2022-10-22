import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState('');

  const { providerLogIn, createUser } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const handleFormSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(name, email, password, confirm);

    if (password !== confirm) {
      return setError(`Password did not matched`);
    }

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => console.error('error: ', error))

  };

  const handleGoogleSignIn = () => {
    providerLogIn(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.error('error: ', error))
  };
  return (
    <div className=" bg-gray-900 bg-opacity-75">
      <div className="px-4 py-16 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="w-full mx-auto max-w-xl xl:px-8 xl:w-5/12">
          <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
            <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
              Sign up for updates
            </h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-1 sm:mb-2">
                <label
                  htmlFor="firstName"
                  className="inline-block mb-1 font-medium"
                >
                  Your name
                </label>
                <input
                  placeholder="John Doe"
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  id="name"
                  name="name"
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
                  type="password"
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
                  type="password"
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  id="confirm"
                  name="confirm"
                />
              </div>
              <div className="mb-1 sm:mb-2">
                <input type="checkbox" /> <span>Show Password</span>
              </div>
              <div className="mt-4 mb-2 sm:mb-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-purple-900 focus:shadow-outline focus:outline-none"
                >
                  Register
                </button>
              </div>
              <p className="text-xs text-red-600 sm:text-sm">
                {error}
              </p>
            </form>
          </div>
        </div>
        <button onClick={handleGoogleSignIn}>Google Sign in</button>
      </div>
    </div>
  );
};

export default Register;
