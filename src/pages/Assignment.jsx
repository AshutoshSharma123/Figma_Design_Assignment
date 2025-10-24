import React from "react";
import TabsWidget from '../components/Widget_for_tab'
import GalleryWidget from '../components/Widget_for_Gallery';
import Separator from "../components/Separator";

export default function Assignment() {
    return (
        <div className="gap-4 w-full flex flex-col justify-center items-center">
            <TabsWidget />
            <Separator />
            <GalleryWidget />
            <Separator />
        </div>
    );
}
