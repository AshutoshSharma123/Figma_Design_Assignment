
import React, { useState } from "react";

// Tab labels
const TABS = ["About Me", "Experiences", "Recommended"];

// Memoized TabButton to prevent unnecessary re-renders
const TabButton = React.memo(({ tab, isActive, onClick }) => {
    const tabClass = isActive
        ? "bg-[#28292F] shadow-[6px_6px_22px_#202023,_6px_6px_20px_#202023] text-white px-6 py-2 rounded-[1rem] text-sm font-medium transition-all duration-300"
        : "hover:bg-[#202023] text-sm px-6 py-2 rounded-[1rem] font-medium hover:shadow-[4px_4px_8px_#1a1d20] hover:transition-all hover:duration-300 hover:ease-in-out";

    return (
        <button className={tabClass} onClick={onClick}>
            {tab}
        </button>
    );
});

export default function TabsWidget() {
    const [active, setActive] = useState(0);

    const content = [
        `Hello! I'm Dave, your sales rep here from Salesforce...Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        `Experience content: Worked X years at Y...`,
        `Recommended: Person A, Person B...`,
    ];

    return (
        <div className="bg-[#363C43] rounded-xl shadow-[4px_4px_8px_#1a1d20] p-5 shadow-neuLight relative max-w-4xl w-full mx-auto">
            {/* Top section: icon + tabs */}
            <div className="flex items-center justify-between mb-4 gap-3">
                {/* Left icon */}
                <div className="shadow-neuInset shadow-[4px_4px_8px_#1a1d20] bg-[#2f3437] rounded-full flex items-center justify-center text-white w-7 h-7">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white"
                    >
                        <path
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M9 9C9 5.49997 14.5 5.5 14.5 9C14.5 11.5 12 10.9999 12 13.9999"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M12 18.01L12.01 17.9989"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                {/* Tabs */}
                <div className="flex justify-around gap-1 bg-[#171717] rounded-[1.1rem] p-1 flex-1">
                    {TABS.map((tab, index) => (
                        <TabButton
                            key={tab}
                            tab={tab}
                            isActive={index === active}
                            onClick={() => setActive(index)}
                        />
                    ))}
                </div>
            </div>

            {/* Bottom section: icon + content */}
            <div className="flex gap-4">
                {/* Left SVG / icon */}
                <div className="flex-shrink-0 flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="#808080"
                        stroke="#595c61ff"
                    >
                        <rect x="4" y="3" width="6" height="6" />
                        <rect x="10" y="3" width="6" height="6" />
                        <rect x="4" y="10" width="6" height="6" />
                        <rect x="10" y="10" width="6" height="6" />
                        <rect x="4" y="17" width="6" height="6" />
                        <rect x="10" y="17" width="6" height="6" />
                    </svg>
                </div>

                {/* Content */}
                <div className="flex-1 text-lg text-textmuted leading-[-3] max-h-64 h-40 overflow-y-auto pr-3 custom-scrollbar">
                    {content[active]}
                </div>
            </div>
        </div>
    );
}
