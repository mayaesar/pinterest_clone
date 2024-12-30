'use client'
import {PiGear, PiX} from "react-icons/pi";
import Link from "next/link";
import {useState} from "react";


export default function SettingsDropdown() {
    const [open, setOpen] = useState(false);

    const displaySettings = () => {

    }

    return(
        <div className="relative flex">
            <button onClick={() => setOpen(true)}><PiGear className="text-2xl md:text-4xl"/> </button>
            {open && (
                <div className="grid gap-2 z-10 bg-white rounded-3xl shadow-2xl absolute top-12 right-0 w-80 pb-6">
                    <button className="absolute right-2 top-2 rounded-3xl hover:bg-gray-200 p-1" onClick={() => setOpen(false)}>
                        <PiX className="size-5" />
                    </button>
                    <div className="grid gap-1">
                        <p className="text-gray-500 text-sm px-5 py-4">Currently in</p>
                        <Link href={`/profile/1`} className="hover:bg-gray-200 px-5">
                            <div className="py-2 flex gap-2 items-center">
                                <img src="https://i.pinimg.com/736x/92/70/02/927002368dfb5a96427ae990838dd112.jpg" alt="profile image" width={40} height={40}
                                     className="rounded-full"/>
                                <p className="text-base">maya_esar</p>
                            </div>
                        </Link>
                    </div>
                    <hr />
                    <div>
                        <p className="text-gray-500 text-sm px-5 py-4">Other</p>
                        <button className="block w-full text-left hover:bg-gray-200 px-5 py-2">Submit Feedback</button>
                        <button className="block w-full text-left hover:bg-gray-200 px-5 py-2">GitHub link</button>
                        <button className="block w-full text-left hover:bg-gray-200 px-5 py-2">My Portfolio</button>
                        <button className="block w-full text-left hover:bg-gray-200 px-5 py-2">Log Out</button>
                    </div>
                </div>
            )}
        </div>
    )
}