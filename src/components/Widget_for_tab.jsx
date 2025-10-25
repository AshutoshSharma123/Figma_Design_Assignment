import React, { useState, useMemo } from "react";

// Tab labels
const TABS = ["About Me", "Experiences", "Recommended"];

// Memoized TabButton to prevent unnecessary re-renders
const TabButton = React.memo(({ tab, isActive, onClick }) => {
    const tabClass = isActive
        ? "flex-1 text-center text-white text-sm font-medium py-2 rounded-[1rem] transition-all duration-300 shadow-[0_0_12px_#202023]"
        : "flex-1 text-center text-white text-sm font-medium py-2 rounded-[1rem] bg-[#18181b] transition-all duration-300 hover:bg-[#28292F] hover:shadow-[0_0_10px_#28292F]";

    return (
        <button
            className={`relative z-10 ${tabClass}`}
            onClick={onClick}
        >
            {tab}
        </button>
    );
});

export default function TabsWidget() {
    const [active, setActive] = useState(0);

    const content = useMemo(() => [
        `Hello! I'm Dave, your sales rep here from Salesforce...Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        `Worked 3 years in full-stack development.

Built scalable web applications using React and Node.js.

Led a team of 5 developers.

Improved app performance by 30%.

Collaborated with clients for feature planning.

Implemented CI/CD pipelines.`,
        `Collaborate with Person A for UI/UX design improvements.
- Person B for backend optimizations and API integrations.
- Person C for testing and quality assurance.
- Person D for project management and planning.
- Person E for mentoring junior developers and team guidance.
`,
    ], []);

    return (
        <div className="bg-[#363C43] rounded-xl shadow-[4px_4px_8px_#1a1d20] p-3 max-w-4xl w-full mx-auto">
            {/* Top section: icon + tabs */}
            <div className="flex  justify-between mb-3 gap-0">
                {/* Left icon */}
                <div className="shadow-neuInset   rounded-full flex  justify-center text-white w-9 h-9">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"


                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white shadow-[4px_4px_6px_#1a1d20,_-3px_-3px_6px_#4a4e54] rounded-full "
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
                        />
                    </svg>
                </div>

                {/* Tabs container */}
                <div className="relative flex bg-[#171717] rounded-[1.1rem] p-1 overflow-hidden flex-1">
                    {/* Sliding indicator */}
                    <span
                        className="absolute top-1 h-[calc(100%-0.5rem)] rounded-[1rem] bg-[#28292F] shadow-[0_0_15px_#28292F] transition-all duration-500 ease-in-out"
                        style={{
                            width: `${100 / TABS.length}%`,
                            left: `${(100 / TABS.length) * active}%`,
                        }}
                    ></span>

                    {/* Tab buttons */}
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
            <div className="flex gap-6  ">
                {/* Left SVG / icon */}
                <div className="flex flex-col gap-[0.1rem]  items-center justify-center">
                    <div className="flex gap-[0.1rem]">
                        <div className="w-2 h-2 bg-[#808080]"></div>
                        <div className="w-2 h-2 bg-[#808080]"></div>

                    </div>
                    <div className="flex gap-[0.1rem]">
                        <div className="w-2 h-2 bg-[#808080]"></div>
                        <div className="w-2 h-2 bg-[#808080]"></div>

                    </div>
                    <div className="flex gap-[0.1rem]">
                        <div className="w-2 h-2 bg-[#808080]"></div>
                        <div className="w-2 h-2 bg-[#808080]"></div>

                    </div>

                </div>
                {/* Content */}
                <div className="flex-1 text-lg text-textmuted max-h-64 h-40 overflow-y-auto pr-3 custom-scrollbar font-thin leading-tight">
                    {content[active]}
                </div>
            </div>
        </div>
    );
}
