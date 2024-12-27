import {PiDownloadSimpleBold, PiHeartBold} from "react-icons/pi";
import profile from "@/../mocks/users.json"
import {faker} from "@faker-js/faker";




export default function Page ({ params }) {
    return(
        <section className='max-w-screen-xl w-full mx-auto mt-16'>
            <div className='rounded-2xl grid grid-cols-2 gap-2 border border-gray-300 overflow-hidden'>
                <div>
                    <img src={profile.img} alt='image'
                         loading="lazy"
                         className="object-contain"/>
                </div>
                <div className="px-5 py-4">
                    <div className="flex items-center gap-4 text-xl">
                        <p className="flex items-center gap-1"><PiHeartBold/> 6 </p>
                        <PiDownloadSimpleBold/>
                        <p className="inline-block bg-red-600 text-white py-3 px-4 rounded-full text-base font-semibold ml-auto">Save</p>
                    </div>
                    <div className="py-4 flex gap-2 items-center">
                        <img src={faker.image.avatar()} alt="profile image" width={30} height={30}
                             className="rounded-full"/>
                        <p className="text-sm"> Mayaesar </p>
                    </div>
                </div>
            </div>
        </section>

    )
}