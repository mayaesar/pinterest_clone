'use client'
import {PiGear} from "react-icons/pi";
import Link from "next/link";
import {useState} from "react";


export default function SettingsDropdown() {
    const [open, setOpen] = useState(false);

    const displaySettings = () => {

    }

    return(
        <div className="relative flex">
            <button onClick={() => setOpen(true)}><PiGear className="text-4xl"/> </button>
            {open && (
                <div className="grid gap-2 z-10 py-8 px-6 bg-white rounded-3xl shadow-2xl absolute top-12 right-0 w-80 ">
                    <button className="absolute right-3 top-4 text-2xl rounded-3xl hover:bg-gray-200" onClick={() => setOpen(false)}> x </button>
                    <div className="grid gap-1">
                        <p>Currently in</p>
                        <Link href={`/profile/1`} className=" rounded-3xl hover:bg-gray-200">
                            <div className="py-2 flex gap-2 items-center">
                                <img src="https://i.pinimg.com/736x/92/70/02/927002368dfb5a96427ae990838dd112.jpg" alt="profile image" width={40} height={40}
                                     className="rounded-full"/>
                                <p className="text-base">maya_esar</p>
                            </div>
                        </Link>
                    </div>
                    <div className="grid">
                        <p>Switch accounts</p>
                        <Link href={`/profile/1`} className=" rounded-3xl hover:bg-gray-200">
                            <div className="py-2 flex gap-2 items-center">
                                <img src="https://i.pinimg.com/736x/92/70/02/927002368dfb5a96427ae990838dd112.jpg" alt="profile image" width={40} height={40}
                                     className="rounded-full"/>
                                <p className="text-base">maya_esar</p>
                            </div>
                        </Link>
                        <Link href={`/profile/1`} className=" rounded-3xl hover:bg-gray-200">
                            <div className="py-4 flex gap-2 items-center">
                                <img src="https://i.pinimg.com/736x/92/70/02/927002368dfb5a96427ae990838dd112.jpg" alt="profile image" width={40} height={40}
                                     className="rounded-full"/>
                                <p className="text-base">maya_esar</p>
                            </div>
                        </Link>
                        <Link href={`/profile/1`} className=" rounded-3xl hover:bg-gray-200">
                            <div className="py-4 flex gap-2 items-center">
                                <img src="https://i.pinimg.com/736x/92/70/02/927002368dfb5a96427ae990838dd112.jpg" alt="profile image" width={40} height={40}
                                     className="rounded-full"/>
                                <p className="text-base">maya_esar</p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <p>Other</p>
                        <p className=" rounded-3xl hover:bg-gray-200">Submit Feedback</p>
                        <p className=" rounded-3xl hover:bg-gray-200">GitHub link</p>
                        <p className=" rounded-3xl hover:bg-gray-200">My Portfolio</p>
                        <p className=" rounded-3xl hover:bg-gray-200">Log Out</p>

                    </div>
                </div>
            )}
        </div>
    )
}