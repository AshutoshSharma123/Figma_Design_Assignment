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
        <div className="bg-card rounded-xl p-6 shadow-neuLight">
            <div className="flex items-center justify-between mb-6">
                <div className="bg-accent px-4 py-2 rounded-full text-white">Gallery</div>
                <div className="flex items-center gap-3">
                    <label className="px-4 py-2 rounded-full bg-[#2f3437] shadow-neuInset cursor-pointer">
                        + ADD IMAGE
                        <input ref={inpRef} type="file" accept="image/*" onChange={onAdd} className="hidden" />
                    </label>
                    <button className="w-10 h-10 rounded-full shadow-neuLight">◀</button>
                    <button className="w-10 h-10 rounded-full shadow-neuLight">▶</button>
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
