// jsx :- javscript syntax xml /etensioble
// js vs jsx :- litile bit fast 0.1s
// jsx:- Html data retrun writen amd read
// veribale jsx :- javscript html read 
// jsx :-  {js allow}
// <></> :- fregment

import React from "react";

function Hello(){

    // console.log("hello");

    let name = "Uttam"
    // console.log(name)

    let list = <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Help</li>
    </ul>

    let perosn = {
        name :"Het patel",
        age : 24,
        course : "Front-end"
    }
    console.log(perosn)


    return(
        <>
    
            <h1>Hello this jsx component</h1>
            <h1>Hello {name}</h1>

            <h2>hello sum {5+10}</h2>
            
            {
                list
            }

            <h1>hello name {perosn.name}</h1>
            <h2>hello Age {perosn.age}</h2>
            <h3>hello course {perosn.course}</h3>

        </>
    )
}
export default Hello;