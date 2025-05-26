// props :- one component to anthoer data pass.
// props :- this is properties
// props :- it for read only
// class  and function
// class :- constro super , this
// props :- as parameter
// props :- data same file do not use

import React, { Component } from 'react'

class Classprops extends Component {
    constructor(props) {
        super(props);
        this.data = props
    }
    render() {
        return (
            <div className='col-md-4'>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={this.data.img} style={{ height: "250px" }} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.data.title}</h5>
                        <p className="card-text">{this.data.desc}</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        <button className='btn btn-success'>Buy now</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Classprops
