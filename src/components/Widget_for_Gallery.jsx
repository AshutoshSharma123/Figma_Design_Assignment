import React, { useState, useRef, useEffect } from "react";

export default function GalleryWidget() {
    const [images, setImages] = useState([]);
    const inpRef = useRef();

    useEffect(() => {
        const saved = localStorage.getItem("galleryImgs");
        if (saved) setImages(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem("galleryImgs", JSON.stringify(images));
    }, [images]);

    const onAdd = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
            setImages((s) => [...s, reader.result]);
        };
        reader.readAsDataURL(file);
        e.target.value = "";
    };

    return (
        <div className="bg-[#363C43] rounded-xl p-5 shadow-neuLight relative max-w-4xl w-full mx-auto">
            <div className="flex items-center justify-between mb-4 gap-3 ">

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

                <div className="flex items-center w-full justify-between ">
                    <div className="bg-[#202023] shadow-[6px_6px_22px_#202023,_6px_6px_20px_#202023] text-white px-6 py-2 rounded-[1rem] text-sm font-medium transition-all duration-300 ">Gallery</div>
                    <div className="flex items-center gap-3">
                        <label className=" flex items-center justify-center gap-2 p-4 text-xs h-[1.4rem] rounded-full bg-[#2f3437] shadow-neuInset cursor-pointer shadow-[4px_4px_8px_#1a1d20]">
                            + ADD IMAGE
                            <input ref={inpRef} type="file" accept="image/*" onChange={onAdd} className="hidden" />
                        </label>



                        <div className="flex gap-[-2]">
                            <button className="w-6 h-6 flex items-center justify-center rounded-full shadow-neuLight shadow-[4px_4px_8px_#1a1d20]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    className="text-[#2f3437]"
                                >
                                    <path
                                        d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"
                                        fill="#a9abaeff"
                                    />
                                    <path
                                        d="m12.707 8.707-1.414-1.414L6.586 12l4.707 4.707 1.414-1.414L10.414 13H16v-2h-5.586l2.293-2.293z"
                                        fill="#a9abaeff"
                                    />
                                </svg>
                            </button>

                            <button className="w-6 h-6 flex items-center justify-center rounded-full shadow-neuLight shadow-[4px_4px_8px_#1a1d20]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    className="text-[#363C43]"
                                >
                                    <path
                                        d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"
                                        fill="#a9abaeff"
                                    />
                                    <path
                                        d="M11.293 8.707 13.586 11H8v2h5.586l-2.293 2.293 1.414 1.414L17.414 12l-4.707-4.707-1.414 1.414z"
                                        fill="#a9abaeff"
                                    />
                                </svg>
                            </button>

                        </div>


                    </div>
                </div>
            </div>



            <div className="grid grid-cols-3 gap-4">
                {images.length === 0 && (
                    <>
                        <div className="h-28 rounded-xl bg-gray-700/30" />
                        <div className="h-28 rounded-xl bg-gray-700/30" />
                        <div className="h-28 rounded-xl bg-gray-700/30" />
                    </>
                )}
                {images.map((src, idx) => (
                    <img
                        key={idx}
                        src={src}
                        alt={`gallery-${idx}`}
                        className="w-full h-28 object-cover rounded-xl"
                    />
                ))}
            </div>
        </div>
    );
}
