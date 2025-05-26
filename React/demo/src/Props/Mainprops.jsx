import React from 'react'
import Classprops from './Classprops'
import Funcprops from './Funcprops'

function Mainprops() {
    return (
        <div>
            <h1 className='bg-info'>Hello Props data</h1>
            <div className="container">
                <h1>Hello this Class in PRops</h1>
                <div className="row">
                    <Classprops title="Car data" desc="Hello this car1 data" img="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <Classprops title="Car data1" desc="Hello this car1 data1" img="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <Classprops title="Car data1" desc="Hello this car1 data1" img="https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <Classprops title="Car data" desc="Hello this car1 data" img="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <Classprops title="Car data1" desc="Hello this car1 data1" img="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <Classprops title="Car data1" desc="Hello this car1 data1" img="https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=600" />

                </div>
            </div>
            <div className="container">
                <h1>Hello this Function in Props</h1>
                <div className="row">
                    <Funcprops title="Car 1" desc="erhuahsduioh assdhi uashdui" img="https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <Funcprops title="Car 1" desc="erhuahsduioh assdhi uashdui" img="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=600" />
                     <Funcprops title="Car 1" desc="erhuahsduioh assdhi uashdui" img="https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=600" />
                      <Funcprops title="Car 1" desc="erhuahsduioh assdhi uashdui" img="https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <Funcprops title="Car 1" desc="erhuahsduioh assdhi uashdui" img="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=600" />
                     <Funcprops title="Car 1" desc="erhuahsduioh assdhi uashdui" img="https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=600" />
                </div>
            </div>
        </div>
    )
}

export default Mainprops
