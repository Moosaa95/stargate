import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import React from "react";

export default async function ({
    children
} : {children:React.ReactNode}){

    return (
        <div>
            <Navbar />
            <main className="relative overflow-hidden bg-gradient-to-b from-white to-gray-100">
            {children}
            </main>
            {/* <Footer /> */}
        </div>
    )
}

