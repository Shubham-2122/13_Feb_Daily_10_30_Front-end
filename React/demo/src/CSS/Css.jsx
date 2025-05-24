import React from 'react';
import "./style.css";

function Css() {

    let interlcs = {
        background: "blue",
        color: "red"
    }

    return (
        <div>
            <h1>hello css</h1>
            {/* 1) inline
      2) internal :- not work
      3) external :- imoport and file path */}


            {/* inline css as object means key and value */}
            <h1 style={{ background: "red", color: "blue", padding: "20px" }}>Hello this inline css</h1>


            <h1 style={interlcs}>Internal css</h1>

            <h1 id='h1'>External css</h1>

        </div>
    )
}

export default Css
