import React from "react";

export default function Landing() {
  return (
    <>
      <main>
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "75vh"
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('https://cdn.hipwallpaper.com/i/71/71/XBSFfT.jpg')"
            }}
          >
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-6xl">Swipe Right</h1>
                  <p className="mt-4 text-sm text-gray-300">
                    By clicking Sign Up, you agree to our Terms. Learn how we process your data in our Privacy Policy and Cookie Policy.
                  </p>
                  <div className="text-center mt-6">
                    <button
                      className="bg-gray-900 text-red-700 active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                    >
                      <a href="/signup">Sign Up</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px", transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="text-black fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-black -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-gray-400 w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-700">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Find New Members</h6>
                    <p className="mt-2 mb-4 text-gray-800">Discover the next member to join your ensemble</p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-gray-400 w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-700">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Explore Interests</h6>
                    <p className="mt-2 mb-4 text-gray-800">Journey outside of your musical genre</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-gray-400 w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-700">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Rock On</h6>
                    <p className="mt-2 mb-4 text-gray-800">Enjoy doing what you love with other people who feel the same way!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className=" bg-black relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px", transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://media0.giphy.com/media/l2YWs1r7rv6U3rWA8/giphy.gif"
                />
              </div>
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://media1.giphy.com/media/9Dgf4pFMzSrTrE4Urj/giphy.gif"
                />
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="pb-20 relative block bg-black">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{
              height: "80px",
              transform: "translateZ(0)",
              backgroundImage: "url('https://i.pinimg.com/originals/b3/71/b3/b371b32d4e77f5d45e3661284360d168.gif')"
            }}
          ></div>
        </section>
      </main>
    </>
  );
}
