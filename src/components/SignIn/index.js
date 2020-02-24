import React, { useState } from "react";
import API from "../../utils/API";

export default function SignIn() {
  const [signup, setSignUp] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    zipcode: ""
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setSignUp({
      ...signup,
      [name]: value
    });
  };
  const handleFormSubmit = event => {
    event.preventDefault();
    API.signup(signup)
      .then(res => {
        // what to do with response data
        console.log(res.data);
        window.location = "/login";
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <main>
        <section className="relative w-full h-full">
          <div
            className="absolute top-0 w-full h-full bg-gray-900"
            style={{
              backgroundImage: "url('https://cdn.hipwallpaper.com/i/71/71/XBSFfT.jpg')",
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat"
            }}
          ></div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-black border-0">
                  <div className="rounded-t mb-0 px-6 py-6"></div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-gray-500 text-center mb-3 font-bold">
                      <h1>Create Your Account</h1>
                      <hr className="mt-6 border-b-1 border-gray-400" />
                    </div>
                    <br></br>
                    <form className="w-full max-w-lg" onSubmit={handleFormSubmit}>
                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            First Name
                          </label>
                          <input
                            onChange={handleInputChange}
                            value={signup.firstName}
                            name="firstName"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            placeholder="First"
                          />
                          <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Last Name
                          </label>
                          <input
                            onChange={handleInputChange}
                            value={signup.lastName}
                            name="lastName"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            placeholder="Last"
                          />
                        </div>
                        <div className="relative w-full mb-3">
                          <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Email
                          </label>
                          <input
                            onChange={handleInputChange}
                            value={signup.email}
                            name="email"
                            type="email"
                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                            placeholder="Email"
                            style={{ transition: "all .15s ease" }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Password
                          </label>
                          <input
                            onChange={handleInputChange}
                            value={signup.password}
                            name="password"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-password"
                            type="password"
                            placeholder="******************"
                          />
                          <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                          <div className="relative">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                              Instrument of Choice
                            </label>
                            <select
                              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-instrument"
                            >
                              <option>Guitar</option>
                              <option>Drums</option>
                              <option>Piano</option>
                              <option>Bass Guitar</option>
                              <option>Trumpet</option>
                              <option>Harmonica</option>
                              <option>Saxaphone</option>
                              <option>Violin</option>
                              <option>Vocals</option>
                              <option>Other</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                            City
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-city"
                            type="text"
                            placeholder="Seattle"
                          />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                            State
                          </label>
                          <div className="relative">
                            <select
                              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-state"
                            >
                              <option>Washington</option>
                              <option>Missouri</option>
                              <option>Texas</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                            Zip
                          </label>
                          <input
                            onChange={handleInputChange}
                            value={signup.zipcode}
                            name="zipcode"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-zip"
                            type="text"
                            placeholder="98116"
                          />
                        </div>

                        <div className="text-center center mt-6">
                          <button
                            className="center bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                            type="submit"
                            style={{ transition: "all .15s ease" }}
                          >
                            Sign Up
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
