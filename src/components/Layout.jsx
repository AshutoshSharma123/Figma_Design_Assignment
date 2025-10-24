import React from "react";

export default function Layout({ children }) {
    return (
        <div className="min-h-screen flex items-start justify-center bg-[#1F2327] p-8">
            <div className="w-full max-w-screen-lg grid md:grid-cols-[1fr,560px] gap-6">
                <div /> {/* left half intentionally empty */}
                <div className="space-y-6">
                    {children}
                </div>
            </div>
        </div>
    );
}
