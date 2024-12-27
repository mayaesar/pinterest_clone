import {PiBell, PiMagnifyingGlass, PiPinterestLogoFill} from "react-icons/pi";
import Link from 'next/link';


export default function TopBar(props) {

    return(
        <section className="flex items-center p-4 gap-6">
            <div className=" text-xl font-semibold">
                <Link href="/" className="flex items-center gap-4"><PiPinterestLogoFill className="text-red-600 text-4xl"/> Pinterest Clone </Link>
            </div>
            <div className="flex-1 flex items-center gap-2 p-2 text-xl bg-gray-200 rounded-3xl"><PiMagnifyingGlass className="text-3xl"/> Search </div>
            <div> <PiBell className="text-4xl"/></div>
            <div>
                <Link href="/profile/1"> <img
                    src="https://i.pinimg.com/736x/92/70/02/927002368dfb5a96427ae990838dd112.jpg" alt="profile image"
                    className="rounded-full size-12"/> </Link>
            </div>
        </section>
    )
}