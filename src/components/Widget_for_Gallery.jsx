import React, { useState, useRef, useEffect } from "react";

export default function GalleryWidget() {
    const [images, setImages] = useState([]);
    const inpRef = useRef();
    const scrollRef = useRef(null);

    useEffect(() => {
        const saved = localStorage.getItem("galleryImgs");
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                console.log("Loaded images:", parsed);
                setImages(parsed);
            } catch (err) {
                console.error("Failed to parse saved images:", err);
            }
        }
    }, []);

    useEffect(() => {
        if (images.length) {
            localStorage.setItem("galleryImgs", JSON.stringify(images));
            console.log("Saved images:", images);
        }
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
                <div className="shadow-neuInset shadow-[4px_4px_8px_#1a1d20] bg-[#2f3437] rounded-full flex items-center justify-center text-white w-9 h-9">
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
                        />
                    </svg>
                </div>

                {/* Title + Actions */}
                <div className="flex flex-col sm:flex-row items-center w-full justify-between gap-3">
                    <div className="bg-[#202023] text-white px-6 py-2 rounded-[1rem] text-sm font-medium text-center w-full sm:w-auto">
                        Gallery
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                        <label className="flex items-center justify-center gap-2 px-4 py-2 text-[0.5rem] rounded-full bg-[#2f3437] shadow-[4px_4px_6px_#1a1d20,_-3px_-3px_10px_#4a4e54] cursor-pointer hover:scale-[1.02] transition">
                            + ADD IMAGE
                            <input ref={inpRef} type="file" accept="image/*" onChange={onAdd} className="hidden" />
                        </label>

                        {/* Arrow buttons hidden on small screens */}
                        <div className="hidden sm:flex gap-2">
                            <button
                                onClick={scrollLeft}
                                className="w-5 h-5 flex items-center justify-center rounded-full    shadow-[4px_4px_6px_#1a1d20,_-3px_-3px_6px_#4a4e54] hover:scale-110 transition"
                            >


                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                                </svg>
                            </button>
                            <button
                                onClick={scrollRight}
                                className="w-5 h-5 flex items-center justify-center rounded-full shadow-[4px_4px_6px_#1a1d20,_-3px_-3px_6px_#4a4e54] hover:scale-110 transition"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gallery Section */}
            <div className="flex flex-col sm:flex-row gap-4 ">
                {/* Left icon */}


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
