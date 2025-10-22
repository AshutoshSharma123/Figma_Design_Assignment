import React, { useState } from "react";

// Tab labels
const TABS = ["About Me", "Experiences", "Recommended"];

// Memoized TabButton to prevent unnecessary re-renders
const TabButton = React.memo(({ tab, isActive, onClick }) => {
    const tabClass = isActive
        ? "bg-[#1b1e20] shadow-neuInset text-white px-6 py-2 rounded-full text-sm font-medium transition-all"
        : "text-textmuted px-6 py-2 rounded-full text-sm font-medium transition-all";

    return (
        <button className={tabClass} onClick={onClick}>
            {tab}
        </button>
    );
});

export default function TabsWidget() {
    const [active, setActive] = useState(0);

    const content = [
        `Hello! I'm Dave, your sales rep here from Salesforce...`,
        `Experience content: Worked X years at Y...`,
        `Recommended: Person A, Person B...`
    ];

    return (
        <div className="bg-card rounded-xl p-6 shadow-neuLight relative">
            {/* Tab pills */}
            <div className="flex gap-4 bg-accent rounded-full p-2 w-full max-w-2xl">
                {TABS.map((tab, index) => (
                    <TabButton
                        key={tab}
                        tab={tab}
                        isActive={index === active}
                        onClick={() => setActive(index)}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="mt-6 text-sm text-textmuted leading-7 max-h-44 overflow-auto pr-3">
                {content[active]}
            </div>
        </div>
    );
}
