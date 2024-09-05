import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/home";
import { AddContact } from "./views/AddContact";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import injectContext from "./store/appContext"; 

const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div className="d-flex flex-column h-100">
            <BrowserRouter basename={basename}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add-contact" element={<AddContact />} />
                    <Route path="*" element={<h1>Not found!</h1>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
