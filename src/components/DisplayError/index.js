import React from "react";
import Wrapper from "../../components/Wrapper";
import AltNav from "../../components/AltNav";
import Footer from "../../components/Footer";

export default function DisplayError({ errorMessage }) {
  return (
    <div className="h-full">
      <Wrapper>
        <AltNav transparent />

        <main className="h-full">
          <section className="relative w-full h-full">
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: "url('https://cdn.hipwallpaper.com/i/71/71/XBSFfT.jpg')"
              }}
            >
              {/* <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span> */}
            </div>
            <div className="container mx-auto px-4 h-full">
              <div className="flex content-center items-center justify-center h-full">
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-black border-0">
                    <div className="rounded-t mb-0 px-6 py-6"></div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                      <div className="text-gray-500 text-center mb-3 font-bold">
                        <small>Error</small>
                        <hr className="mt-6 border-b-1 border-gray-400" />
                        <small>{errorMessage}</small>
                      </div>
                      <br></br>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Wrapper>
      <Footer />
    </div>
  );
}
