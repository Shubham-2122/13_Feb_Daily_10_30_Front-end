import React from "react";
import Reactcard from "./Frmework/Reactcard";
import Footer from "./Frmework/Footer";
// import Css from "./CSS/Css";
// import Mainprops from "./Props/Mainprops";
// import Classcompo from "./Compoenet/Classcompo";
// import Funcompo from "./Compoenet/Funcompo";
// import Hello from "./Jsx/Hello";
// import Mainstate from "./State/Mainstate";
// import Formhadling from "./Form_hadnlig/Formhadling";
// import Formhadlingobj from "./Form_hadnlig/Formhadlingobj";
// import Useeffect from "./UseEffect/Useeffect";
// import UseTable from "./UseEffect/UseTable";
// import Table from "./UseEffect/Table";
// import UseCard from "./UseEffect/UseCard";
// import Maincontext from "./context/Maincontext";
import Navabar from "./Frmework/Navabar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./layout/pages/Home";
import About from "./layout/pages/About";
import Contact from "./layout/pages/Contact";
import About1 from "./layout/pages/About1";
import About2 from "./layout/pages/About2";
import Help from "./layout/pages/Help";
import NotFound from "./layout/pages/NotFound";
import Life from "./Lifecycle/Life";

function App() {
    return (
        <BrowserRouter>
            <div>
                {/* <h1>Hello This App </h1> */}

                {/* Component */}
                {/* <Classcompo /> */}
                {/* <Funcompo /> */}

                {/* JSX compoent */}
                {/* <Hello /> */}

                {/* <Css /> */}


                {/* Props */}
                {/* <Mainprops /> */}

                {/* state :-  */}
                {/* <Mainstate /> */}

                {/* <Formhadling /> */}
                {/* <Formhadlingobj /> */}

                {/* use effcet */}
                {/* <Useeffect /> */}
                {/* <UseTable /> */}
                {/* <Table /> */}
                {/* <UseCard /> */}

                {/* <Maincontext /> */}

                {/* fraework */}
                {/* <Navabar /> */}
                {/* <Reactcard /> */}
                {/* <Footer /> */}

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} >
                        <Route path="about1" element={<About1 />} />
                        <Route path="about2" element={<About2 />} />
                    </Route>
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/life" element={<Life />} />


                    {/* not found data  */}
                    <Route path="*" element={<NotFound />} />

                </Routes>

            </div>
        </BrowserRouter>
    )
}

export default App;