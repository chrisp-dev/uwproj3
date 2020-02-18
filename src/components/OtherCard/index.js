import React from "react";

export default function OtherCard() {
  return (
    <>
<div className="font-sans leading-tight min-h-screen bg-grey-lighter p-8">
  <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
    <div className="bg-cover h-40" style={{backgroundImage: "url('https://images.unsplash.com/photo-1522093537031-3ee69e6b1746?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a634781c01d2dd529412c2d1e2224ec0&auto=format&fit=crop&w=2098&q=80')"}}></div>
    <div className="border-b px-4 pb-6">
      <div className="text-center sm:text-left sm:flex mb-4">
        <img className="h-32 w-32 rounded-full border-4 border-white -mt-16 mr-4" src="https://randomuser.me/api/portraits/women/21.jpg" alt=""/>
        <div className="py-2">
          <h3 className="font-bold text-2xl mb-1">Cait Genevieve</h3>
          <div className="inline-flex text-grey-dark sm:flex items-center">
            <svg className="h-5 w-5 text-grey mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path className="heroicon-ui" d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /></svg>
            New York, NY
          </div>
        </div>
      </div>
      <div className="flex">
        <button className="flex-1 rounded-full bg-blue text-white antialiased font-bold hover:bg-blue-dark px-4 py-2 mr-2">Follow</button>
        <button className="flex-1 rounded-full border-2 border-grey font-semibold text-black px-4 py-2">Message</button>
      </div>
    </div>
    <div className="px-4 py-4">
      <div className="flex items-center text-grey-darker mb-4">
        <svg className="h-6 w-6 text-grey mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path className="heroicon-ui" d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z" /></svg>
        <span><strong className="text-black">12</strong> Followers you know</span>
      </div>
      <div className="flex">
        <div className="flex flex-row-reverse justify-end mr-2">
          <img className="border-2 border-white rounded-full h-10 w-10" src="https://randomuser.me/api/portraits/men/32.jpg" alt=""/>
          <img className="border-2 border-white rounded-full h-10 w-10 -mr-2" src="https://randomuser.me/api/portraits/women/31.jpg" alt=""/>
          <img className="border-2 border-white rounded-full h-10 w-10 -mr-2" src="https://randomuser.me/api/portraits/men/33.jpg" alt=""/>
          <img className="border-2 border-white rounded-full h-10 w-10 -mr-2" src="https://randomuser.me/api/portraits/women/32.jpg" alt=""/>
          <img className="border-2 border-white rounded-full h-10 w-10 -mr-2" src="https://randomuser.me/api/portraits/men/44.jpg" alt=""/>
          <img className="border-2 border-white rounded-full h-10 w-10 -mr-2" src="https://randomuser.me/api/portraits/women/42.jpg" alt=""/>
        </div>
        <span className="flex items-center justify-center text-sm text-grey-darker font-semibold border-2 border-grey-light rounded-full h-10 w-10">+3</span>
      </div>
    </div>
  </div>
</div>
</>
  );
} 