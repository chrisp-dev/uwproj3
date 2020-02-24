import React from "react";

export default function OptionSwipe() {
  return (
    <>
                           
      <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center min-h-screen">
              <div className="max-w-sm w-full sm:w-1/2 lg:w-1/3 py-6 px-3">
                  <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                      <div className="bg-cover bg-center h-56 p-4" style={{backgroundImage:"url('https://i.pinimg.com/originals/a8/7d/5f/a87d5f319de7634f3080961617568670.jpg')"}}>
                          <div className="flex justify-end">
                              <svg className="h-6 w-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                  <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
                                  </svg>
                                  </div>
                                  </div>
                                  <div className="p-4">
                                      <p className="uppercase tracking-wide text-sm font-bold text-gray-700">Your Name</p>
                                      <p className="text-xl text-gray-900"><i class="fa fa-map-marker mr-4 text-grey-dark text-2xl"></i>Location</p>
                                      <p className="text-gray-700">2 Miles Away</p>
                                      </div>
                                      <div className="p-4">
                                          <p className="text-gray-500">Tons of cool information about me. If I could talk about one thing only I would talk about me. Always. I know nothing.</p>
                                          </div>
                                          <br></br>
                                          <div class="flex">
                                              <button class="flex-1 rounded-full border-2 border-grey font-semibold text-grey-dark px-4 py-2 bg-transparent hover:bg-red-700 text-red-700 hover:text-white">Ignore<i class="fa fa-times ml-4 text-grey-dark text-2xl"></i> </button>
                                              <button class="flex-1 rounded-full border-2 border-grey font-semibold text-grey-dark px-4 py-2 bg-transparent hover:bg-green-500 text-green-500 hover:text-white">Connect<i class="fa fa-check ml-4 text-grey-dark text-2xl"></i></button>
                                              </div>
                                              <br/>
                        </div>
                    </div>
                </div>
            </div>
        </>
  );
}
