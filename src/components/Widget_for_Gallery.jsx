import React, { useState, useRef, useEffect } from "react";

export default function GalleryWidget() {
    const [images, setImages] = useState([]);
    const inpRef = useRef();
    const scrollRef = useRef(null);

    // Load saved images
    useEffect(() => {
        const saved = localStorage.getItem("galleryImgs");
        if (saved) setImages(JSON.parse(saved));
    }, []);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem("galleryImgs", JSON.stringify(images));
    }, [images]);

    const onAdd = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => setImages((prev) => [...prev, reader.result]);
        reader.readAsDataURL(file);
        e.target.value = "";
    };

    // Scroll controls
    const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: -250, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: 250, behavior: "smooth" });
    };

    // Placeholder array
    const placeholders = [1, 2, 3];

    return (
        <div className="bg-[#363C43] rounded-xl p-5 sm:p-6 shadow-[4px_4px_8px_#1a1d20] relative max-w-4xl w-full mx-auto">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-3">
                {/* Icon */}
                <div className="shadow-neuInset shadow-[4px_4px_8px_#1a1d20] bg-[#2f3437] rounded-full flex items-center justify-center text-white w-7 h-7">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 9C9 5.49997 14.5 5.5 14.5 9C14.5 11.5 12 10.9999 12 13.9999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 18.01L12.01 17.9989" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </div>

                {/* Title + Actions */}
                <div className="flex flex-col sm:flex-row items-center w-full justify-between gap-3">
                    <div className="bg-[#202023] text-white px-6 py-2 rounded-[1rem] text-sm font-medium text-center w-full sm:w-auto">
                        Gallery
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                        <label className="flex items-center justify-center gap-2 px-4 py-2 text-xs rounded-full bg-[#2f3437] shadow-[4px_4px_8px_#1a1d20] cursor-pointer hover:scale-[1.02] transition">
                            + ADD IMAGE
                            <input ref={inpRef} type="file" accept="image/*" onChange={onAdd} className="hidden" />
                        </label>

                        {/* Arrow buttons hidden on small screens */}
                        <div className="hidden sm:flex gap-2">
                            <button
                                onClick={scrollLeft}
                                className="w-6 h-6 flex items-center justify-center rounded-full shadow-[4px_4px_8px_#1a1d20] hover:scale-110 transition"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#a9abae">
                                    <path d="M14 17 8 12l6-5v10z" />
                                </svg>
                            </button>
                            <button
                                onClick={scrollRight}
                                className="w-6 h-6 flex items-center justify-center rounded-full shadow-[4px_4px_8px_#1a1d20] hover:scale-110 transition"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#a9abae">
                                    <path d="m10 7 6 5-6 5V7z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gallery Section */}
            <div className="flex flex-col sm:flex-row gap-4">
                {/* Left icon */}
                <div className="flex-shrink-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="#808080" stroke="#595c61ff">
                        <rect x="4" y="3" width="6" height="6" />
                        <rect x="10" y="3" width="6" height="6" />
                        <rect x="4" y="10" width="6" height="6" />
                        <rect x="10" y="10" width="6" height="6" />
                        <rect x="4" y="17" width="6" height="6" />
                        <rect x="10" y="17" width="6" height="6" />
                    </svg>
                </div>

                {/* Scrollable Images */}
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-2"
                >
                    {(images.length === 0 ? placeholders : images).map((item, idx) => (
                        images.length === 0 ? (
                            <div
                                key={idx}
                                className="w-32 sm:w-44 h-24 sm:h-28 rounded-xl bg-gray-700/30 transform transition-transform duration-300 hover:scale-105 flex-shrink-0"
                            />
                        ) : (
                            <img
                                key={idx}
                                src={item}
                                alt={`gallery-${idx}`}
                                className="w-32 sm:w-44 h-24 sm:h-28 object-cover rounded-xl flex-shrink-0 transform transition-transform duration-300 hover:scale-105"
                            />
                        )
                    ))}
                </div>
            </div>
        </div>
    );
}
