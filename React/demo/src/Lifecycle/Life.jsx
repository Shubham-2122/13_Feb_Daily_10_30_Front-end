import React, { Component } from 'react'
import Headers from '../layout/Comana/Headers'

class Life extends Component {
    constructor(){
        super();
        this.state = {
            name : "Manav"
        }
    }
    // https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
    // mouting initial phase
    componentDidMount(){
        console.log("Mouting Phase")
    }

    componentDidCatch(){
        console.log("Error updated phase")
    }

    componentWillUpdate(){
        console.log("are your sure")
    }

    // updated phase
    componentDidUpdate(){
        console.log("hello updated..!")
    }

    componentWillUnmount(){
        console.log("umouting phase..!")
    }



    render() {
        
        return (
            <div>
                <Headers />
                {/* 3 phase */}
                {/* 1) mouting  :- initial phase 
                2) updated :- data update data update ,state,props 
                3) unmouting :- empty data null 
          */}

                <h1>Hello this LifeCycle method</h1>
                <h1>{this.state.name}</h1>
                <button onClick={()=>this.setState({name:"Helloo"})}>Chnage name</button>
            </div>
        )
    }
}

export default Life
