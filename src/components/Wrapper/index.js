import React from "react";


function Wrapper(props) {
    return <div className="wrapper h-full">{props.children}</div>;
}
export default Wrapper;