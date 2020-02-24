import React from "react";
import axios from 'axios';

export default function ProfileCard() {

  // var submitBtn = document.getElementById("submitBtn");

  // submitBtn.onclick = function () {



  function uploadImage() {
      var imgURL;

      const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/delw6elgw/upload"
      const CLOUDINARY_UPLOAD_PRESET = "r6mprs9r"
      var fileUpload = document.getElementById("file-upload");
      fileUpload.onclick = function (event) {
        var file = event.target.files;
        var formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
        axios({
          url: CLOUDINARY_URL,
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: formData
        }).then(function (res) {
          // console.log(res.data.url)
          imgURL = res.data.url;
          console.log(imgURL)
          alert("your image has been uploaded!")
        }).catch(function (err) {
          console.error(err)
        })
      }
    }


  return (
    <>
      <section className="relative py-16 bg-black" style={{ backgroundImage: "url('https://i.pinimg.com/originals/b3/71/b3/b371b32d4e77f5d45e3661284360d168.gif')" }}>
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    <img
                      alt="..."
                      src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e3041c48-1d9d-4125-99e5-20fe0640a4db/d355wtj-195d9a65-6cb9-4a59-9ceb-82bab4419d56.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2UzMDQxYzQ4LTFkOWQtNDEyNS05OWU1LTIwZmUwNjQwYTRkYlwvZDM1NXd0ai0xOTVkOWE2NS02Y2I5LTRhNTktOWNlYi04MmJhYjQ0MTlkNTYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.p33aXa5XWxtx_4nDFlWPVPatgJL1lOsM4bFg53Rn3iE"
                      className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                      style={{ maxWidth: "150px" }}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <button
                      className="bg-red-700 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                    >
                      Start Swiping
                      </button>
                    <button
                      className="bg-red-700 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={uploadImage}>
                      <input type="file"></input>
                      {/* Select an Image */}
                      </button>
                      <button
                      className="bg-red-700 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                      id='file-upload'
                      htmlFor='file-upload'>Submit</button>
                    {/* <label class="file-upload-container btn btn-reverse" for="file-upload">
                      <input id="file-upload" type="file" style={{ transition: "all .15s ease" }}></input>
                      Select an Image
                    </label> */}
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        22
                        </span>
                      <span className="text-sm text-gray-500">Matches</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        10
                        </span>
                      <span className="text-sm text-gray-500">Photos</span>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        89
                        </span>
                      <span className="text-sm text-gray-500">Messages</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <h3 class="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                  Some Guy
                  </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                  Seattle, Washington
                  </div>
                <div className="mb-2 text-gray-700 mt-10">
                  <i className="fas fa-briefcase mr-2 text-lg text-gray-800"></i>
                  Bass Guitarist - 10 years experience
                  </div>
                <div className="mb-2 text-gray-700">
                  <i className="fas fa-university mr-2 text-lg text-gray-800"></i>
                  Lead Singer - 10 years experience
                  </div>
              </div>
              <div className="mt-10 py-10 border-t border-gray-800 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p class="mb-4 text-lg leading-relaxed text-gray-800">
                      I play multiple instruments and currently I am searching for people to create a band. Looking for someone to play drums especially. I enjoy all music genres.
                      </p>
                    <a
                      href="#pablo"
                      className="font-normal text-red-700"
                      onClick={e => e.preventDefault()}
                    >
                      Edit
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};