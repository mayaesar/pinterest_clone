
export default function ProfileHero({user}) {

    return(
        <section className="flex flex-col-reverse md:flex-row gap-3 mb-12">
            <div>
                <div className="flex gap-6 items-center py-2">
                    <img src={user.profile_img} alt="profile image" width={120} height={120}
                         className="rounded-full"/>
                    <div className="grid gap-1">
                        <p className="text-3xl font-semibold">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.username}</p>
                    </div>
                </div>
                <div className="text-sm flex gap-2 items-center py-2">
                    <p className="font-semibold">{user.followers} followers</p>
                    <p className="font-semibold">{user.following} following</p>
                    <p className="text-gray-500">{user.monthly} monthly views</p>
                </div>
                <p className="py-3 w-96">{user.bio}</p>
                {/*<p className="inline-block bg-gray-200 py-3 px-4 rounded-full text-sm font-semibold">Edit profile</p>*/}
            </div>
            <div>
                <img src={user.banner_img } alt="profile image" className="rounded-2xl w-[700px] h-[350px] object-cover"/>
            </div>
        </section>
    )
}