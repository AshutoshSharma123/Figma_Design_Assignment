import React from "react";

export default function Layout({ children }) {
    return (
        <div className="min-h-screen flex items-start justify-center bg-[#1F2327] p-4 sm:p-6 md:p-8">
            <div className="w-full max-w-screen-lg grid gap-6 md:grid-cols-[1fr,560px]">
                {/* Left sidebar / empty column on large screens */}
                <div className="hidden md:flex flex-col items-center justify-start space-y-6">
                    {/* You can add profile card or links here */}
                </div>

                {/* Right widgets column */}
                <div className="space-y-6 w-full">
                    {children}
                </div>
            </div>
        </div>
    );
}
