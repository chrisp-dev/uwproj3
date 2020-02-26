import React from "react";
import { Link } from 'react-router-dom';

export default function MatchesButton(props) {

    return (
        <div>
            <button
                href="#"
                className={
                    (props.transparent ? "bg-red-700 text-gray-800 active:bg-gray-100" : "bg-red-700 text-white active:bg-red-700") +
                    " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                }
                type="button"
                style={{ transition: "all .15s ease" }}>
                <Link to="/matches">Matches</Link>
            </button>
        </div>
    );
}
