import React from "react"
import Navbar from "./navbar/Navbar"
import ScrollToTop from "./specialsetups/ScrollToTop"
import { Outlet } from "react-router-dom"
import Footer from "./footer/Footer"

const RootLayout = () => {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default RootLayout;