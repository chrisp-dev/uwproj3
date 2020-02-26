import React from "react";

export default function OptionSwipe({ user, handleUserSwipe }) {
  console.log("woop woop woop ", user);
  return (
    <>
      <div className="w-full h-full mx-auto">
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-full py-3 px-3">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div>
                <img src={user.ImageUrl || "silhouette-guitarist.jpg"} alt="person"></img>
                <div className="flex justify-end">
                  <svg className="h-6 w-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <p className="uppercase tracking-wide text-sm font-bold text-gray-700">{user.firstName}</p>
                <p className="text-xl text-gray-900">
                  <i className="fa fa-map-marker mr-4 text-grey-dark text-2xl"></i>
                  {user.zipcode}
                </p>
              </div>
              <div className="p-4">
                <p className="text-gray-500">
                  Tons of cool information about me. If I could talk about one thing only I would talk about me. Always. I know nothing.
                </p>
              </div>
              <br></br>
              <div className="flex">
                <button
                  className="flex-1 rounded-full border-2 border-grey font-semibold text-grey-dark px-4 py-2 bg-transparent hover:bg-red-700 text-red-700 hover:text-white"
                  onClick={() => handleUserSwipe(false)}
                >
                  Ignore<i className="fa fa-times ml-4 text-grey-dark text-2xl"></i>{" "}
                </button>
                <button
                  className="flex-1 rounded-full border-2 border-grey font-semibold text-grey-dark px-4 py-2 bg-transparent hover:bg-green-500 text-green-500 hover:text-white"
                  onClick={() => handleUserSwipe(true)}
                >
                  Connect<i className="fa fa-check ml-4 text-grey-dark text-2xl"></i>
                </button>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
