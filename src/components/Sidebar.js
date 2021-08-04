import React from 'react'
import "../css/Sidebar.css"
import logo from "../resources/logo.png"

const Sidebar = (props) => {
    return (
        <div id="sidebarContainer">
            <div id="sidebarLogoImageWrapper">
                <img src={logo} width="150px" height="100px"/>
                <h3 style={{color: "#1357a6"}}>Onofo</h3>
            </div>
            <div id="sidebarPlainText">
                <h2>About us</h2>
                <br/>
                <h3>
                    Onofo is a SaaS company. Our main product is AI-Powered notes taking platform and app.
                    It is used to take notes while in a meeting, class or learning online.
                    They address individuals (you can buy a personal subscription), and companies/schools
                    (you can buy subscriptions for a company/school).

                    Onofo it’s a cross platform, which means you can either use it within a browser
                    or mobile and tablet (iOS and Android).

                </h3>
            </div>
            <div>
                <button id="buttonBook" className="btn" onClick={() => props.setState(true)}>Book now</button>
            </div>
        </div>
    )
}
export default Sidebar