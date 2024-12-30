import {PiBell, PiPinterestLogoFill, PiPlus} from "react-icons/pi";
import Link from 'next/link';
import SearchBar from "@/components/SearchBar";
import SettingsDropdown from "@/components/SettingsDropdown";

export default function TopBar() {
    return (
        <section className="flex items-center p-4 gap-3 md:gap-6">
            <div className="shrink-0 text-lg md:text-xl font-semibold">
                <Link href="/" className="flex items-center gap-4">
                    <PiPinterestLogoFill className="text-red-600 text-3xl md:text-4xl"/>
                    <span>Pinterest Clone</span>
                </Link>
            </div>
            <div className="flex-1 hidden md:block">
                <SearchBar />
            </div>
            <div className="ml-auto"> <PiBell className="text-2xl md:text-4xl"/></div>
            <div> <Link href="/post/create"><PiPlus className="text-2xl md:text-4xl"/> </Link>  </div>
            <div className="shrink-0">
                <Link href="/profile/1">
                    <img
                        src="https://i.pinimg.com/736x/92/70/02/927002368dfb5a96427ae990838dd112.jpg" alt="profile image"
                        className="rounded-full size-8 md:size-12"
                    />
                </Link>
            </div>
            <SettingsDropdown />
        </section>
    )
}