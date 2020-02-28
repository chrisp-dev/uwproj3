import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProfileCard({ user, setBio, detail, img }) {
  const [messages, setMessages] = useState([]);
  const [matches, setMatches] = useState([]);
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    API.receiveMessage(detail.id).then(res => {
      setMessages(res.data);
    });
  }, [detail.id]);

  useEffect(() => {
    API.getMatchCount().then(res => {
      console.log('matches: ', res.data[0].Count);
      setMatches(res.data[0].Count);
    });
  }, [detail.id]);

  const [image] = useState({
    imageUrl: ""
  });

  useEffect(() => {
    const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/delw6elgw/upload";
    const CLOUDINARY_UPLOAD_PRESET = "r6mprs9r";

    var fileUpload = document.getElementById("file-upload");

    fileUpload.addEventListener("change", function (event) {
      var file = event.target.files[0];
      var formData = new FormData();

      formData.append("file", file);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

      axios({
        url: CLOUDINARY_URL,
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: formData
      })
        .then(function (res) {
          //SEND THIS URL TO THE IMAGE MODEL
          API.uploadImage({
            imageUrl: res.data.url
          }).then(res => {
            console.log(res.data);
          });
          alert("your image has been uploaded!");
        })
        .catch(function (err) {
          console.error(err);
        });
    });
  }, [image]);

  const toggle = () => {
    setShowEdit(!showEdit);
  };

  const handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;

    // Updating the input's state
    setBio({
      ...detail,
      bio: value
    });
  };

  const editSaveButtons = () => {
    if (!showEdit) {
      return (
        <button onClick={() => toggle()}>
          <span className="font-normal text-red-700">Edit</span>
        </button>
      );
    } else {
      return (<button onClick={() => {
        toggle();
        API.updateBio({ bio: detail.bio }).then(console.log);
      }}><span className="font-normal text-green-700">Save</span></button>)
    }
  };

  return (
    <>
      <section className="relative h-full bg-center bg-cover" style={{ backgroundImage: "url('music_notes.gif')" }}>
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    <img
                      src={img || "silhouette-guitarist.jpg"}
                      alt="user"
                      className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                      style={{ maxWidth: "150px" }}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/3 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <Link to="/swipetest">
                      <button
                        className="bg-red-700 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Start Swiping
                      </button>
                    </Link>
                    <div className="card">
                      <label
                        className="file-upload-container bg-red-700 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        htmlFor="file-upload"
                      >
                        <input id="file-upload" type="file" name="imageURL" style={{ display: "none" }} />
                        Select an Image
                      </label>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/3 px-4 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">{matches}</span>
                      <span className="text-sm text-gray-500">Matches</span>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">{messages.length}</span>
                      <span className="text-sm text-gray-500">Messages</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">{detail.firstName}</h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>
                  {detail.zipcode}
                </div>
                {detail.Roles
                  ? detail.Roles.map((r, i) => {
                    return (
                      <div key={i} className="mb-2 text-gray-700">
                        <FontAwesomeIcon icon="briefcase" className="mr-2 text-lg text-gray-800"></FontAwesomeIcon>
                        {r.role} ({r.expertise})
                        </div>
                    );
                  })
                  : "Everybody can do something"}
              </div>
              <div className="mt-10 py-10 border-t border-gray-800 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    {!showEdit ? (
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">{detail.bio}</p>
                    ) : (
                        <textarea
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          name="bio"
                          cols="10"
                          value={detail.bio}
                          onChange={handleInputChange}
                        ></textarea>
                      )}
                    {editSaveButtons()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
