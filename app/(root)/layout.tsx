import FooterComponent from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import React from "react";

export default function Layout({
    children
} : {children:React.ReactNode}) {

    return (
        <div className="flex flex-col justify-between min-h-screen">  
            <Navbar />
            <main className="flex-grow">  
                <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-100">
                    {children}
                </div>
            </main>
            <FooterComponent />
        </div>
    );
}
