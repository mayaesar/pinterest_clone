'use client'

import {PiArrowLeftLight} from "react-icons/pi";
import {useRouter} from "next/navigation";

export default function ButtonBack() {
    const router = useRouter();

    return(
        <button onClick={() => router.back() } >
            <PiArrowLeftLight className="text-4xl" />
        </button>

    )
}