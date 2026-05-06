import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const DefaultLayout = (): React.ReactElement => {
    return (
        <>
            <Header/>
                <main className="min-h-screen">
                    <Outlet />
                </main>
            <Footer/>
        </>
    );
}

export default DefaultLayout;