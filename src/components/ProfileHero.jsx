import { Faker, en, faker } from '@faker-js/faker';

export default function ProfileHero(props) {

    return(
        <section className="flex px-32 py-20 justify-between">
            <div>
                <div className="flex gap-6 items-center py-2">
                    <img src={faker.image.avatar()} alt="profile image" width={120} height={120}
                         className="rounded-full"/>
                    <div className="grid gap-1">
                        <p className="text-3xl font-semibold">MayaEsar</p>
                        <p className="text-sm text-gray-500">maya_esar</p>
                    </div>
                </div>
                <div className="text-sm flex gap-2 items-center py-2">
                    <p className="font-semibold">10 followers</p>
                    <p className="font-semibold">12 following</p>
                    <p className="text-gray-500">100 monthly views</p>
                </div>
                <p className="py-3 w-96">Bio... </p>
                <p className="inline-block bg-gray-300 py-2 px-3 rounded-full text-sm font-semibold">Edit profile</p>
            </div>
            <div>
                <img src={faker.image.urlPicsumPhotos({width: 700, height: 350, blur: 0})} alt="profile image" className="rounded-2xl"/>
            </div>
        </section>
    )
}